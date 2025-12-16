<template>
  <div 
    class="smart-image-container"
    :class="containerClasses"
    :style="containerStyles"
  >
    <!-- 加载占位符 -->
    <div 
      v-if="showPlaceholder && !imageLoaded"
      class="image-placeholder"
      :style="placeholderStyles"
    >
      <div class="placeholder-spinner" v-if="loading === 'lazy'">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
        </svg>
      </div>
      <span v-else-if="altText" class="placeholder-text">{{ altText.substring(0, 10) }}</span>
    </div>

    <!-- 主图片 -->
    <img
      ref="imageRef"
      :src="optimizedSrc"
      :alt="altText"
      :class="imageClasses"
      :style="imageStyles"
      :loading="loading"
      @load="onImageLoad"
      @error="onImageError"
      @click="handleImageClick"
    />

    <!-- 图片信息标签 -->
    <div v-if="showInfo && imageInfo" class="image-info">
      <span class="image-dimensions">{{ imageInfo.width }}×{{ imageInfo.height }}</span>
      <span v-if="imageInfo.size" class="image-size">{{ formatFileSize(imageInfo.size) }}</span>
    </div>

    <!-- 图片说明 -->
    <div v-if="caption" class="image-caption">
      <span>{{ caption }}</span>
    </div>

    <!-- 全屏预览 -->
    <div 
      v-if="showPreview && previewVisible"
      class="image-preview-overlay"
      @click="closePreview"
    >
      <div class="image-preview-content" @click.stop>
        <button class="preview-close" @click="closePreview">×</button>
        <img
          :src="fullSrc"
          :alt="altText"
          class="preview-image"
          @load="onPreviewLoad"
        />
        <div v-if="caption" class="preview-caption">{{ caption }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 图片工具函数
const imageUtils = {
  // 计算最佳显示尺寸
  calculateOptimalSize(originalWidth, originalHeight, options) {
    const {
      maxWidth = 1200,
      maxHeight = 800,
      minWidth = 100,
      minHeight = 100,
      containerWidth = 800
    } = options;

    let width = originalWidth;
    let height = originalHeight;
    const aspectRatio = originalWidth / originalHeight;

    // 限制最大尺寸
    if (width > maxWidth) {
      width = maxWidth;
      height = Math.round(width / aspectRatio);
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = Math.round(height * aspectRatio);
    }

    // 确保最小尺寸
    width = Math.max(minWidth, width);
    height = Math.max(minHeight, height);

    // 考虑容器宽度
    if (width > containerWidth) {
      width = containerWidth;
      height = Math.round(width / aspectRatio);
    }

    return { width, height };
  },

  // 获取图片类型
  getImageType(src) {
    if (src.includes('data:')) return 'dataurl';
    const ext = src.split('.').pop().toLowerCase().split('?')[0];
    if (['jpg', 'jpeg'].includes(ext)) return 'jpeg';
    if (['png', 'gif', 'webp', 'svg', 'bmp'].includes(ext)) return ext;
    return 'unknown';
  },

  // 格式化文件大小
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  },

  // 获取合适的圆角半径
  getBorderRadius(width, height, aspectRatio) {
    const minDimension = Math.min(width, height);
    if (aspectRatio > 3 || aspectRatio < 0.33) {
      // 极端长宽比使用小圆角
      return `${Math.min(4, minDimension * 0.01)}px`;
    } else if (aspectRatio > 2 || aspectRatio < 0.5) {
      // 较大长宽比使用中等圆角
      return `${Math.min(8, minDimension * 0.02)}px`;
    } else {
      // 接近正方形的使用较大圆角
      return `${Math.min(12, minDimension * 0.03)}px`;
    }
  },

  // 获取合适的阴影
  getShadowStyle(width, height, type) {
    const area = width * height;
    const shadowSize = Math.min(Math.max(area / 500000, 0.5), 3);
    
    switch (type) {
      case 'small':
        return `0 2px ${shadowSize * 2}px rgba(0, 0, 0, 0.1)`;
      case 'medium':
        return `0 4px ${shadowSize * 4}px rgba(0, 0, 0, 0.15)`;
      case 'large':
        return `0 8px ${shadowSize * 8}px rgba(0, 0, 0, 0.2)`;
      case 'hover':
        return `0 12px ${shadowSize * 12}px rgba(0, 0, 0, 0.25)`;
      default:
        return `0 4px ${shadowSize * 4}px rgba(0, 0, 0, 0.15)`;
    }
  }
};

