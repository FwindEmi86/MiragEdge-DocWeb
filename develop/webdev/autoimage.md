# 图片展示示例

## 基础用法

<!-- 简单使用 -->
<SmartImage src="/images/x.jpg" alt="示例图片" />

<!-- 带说明文字 -->
<SmartImage 
  src="/images/x.jpg" 
  alt="示例图片"
  caption="这是一张示例图片的说明文字"
/>

## 尺寸控制

<!-- 指定宽高 -->a
<SmartImage 
  src="/images/x.jpg" 
  width="600"
  height="400"
  caption="固定尺寸图片"
/>

<!-- 最大宽度 -->
<SmartImage 
  src="/images/x.jpg" 
  maxWidth="800"
  caption="限制最大宽度"
/>

<!-- 全宽显示 -->
<SmartImage 
  src="/images/x.jpg"
  fullWidth
  caption="全宽图片"
/>

## 样式控制

<!-- 自定义圆角 -->
<SmartImage 
  src="/images/x.jpg"
  radius="12px"
  caption="圆角图片"
/>

<!-- 自动圆角 -->
<SmartImage 
  src="/images/x.jpg"
  radius="auto"
  caption="自动圆角"
/>

<!-- 阴影效果 -->
<SmartImage 
  src="/images/x.jpg"
  shadow="large"
  caption="大阴影效果"
/>

<!-- 带边框 -->
<SmartImage 
  src="/images/x.jpg"
  border="2px solid #eaecef"
  caption="带边框图片"
/>

<!-- 悬停阴影 -->
<SmartImage 
  src="/images/x.jpg"
  shadow="hover"
  caption="鼠标悬停时有阴影效果"
/>

## 功能控制

<!-- 禁用懒加载 -->
<SmartImage 
  src="/images/x.jpg"
  :lazy="false"
  caption="立即加载"
/>

<!-- 禁用放大 -->
<SmartImage 
  src="/images/x.jpg"
  :zoomable="false"
  caption="不可放大"
/>

<!-- 显示图片信息 -->
<SmartImage 
  src="/images/x.jpg"
  :showInfo="true"
  caption="显示图片尺寸信息"
/>

## 响应式布局

<!-- 自适应 -->
<SmartImage 
  src="/images/x.jpg"
  :responsive="true"
  caption="响应式图片"
/>

<!-- 自定义断点 -->
<SmartImage 
  src="/images/x.jpg"
  :responsive="true"
  :breakpoints="{ sm: 576, md: 768, lg: 992, xl: 1200 }"
  caption="自定义响应式断点"
/>

## 综合示例

<SmartImage 
  src="/images/hero.jpg"
  alt="英雄图片"
  caption="综合功能示例 - 支持圆角、阴影、悬停效果和点击放大"
  maxWidth="900"
  radius="auto"
  shadow="hover"
  border="true"
  background="auto"
  :zoomable="true"
  :showInfo="true"
  :responsive="true"
  customClass="featured-image"
/>

## 画廊示例（多图片）

<div class="image-gallery">
  <SmartImage 
    src="/images/gallery1.jpg"
    width="300"
    height="200"
    radius="8px"
    shadow="medium"
  />
  <SmartImage 
    src="/images/gallery2.jpg"
    width="300"
    height="200"
    radius="8px"
    shadow="medium"
  />
  <SmartImage 
    src="/images/gallery3.jpg"
    width="300"
    height="200"
    radius="8px"
    shadow="medium"
  />
</div>

<style>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 2rem 0;
}
</style>