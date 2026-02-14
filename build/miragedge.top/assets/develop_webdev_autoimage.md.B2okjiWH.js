import{_ as l,e as t,b as i,c as r,d as e,h as a,f as p}from"./app.CRcr2CJu.js";import"./chunks/vendor.8Zb1yHKv.js";import"./chunks/vendor-mermaid.CoJIYEvD.js";const S=JSON.parse('{"title":"图片自动化模块","description":"","frontmatter":{"contributors":"F.windEmiko,FwindEmi86"},"headers":[],"relativePath":"develop/webdev/autoimage.md","filePath":"develop/webdev/autoimage.md","lastUpdated":1765922784000}'),o={name:"develop/webdev/autoimage.md"},c={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px",margin:"2rem 0"}};function d(u,s,b,m,h,q){const n=t("SmartImage");return i(),r("div",null,[s[0]||(s[0]=e('<h1 id="图片自动化模块" tabindex="-1">图片自动化模块 <a class="header-anchor" href="#图片自动化模块" aria-label="Permalink to &quot;图片自动化模块&quot;">​</a></h1><p>这是个Vue模块，用于在文档网站页面的md代码中快速、优雅地插入图片。</p><h2 id="组件配置参数" tabindex="-1">组件配置参数 <a class="header-anchor" href="#组件配置参数" aria-label="Permalink to &quot;组件配置参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>src</code></td><td><code>String</code></td><td>必填</td><td>图片路径</td></tr><tr><td><code>alt</code></td><td><code>String</code></td><td><code>&#39;&#39;</code></td><td>替代文本</td></tr><tr><td><code>caption</code></td><td><code>String</code></td><td><code>&#39;&#39;</code></td><td>图片说明</td></tr><tr><td><code>width</code></td><td><code>Number/String</code></td><td><code>null</code></td><td>图片宽度</td></tr><tr><td><code>height</code></td><td><code>Number/String</code></td><td><code>null</code></td><td>图片高度</td></tr><tr><td><code>maxWidth</code></td><td><code>Number/String</code></td><td><code>null</code></td><td>最大宽度</td></tr><tr><td><code>radius</code></td><td><code>String/Number/Boolean</code></td><td><code>&#39;auto&#39;</code></td><td>圆角设置</td></tr><tr><td><code>shadow</code></td><td><code>String/Boolean</code></td><td><code>true</code></td><td>阴影效果</td></tr><tr><td><code>border</code></td><td><code>Boolean/String</code></td><td><code>false</code></td><td>边框设置</td></tr><tr><td><code>lazy</code></td><td><code>Boolean</code></td><td><code>true</code></td><td>懒加载</td></tr><tr><td><code>showInfo</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>显示图片信息</td></tr></tbody></table><hr><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',6)),a(n,{src:"https://picsum.photos/400/300?random=1",alt:"示例图片"}),s[1]||(s[1]=e('<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SmartImage src=&quot;https://picsum.photos/400/300?random=1&quot; alt=&quot;示例图片&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="带说明文字" tabindex="-1">带说明文字 <a class="header-anchor" href="#带说明文字" aria-label="Permalink to &quot;带说明文字&quot;">​</a></h2>',3)),a(n,{src:"https://picsum.photos/400/300?random=1",alt:"示例图片",caption:"这是一张示例图片的说明文字"}),s[2]||(s[2]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot; </span></span>
<span class="line"><span>  alt=&quot;示例图片&quot;</span></span>
<span class="line"><span>  caption=&quot;这是一张示例图片的说明文字&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h2 id="尺寸控制" tabindex="-1">尺寸控制 <a class="header-anchor" href="#尺寸控制" aria-label="Permalink to &quot;尺寸控制&quot;">​</a></h2><ul><li>固定宽度</li></ul>`,4)),a(n,{src:"https://picsum.photos/400/300?random=1",width:"400",caption:"固定宽度图片"}),s[3]||(s[3]=p("ul",null,[p("li",null,"限制最大宽度")],-1)),a(n,{src:"https://picsum.photos/400/300?random=1",maxWidth:"200px",caption:"最大宽度200px"}),s[4]||(s[4]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 固定宽度 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot; </span></span>
<span class="line"><span>  width=&quot;400&quot;</span></span>
<span class="line"><span>  caption=&quot;固定宽度图片&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 限制最大宽度 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot; </span></span>
<span class="line"><span>  maxWidth=&quot;200px&quot;</span></span>
<span class="line"><span>  caption=&quot;最大宽度200px&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr><h2 id="圆角样式" tabindex="-1">圆角样式 <a class="header-anchor" href="#圆角样式" aria-label="Permalink to &quot;圆角样式&quot;">​</a></h2><ul><li>自动圆角</li></ul>`,4)),a(n,{src:"https://picsum.photos/400/300?random=1",radius:"auto",caption:"自动圆角（根据长宽比）"}),s[5]||(s[5]=p("ul",null,[p("li",null,"自定义圆角")],-1)),a(n,{src:"https://picsum.photos/400/300?random=1",radius:"22px",caption:"22px圆角"}),s[6]||(s[6]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 自动圆角 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  radius=&quot;auto&quot;</span></span>
<span class="line"><span>  caption=&quot;自动圆角（根据长宽比）&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 自定义圆角 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  radius=&quot;22px&quot;</span></span>
<span class="line"><span>  caption=&quot;22px圆角&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 无圆角 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  :radius=&quot;false&quot;</span></span>
<span class="line"><span>  caption=&quot;无圆角&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><h2 id="阴影效果" tabindex="-1">阴影效果 <a class="header-anchor" href="#阴影效果" aria-label="Permalink to &quot;阴影效果&quot;">​</a></h2><ul><li>默认阴影</li></ul>`,4)),a(n,{src:"https://picsum.photos/400/300?random=1",shadow:"",caption:"默认阴影"}),s[7]||(s[7]=p("ul",null,[p("li",null,"自定义阴影")],-1)),a(n,{src:"https://picsum.photos/400/300?random=1",shadow:"0 2px 8px rgba(0, 0, 0, 0.1)",caption:"轻阴影"}),s[8]||(s[8]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 默认阴影 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  shadow</span></span>
<span class="line"><span>  caption=&quot;默认阴影&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 自定义阴影 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  shadow=&quot;0 2px 8px rgba(0, 0, 0, 0.1)&quot;</span></span>
<span class="line"><span>  caption=&quot;轻阴影&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 无阴影 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  :shadow=&quot;false&quot;</span></span>
<span class="line"><span>  caption=&quot;无阴影&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><h2 id="边框" tabindex="-1">边框 <a class="header-anchor" href="#边框" aria-label="Permalink to &quot;边框&quot;">​</a></h2><ul><li>默认边框</li></ul>`,4)),a(n,{src:"https://picsum.photos/400/300?random=1",border:"",caption:"默认边框"}),s[9]||(s[9]=p("ul",null,[p("li",null,"自定义边框")],-1)),a(n,{src:"https://picsum.photos/400/300?random=1",border:"4px solid #eaecef",caption:"自定义边框"}),s[10]||(s[10]=p("ul",null,[p("li",null,"无边框")],-1)),a(n,{src:"https://picsum.photos/400/300?random=1",border:!1,caption:"无边框"}),s[11]||(s[11]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 默认边框 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  border</span></span>
<span class="line"><span>  caption=&quot;默认边框&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 自定义边框 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  border=&quot;4px solid #eaecef&quot;</span></span>
<span class="line"><span>  caption=&quot;自定义边框&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 无边框 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  :border=&quot;false&quot;</span></span>
<span class="line"><span>  caption=&quot;无边框&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><h2 id="加载控制" tabindex="-1">加载控制 <a class="header-anchor" href="#加载控制" aria-label="Permalink to &quot;加载控制&quot;">​</a></h2><ul><li>立即加载</li></ul>`,4)),a(n,{src:"https://picsum.photos/400/300?random=1",lazy:!1,caption:"立即加载"}),s[12]||(s[12]=p("ul",null,[p("li",null,"懒加载（默认）")],-1)),a(n,{src:"https://picsum.photos/400/300?random=1",lazy:!0,caption:"懒加载"}),s[13]||(s[13]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 立即加载 --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  :lazy=&quot;false&quot;</span></span>
<span class="line"><span>  caption=&quot;立即加载&quot;</span></span>
<span class="line"><span>/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 懒加载（默认） --&gt;</span></span>
<span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>  :lazy=&quot;true&quot;</span></span>
<span class="line"><span>  caption=&quot;懒加载&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr><h2 id="综合示例" tabindex="-1">综合示例 <a class="header-anchor" href="#综合示例" aria-label="Permalink to &quot;综合示例&quot;">​</a></h2>`,3)),a(n,{src:"https://picsum.photos/800/600",alt:"综合示例",caption:"综合功能演示：自动圆角、阴影、边框、懒加载",width:"600",radius:"auto",shadow:"",border:"",lazy:!0}),s[14]||(s[14]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SmartImage </span></span>
<span class="line"><span>  src=&quot;https://picsum.photos/800/600&quot;</span></span>
<span class="line"><span>  alt=&quot;综合示例&quot;</span></span>
<span class="line"><span>  caption=&quot;综合功能演示：自动圆角、阴影、边框、懒加载&quot;</span></span>
<span class="line"><span>  width=&quot;600&quot;</span></span>
<span class="line"><span>  radius=&quot;auto&quot;</span></span>
<span class="line"><span>  shadow</span></span>
<span class="line"><span>  border</span></span>
<span class="line"><span>  :lazy=&quot;true&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><h2 id="图片画廊" tabindex="-1">图片画廊 <a class="header-anchor" href="#图片画廊" aria-label="Permalink to &quot;图片画廊&quot;">​</a></h2>`,3)),p("div",c,[a(n,{src:"https://picsum.photos/400/300?random=1",alt:"图片1",radius:"8px",shadow:""}),a(n,{src:"https://picsum.photos/400/300?random=2",alt:"图片2",radius:"8px",shadow:""}),a(n,{src:"https://picsum.photos/400/300?random=3",alt:"图片3",radius:"8px",shadow:""})]),s[15]||(s[15]=e(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div style=&quot;display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 2rem 0;&quot;&gt;</span></span>
<span class="line"><span>  &lt;SmartImage </span></span>
<span class="line"><span>    src=&quot;https://picsum.photos/400/300?random=1&quot;</span></span>
<span class="line"><span>    alt=&quot;图片1&quot;</span></span>
<span class="line"><span>    radius=&quot;8px&quot;</span></span>
<span class="line"><span>    shadow</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>  &lt;SmartImage </span></span>
<span class="line"><span>    src=&quot;https://picsum.photos/400/300?random=2&quot;</span></span>
<span class="line"><span>    alt=&quot;图片2&quot;</span></span>
<span class="line"><span>    radius=&quot;8px&quot;</span></span>
<span class="line"><span>    shadow</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>  &lt;SmartImage </span></span>
<span class="line"><span>    src=&quot;https://picsum.photos/400/300?random=3&quot;</span></span>
<span class="line"><span>    alt=&quot;图片3&quot;</span></span>
<span class="line"><span>    radius=&quot;8px&quot;</span></span>
<span class="line"><span>    shadow</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,1))])}const T=l(o,[["render",d]]);export{S as __pageData,T as default};