export default {
  name: 'SmartImage',
  
  props: {
    // 基础属性
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    
    // 尺寸控制
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    maxWidth: {
      type: [Number, String],
      default: 1200
    },
    maxHeight: {
      type: [Number, String],
      default: 800
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    
    // 样式控制
    radius: {
      type: [String, Number, Boolean],
      default: 'auto' // 'auto', 'none', 'small', 'medium', 'large', 或具体数值
    },
    shadow: {
      type: [String, Boolean],
      default: 'auto' // 'auto', 'none', 'small', 'medium', 'large', 'hover'
    },
    border: {
      type: [String, Boolean],
      default: false
    },
    background: {
      type: String,
      default: 'auto' // 'auto', 'light', 'dark', 'transparent'
    },
    
    // 功能控制
    lazy: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    showInfo: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: [String, Boolean],
      default: true
    },
    
    // 响应式控制
    responsive: {
      type: Boolean,
      default: true
    },
    breakpoints: {
      type: Object,
      default: () => ({
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
      })
    },
    
    // 自定义类名
    customClass: {
      type: String,
      default: ''
    }
  },
  
  data() {
    return {
      imageLoaded: false,
      imageError: false,
      imageInfo: null,
      previewVisible: false,
      previewLoaded: false,
      containerWidth: 800,
      isDarkMode: false,
      currentBreakpoint: 'lg'
    };
  },
  
  computed: {
    altText() {
      return this.alt || this.caption || 'Image';
    },
    
    loading() {
      return this.lazy ? 'lazy' : 'eager';
    },
    
    optimizedSrc() {
      // 这里可以添加图片优化逻辑，比如使用图片CDN
      // 例如：return this.getOptimizedImageUrl(this.src);
      return this.src;
    },
    
    fullSrc() {
      return this.src;
    },
    
    showPlaceholder() {
      return this.placeholder && !this.imageLoaded;
    },
    
    // 计算图片信息
    calculatedSize() {
      if (this.width && this.height) {
        return {
          width: parseInt(this.width),
          height: parseInt(this.height),
          aspectRatio: parseInt(this.width) / parseInt(this.height)
        };
      }
      
      if (this.imageInfo) {
        const options = {
          maxWidth: parseInt(this.maxWidth),
          maxHeight: parseInt(this.maxHeight),
          containerWidth: this.containerWidth
        };
        
        return imageUtils.calculateOptimalSize(
          this.imageInfo.width,
          this.imageInfo.height,
          options
        );
      }
      
      // 默认尺寸
      return {
        width: this.fullWidth ? '100%' : 400,
        height: 'auto',
        aspectRatio: 1
      };
    },
    
    // 容器类名
    containerClasses() {
      return [
        'smart-image',
        this.customClass,
        {
          'image-loaded': this.imageLoaded,
          'image-error': this.imageError,
          'image-zoomable': this.zoomable,
          'image-full-width': this.fullWidth,
          'image-responsive': this.responsive,
          [`breakpoint-${this.currentBreakpoint}`]: this.responsive
        }
      ];
    },
    
    // 容器样式
    containerStyles() {
      const styles = {};
      
      // 背景色
      if (this.background === 'auto') {
        styles['--image-bg'] = this.isDarkMode ? '#2d2d2d' : '#f8f9fa';
      } else if (this.background !== 'transparent') {
        styles['--image-bg'] = this.background;
      }
      
      // 宽度
      if (this.fullWidth) {
        styles.width = '100%';
      } else if (this.width && !this.responsive) {
        styles.width = typeof this.width === 'number' ? `${this.width}px` : this.width;
      }
      
      return styles;
    },
    
    // 图片类名
    imageClasses() {
      const aspectRatio = this.calculatedSize.aspectRatio;
      
      return [
        'smart-image-content',
        {
          'image-portrait': aspectRatio < 0.8,
          'image-landscape': aspectRatio > 1.2,
          'image-square': aspectRatio >= 0.8 && aspectRatio <= 1.2
        }
      ];
    },
    
    // 图片样式
    imageStyles() {
      const size = this.calculatedSize;
      const aspectRatio = size.aspectRatio;
      const styles = {};
      
      // 尺寸
      if (this.responsive && !this.fullWidth) {
        styles.maxWidth = '100%';
        styles.height = 'auto';
      } else {
        styles.width = typeof size.width === 'number' ? `${size.width}px` : size.width;
        styles.height = typeof size.height === 'number' ? `${size.height}px` : size.height;
      }
      
      // 圆角
      if (this.radius !== 'none') {
        if (this.radius === 'auto') {
          styles.borderRadius = imageUtils.getBorderRadius(size.width, size.height, aspectRatio);
        } else if (typeof this.radius === 'string' && ['small', 'medium', 'large'].includes(this.radius)) {
          const radiusMap = { small: '4px', medium: '8px', large: '12px' };
          styles.borderRadius = radiusMap[this.radius];
        } else if (this.radius) {
          styles.borderRadius = typeof this.radius === 'number' ? `${this.radius}px` : this.radius;
        }
      }
      
      // 阴影
      if (this.shadow !== 'none') {
        const shadowType = this.shadow === 'auto' ? 'medium' : this.shadow;
        styles.boxShadow = imageUtils.getShadowStyle(size.width, size.height, shadowType);
        styles.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        
        if (shadowType === 'hover') {
          styles.cursor = 'pointer';
        }
      }
      
      // 边框
      if (this.border) {
        const borderColor = this.isDarkMode ? 'var(--border-color-dark)' : 'var(--border-color-light)';
        styles.border = typeof this.border === 'string' ? this.border : `1px solid ${borderColor}`;
      }
      
      return styles;
    },
    
    // 占位符样式
    placeholderStyles() {
      const size = this.calculatedSize;
      const styles = {};
      
      if (typeof size.width === 'number') {
        styles.width = `${size.width}px`;
      }
      if (typeof size.height === 'number') {
        styles.height = `${size.height}px`;
      }
      
      return styles;
    }
  },
  
  mounted() {
    this.initImage();
    this.checkDarkMode();
    this.updateContainerWidth();
    this.updateBreakpoint();
    
    // 监听窗口变化
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeydown);
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeydown);
  },
  
  methods: {
    initImage() {
      const img = this.$refs.imageRef;
      if (img && img.complete) {
        this.onImageLoad();
      }
    },
    
    onImageLoad(event) {
      this.imageLoaded = true;
      this.imageError = false;
      
      const img = event?.target || this.$refs.imageRef;
      if (img) {
        this.imageInfo = {
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight
        };
      }
    },
    
    onImageError() {
      this.imageLoaded = false;
      this.imageError = true;
      console.error(`Failed to load image: ${this.src}`);
    },
    
    handleImageClick() {
      if (this.zoomable && this.imageLoaded) {
        this.previewVisible = true;
        document.body.style.overflow = 'hidden';
      }
    },
    
    closePreview() {
      this.previewVisible = false;
      document.body.style.overflow = '';
    },
    
    onPreviewLoad() {
      this.previewLoaded = true;
    },
    
    checkDarkMode() {
      // 检查是否处于深色模式
      this.isDarkMode = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    
    updateContainerWidth() {
      // 获取容器宽度用于响应式计算
      if (this.$el && this.$el.parentElement) {
        this.containerWidth = this.$el.parentElement.clientWidth || 800;
      }
    },
    
    updateBreakpoint() {
      const width = window.innerWidth;
      const { sm, md, lg, xl } = this.breakpoints;
      
      if (width < sm) this.currentBreakpoint = 'xs';
      else if (width < md) this.currentBreakpoint = 'sm';
      else if (width < lg) this.currentBreakpoint = 'md';
      else if (width < xl) this.currentBreakpoint = 'lg';
      else this.currentBreakpoint = 'xl';
    },
    
    handleResize() {
      this.updateContainerWidth();
      this.updateBreakpoint();
    },
    
    handleKeydown(event) {
      if (event.key === 'Escape' && this.previewVisible) {
        this.closePreview();
      }
    },
    
    formatFileSize(bytes) {
      return imageUtils.formatFileSize(bytes);
    },
    
    // 可选：图片优化URL生成
    getOptimizedImageUrl(src, options = {}) {
      // 这里可以集成图片CDN服务
      // 例如：return `https://cdn.example.com/${encodeURIComponent(src)}?w=${options.width}&q=${options.quality}`;
      return src;
    }
  }
};
</script>

