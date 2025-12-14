# 锐界幻境 玩家手册

<style>
.doc-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.doc-card {
  background: linear-gradient(135deg, #ff8c00 0%, #32cd32 100%);
  border-radius: 15px;
  padding: 15px;
  color: white !important;
  text-decoration: none !important;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.doc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

.doc-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #32cd32 0%, #ff8c00 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.doc-card:hover::before {
  opacity: 1;
}

.doc-card-content {
  position: relative;
  z-index: 2;
}

.doc-card a {
  text-decoration: none !important;
  color: inherit !important;
}

.doc-card h3 {
  margin: 0 0 10px 0;
  font-size: 1.3em;
  font-weight: 600;
  color: white;
}

.doc-card p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.4;
  color: white;
}



.section-title {
  font-size: 1.8em;
  margin: 40px 0 20px 0;
  color: #333;
  border-bottom: 3px solid #32cd32;
  padding-bottom: 10px;
}



.avatar-section {
  text-align: center;
  margin: 40px 0;
}

.avatar-section img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.avatar-section img:hover {
  transform: scale(1.1);
}
</style>



<div class="doc-cards">
  <a href="/manual/tutorial/serverjoin" class="doc-card">
    <div class="doc-card-content">
      <h3>🔗 入服方法&链接</h3>
      <p>快速加入锐界幻境服务器</p>
    </div>
  </a>
</div>

<div class="doc-cards">
  <a href="/manual/tutorial/whitelist" class="doc-card">
    <div class="doc-card-content">
      <h3>💾 白名单系统</h3>
      <p>一道安全保障，避免未知的危险用户加入服务器</p>
    </div>
  </a>
</div>



<div class="doc-cards">
  <a href="/manual/tutorial/clientinstall" class="doc-card">
    <div class="doc-card-content">
      <h3>🔌 客户端安装</h3>
      <p>xxx</p>
    </div>
  </a>
</div>



<div class="doc-cards">
  <a href="/manual/tutorial/gameplay" class="doc-card">
    <div class="doc-card-content">
      <h3>🎮 核心玩法目标</h3>
      <p>xxx</p>
    </div>
  </a>
</div>

<div class="doc-cards">
  <a href="/manual/faq/" class="doc-card">
    <div class="doc-card-content">
      <h3>❓ 常见问题</h3>
      <p>账户相关问题、常见问题修复、功能使用疑问等</p>
    </div>
  </a>
</div>

### 其他

[玩家协议](/manual/eula/index.md)

:::info 提示
  none
:::

![MiragEdge](/avatars/MiragEdge.png)
