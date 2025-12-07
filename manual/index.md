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


<div className="server-hero">

<h1 className="server-title">
  MiragEdge <span className="star">✰</span> 锐界幻境<br/>
  <br/>
  <small className="server-subtitle">独立于现实的乌托邦</small>
</h1>

</div>

<div className="feature-grid">

  <div className="feature-card server-type">
    <div className="feature-icon"><FaServer /></div>
    <h3>核心架构</h3>
    <ul>
      <li>Java 1.21.8 Purpur 核心</li>
      <li><span className="tag bedrock">Geyser 基岩版支持</span></li>
      <li><span className="tag waterfall">Velocity 负载均衡</span></li>
    </ul>
  </div>

  <div className="feature-card hardware">
    <div className="feature-icon"><FaHeart /></div>
    <h3>硬件保障</h3>
    <ul>
      <li>i5-14600KF 超频物理机</li>
      <li>NVMe 全闪存存储阵列</li>
      <li>每日增量备份 + 异地容灾</li>
    </ul>
  </div>

  <div className="feature-card community">
    <div className="feature-icon"><FaUsers /></div>
    <h3>社区理念</h3>
    <ul>
      <li>公益化的纯净体验</li>
      <li>几乎7×24 小时管理在线</li>
      <li>跨次元社交生态</li>
    </ul>
  </div>

  <div className="feature-card security">
    <div className="feature-icon"><FaShieldAlt /></div>
    <h3>安全防护</h3>
    <ul>
      <li>混合型强力反作弊</li>
      <li>多线路负载均衡</li>
      <li>群服互通自动白名单</li>
    </ul>
  </div>
</div>

<div className="vision-text">
  <blockquote>
    我希望这份文档能帮助你尽可能解决在服务器中游玩所可能遇到的问题！<br/>
    擅用右上角的搜索QWQ ~ <br/>
  </blockquote>
</div>

<Tabs>
  <TabItem value="vision" label="✨ 愿景使命" default>
    <div className="vision-text">
      <blockquote>
        👼🏻远离困恼之地（锐界）和天堂般的境地（幻境）<br/>
        在数字荒漠中打造一片绿洲<br/>
        让每个玩家都能找到属于自己的幻境<br/>
        <footer>—— 狐风轩汐 敬上</footer>
      </blockquote>
    </div>
  </TabItem>

  <TabItem value="join" label="🚀 加入我们">
    <div className="join-methods">
      <div className="method bedrock">
        <h4>服务器 加入方式</h4>
        <code>miragedge.top</code>
        <div className="port">基岩版端口: 19132</div>
      </div>
      <div className="method java">
        <h4>点击加入QQ交流群</h4>
        <code><a href="https://qm.qq.com/cgi-bin/qm/qr?k=r_yUquo3bQwX3bL97RwG1aVj41WIEOI3&jump_from=webapi&authKey=A76pYGWh45XBe5V4kV5m3LWyR3XRpIl30FETYB0/scIEMeRGhIEDlQWmD5HVjSbj" target="_blank" rel="noopener noreferrer">523914625</a></code>
        <div className="port">入群绑定账号可进服</div>
      </div>
    </div>
  </TabItem>
</Tabs>

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

[玩家协议](/manual/eula)

:::info 提示
  none
:::

![MiragEdge](/avatars/MiragEdge.png)