<style scoped>
.smart-image-container {
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: 1.5rem 0;
  transition: all 0.3s ease;
}

.smart-image-content {
  display: block;
  background-color: var(--image-bg, transparent);
  object-fit: contain;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.image-loaded .smart-image-content {
  opacity: 1;
}

/* 占位符样式 */
.image-placeholder {
  background: linear-gradient(110deg, var(--image-bg, #f8f9fa) 8%, #f0f0f0 18%, var(--image-bg, #f8f9fa) 33%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  overflow: hidden;
}

.placeholder-spinner {
  width: 40px;
  height: 40px;
}

.placeholder-spinner svg {
  width: 100%;
  height: 100%;
  animation: rotate 1s linear infinite;
}

.placeholder-spinner circle {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
}

.placeholder-text {
  color: #999;
  font-size: 12px;
  text-align: center;
  padding: 10px;
}

/* 图片信息 */
.image-info {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  display: flex;
  gap: 8px;
  opacity: 0.8;
}

/* 图片说明 */
.image-caption {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  color: var(--text-color-secondary, #666);
  font-style: italic;
}

/* 预览模式 */
.image-preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.image-preview-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: scaleIn 0.3s ease;
}

.preview-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.preview-close:hover {
  opacity: 1;
}

.preview-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.preview-caption {
  text-align: center;
  color: white;
  margin-top: 15px;
  font-size: 16px;
  padding: 0 20px;
}

/* 交互效果 */
.image-zoomable .smart-image-content {
  cursor: zoom-in;
  transition: transform 0.3s ease;
}

.image-zoomable .smart-image-content:hover {
  transform: scale(1.02);
}

.shadow-hover .smart-image-content:hover {
  box-shadow: var(--image-shadow-hover, 0 12px 24px rgba(0, 0, 0, 0.25));
}

/* 响应式断点 */
@media (max-width: 640px) {
  .image-responsive.breakpoint-xs .smart-image-content {
    max-width: 100%;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .image-responsive.breakpoint-sm .smart-image-content {
    max-width: 90%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .image-responsive.breakpoint-md .smart-image-content {
    max-width: 85%;
  }
}

/* 动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

@keyframes dash {
  0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}

/* 深色模式适配 */
.dark .smart-image-content {
  background-color: var(--image-bg, #2d2d2d);
}

.dark .image-placeholder {
  background: linear-gradient(110deg, #2d2d2d 8%, #3d3d3d 18%, #2d2d2d 33%);
}

.dark .image-caption {
  color: var(--text-color-secondary-dark, #aaa);
}
</style>