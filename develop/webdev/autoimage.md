# 图片自动化模块

这是个Vue模块，用于在文档网站页面的md代码中快速、优雅地插入图片。  

## 组件配置参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `String` | 必填 | 图片路径 |
| `alt` | `String` | `''` | 替代文本 |
| `caption` | `String` | `''` | 图片说明 |
| `width` | `Number/String` | `null` | 图片宽度 |
| `height` | `Number/String` | `null` | 图片高度 |
| `maxWidth` | `Number/String` | `null` | 最大宽度 |
| `radius` | `String/Number/Boolean` | `'auto'` | 圆角设置 |
| `shadow` | `String/Boolean` | `true` | 阴影效果 |
| `border` | `Boolean/String` | `false` | 边框设置 |
| `lazy` | `Boolean` | `true` | 懒加载 |
| `showInfo` | `Boolean` | `false` | 显示图片信息 |

---

## 基础用法

<SmartImage src="https://picsum.photos/400/300?random=1" alt="示例图片" />

```
<SmartImage src="https://picsum.photos/400/300?random=1" alt="示例图片" />
```

---

## 带说明文字

<SmartImage 
  src="https://picsum.photos/400/300?random=1" 
  alt="示例图片"
  caption="这是一张示例图片的说明文字"
/>

```
<SmartImage 
  src="https://picsum.photos/400/300?random=1" 
  alt="示例图片"
  caption="这是一张示例图片的说明文字"
/>
```

---

## 尺寸控制

- 固定宽度

<SmartImage 
  src="https://picsum.photos/400/300?random=1" 
  width="400"
  caption="固定宽度图片"
/>

- 限制最大宽度

<SmartImage 
  src="https://picsum.photos/400/300?random=1" 
  maxWidth="200px"
  caption="最大宽度200px"
/>

```
<!-- 固定宽度 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1" 
  width="400"
  caption="固定宽度图片"
/>

<!-- 限制最大宽度 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1" 
  maxWidth="200px"
  caption="最大宽度200px"
/>
```

---

## 圆角样式


- 自动圆角

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  radius="auto"
  caption="自动圆角（根据长宽比）"
/>

- 自定义圆角

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  radius="22px"
  caption="22px圆角"
/>

```
<!-- 自动圆角 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  radius="auto"
  caption="自动圆角（根据长宽比）"
/>

<!-- 自定义圆角 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  radius="22px"
  caption="22px圆角"
/>

<!-- 无圆角 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :radius="false"
  caption="无圆角"
/>
```

---

## 阴影效果

- 默认阴影

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  shadow
  caption="默认阴影"
/>

- 自定义阴影

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  shadow="0 2px 8px rgba(0, 0, 0, 0.1)"
  caption="轻阴影"
/>

```
<!-- 默认阴影 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  shadow
  caption="默认阴影"
/>

<!-- 自定义阴影 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  shadow="0 2px 8px rgba(0, 0, 0, 0.1)"
  caption="轻阴影"
/>

<!-- 无阴影 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :shadow="false"
  caption="无阴影"
/>
```

---

## 边框

- 默认边框

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  border
  caption="默认边框"
/>

- 自定义边框

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  border="4px solid #eaecef"
  caption="自定义边框"
/>

- 无边框

<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :border="false"
  caption="无边框"
/>

```
<!-- 默认边框 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  border
  caption="默认边框"
/>

<!-- 自定义边框 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  border="4px solid #eaecef"
  caption="自定义边框"
/>

<!-- 无边框 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :border="false"
  caption="无边框"
/>
```

---

## 加载控制

- 立即加载
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :lazy="false"
  caption="立即加载"
/>

- 懒加载（默认）
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :lazy="true"
  caption="懒加载"
/>

```
<!-- 立即加载 -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :lazy="false"
  caption="立即加载"
/>

<!-- 懒加载（默认） -->
<SmartImage 
  src="https://picsum.photos/400/300?random=1"
  :lazy="true"
  caption="懒加载"
/>
```

---

## 综合示例

<SmartImage 
  src="https://picsum.photos/800/600"
  alt="综合示例"
  caption="综合功能演示：自动圆角、阴影、边框、懒加载"
  width="600"
  radius="auto"
  shadow
  border
  :lazy="true"
/>

```
<SmartImage 
  src="https://picsum.photos/800/600"
  alt="综合示例"
  caption="综合功能演示：自动圆角、阴影、边框、懒加载"
  width="600"
  radius="auto"
  shadow
  border
  :lazy="true"
/>
```

---

## 图片画廊

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 2rem 0;">
  <SmartImage 
    src="https://picsum.photos/400/300?random=1"
    alt="图片1"
    radius="8px"
    shadow
  />
  <SmartImage 
    src="https://picsum.photos/400/300?random=2"
    alt="图片2"
    radius="8px"
    shadow
  />
  <SmartImage 
    src="https://picsum.photos/400/300?random=3"
    alt="图片3"
    radius="8px"
    shadow
  />
</div>

```
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 2rem 0;">
  <SmartImage 
    src="https://picsum.photos/400/300?random=1"
    alt="图片1"
    radius="8px"
    shadow
  />
  <SmartImage 
    src="https://picsum.photos/400/300?random=2"
    alt="图片2"
    radius="8px"
    shadow
  />
  <SmartImage 
    src="https://picsum.photos/400/300?random=3"
    alt="图片3"
    radius="8px"
    shadow
  />
</div>
```