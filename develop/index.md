# 开发文档中心
  
欢迎来到锐界幻境（MiragEdge）开发者文档平台，这里汇总了服务器开发相关的插件、规范与团队信息，助力开发者高效协作。

---

<SmartImage 
  src="/avatars/MiragEdge.png" 
  maxWidth="600px"
  alt="锐界幻境"
  caption="MiragEdge ☆ 锐界幻境"
/>

本开发者模块旨在为所有玩家提供快速上手制作锐界幻境服务器内容的教程。这是我打造共创平台的一个关键步骤。  

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

// 核心开发团队
const coreMembers = [
  {
    avatar: '/images/member/FwindEmi.jpg',
    name: '狐风轩汐',
    title: '服主 | 技术总负责',
    desc: '统筹团队方向、服务端设计、插件开发、文档编撰、网络运维管理等',
    links: [
      { icon: 'github', link: 'https://github.com/FwindEmi86' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/359174372' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=2011857087&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/1525301523.jpg',
    name: '狐魇星玖',
    title: '视觉设计 | 吉祥物',
    desc: '团队百科全书，负责网站贴图、插画设计，最爱小鱼干～',
    links: [
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1525301523&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/3095328344.jpg',
    name: '雯空璃雫',
    title: '插件开发 | 技术宅',
    desc: '专注MC功能插件开发、技术难题攻坚',
    links: [
      { icon: 'github', link: 'https://github.com/3095328344' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/placeholder' }, // 原链接为图片，暂占位标注
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=3095328344&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/1739283257.jpg',
    name: 'Moshne',
    title: 'RPG制作 | 苟技术',
    desc: '设计制作特殊怪物、BOSS和相关材料',
    links: [
      { icon: 'github', link: 'https://github.com/1739283257' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/placeholder' }, // 原链接为图片，暂占位标注
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1739283257&site=qq&menu=yes' }
    ],
  },
]

// 贡献者列表
const partners = [
  {
    avatar: '/images/member/星跃.jpg',
    name: '阡雪星跃F',
    title: '材质贴图设计师',
    desc: '服务器部分材质、贴图创作，喜欢贴小喵awa',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/placeholder' }, // 原链接为图片，暂占位标注
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=250094683&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/小喵.jpg',
    name: '白帆小喵L',
    title: '材质贴图设计师',
    desc: '服务器部分材质、贴图创作，喜欢贴星跃awa',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/placeholder' }, // 原链接为图片，暂占位标注
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=3518164690&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/2447855163.jpg',
    name: '鸢风夜羽',
    title: '剧情设计 | 世界观缔造者',
    desc: '为锐界幻境的整体世界观提供了大量且关键的设计思路',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/2447855163' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=2447855163&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/炎寒.jpg',
    name: '炎寒fabler',
    title: '社区宣传 | 内容创作者',
    desc: '首位助力服务器宣传的B站UP主，推动社区初期推广',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1891009014' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1732920162&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/Zelova.png',
    name: '幻辰汐Zelova',
    title: '玩家',
    desc: '曾长期参与服务器测试，反馈大量BUG，超级在线王',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/523518473' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1415785556&site=qq&menu=yes' }
    ],
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>开发团队</template>
    <template #lead>
      锐界幻境的稳定运行与功能迭代，离不开每位团队成员的专业付出与持续投入
    </template>
  </VPTeamPageTitle>
  
  <!-- 核心团队 -->
  <VPTeamMembers size="small" :members="coreMembers" />

  <!-- 贡献者板块 -->
  <VPTeamPageSection>
    <template #title>社区贡献者</template>
    <template #lead>
      感谢每位为服务器添砖加瓦的贡献者，正是你们的参与让锐界幻境更完善
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

---

## 📋 文档导航
### 🔧 原创插件列表
| 插件名称 | 插件说明 | 文档链接 |
|----------|----------|----------|
| EMCShop | 等价交换商店（集成物品银行系统，支持物品与货币双向兑换） | [EMCShop 文档](/develop/mc_plugins/emcshop.md) |
| FE_Fly | 幻空翼飞行（限时飞行权限管理系统，支持飞行时长配置） | [FE_Fly 文档](/develop/mc_plugins/fe_fly.md) |

### 📐 开发规范与协作
- [开发者编码规范](/develop/develop_standard) - 统一代码风格、命名规则与提交规范
- [贡献指南 v1.0](#贡献指南v1-0) - 插件开发、内容创作、测试反馈的贡献流程与标准

### 📌 备注
- 若发现文档链接失效、内容错误，可联系核心团队成员反馈；
- 新增插件/规范文档会持续更新至本导航栏，建议收藏本页便于查阅。