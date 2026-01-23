# 开发文档中心
  
<SmartImage 
  src="/avatars/MiragEdge.png" 
  maxWidth="450px"
  alt="锐界幻境"
  caption="MiragEdge ☆ 锐界幻境"
/>

欢迎来到锐界幻境（MiragEdge）开发者文档平台，这里汇总了服务器开发相关的插件、规范与团队信息，助力开发者高效协作。

本开发者模块旨在为所有玩家提供快速上手制作锐界幻境服务器内容的教程。这是我打造共创平台的一个关键步骤。  

最大的挑战不是创意，而是项目管理和持续运营。  

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
    desc: '统筹团队方向、服务端设计、插件开发、贴图UI绘制、文档编撰、硬件和网络系统运维管理等',
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
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1739283257&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/1043033708.jpg',
    name: '静静有魔力',
    title: '语音频道维护 | 网页编写',
    desc: '官方语音频道主要维护者',
    links: [
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1043033708&site=qq&menu=yes' }
    ],
  },
  {
    avatar: '/images/member/3301237007.jpg',
    name: '疑问小猫',
    title: '内容制作 | 星露谷作物',
    desc: '更多作物、食物的玩法内容设计制作',
    links: [
      { icon: 'github', link: 'https://github.com/xiaomao114git' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=3301237007&site=qq&menu=yes' }
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
    avatar: '/images/member/3688625341.jpg',
    name: 'kxdsjxsa',
    title: '赛季玩法设计 | 充值体系设计',
    desc: '为服务器的功能玩法设计与氪金体系设计提供了宝贵的意见',
    links: [
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=3688625341&site=qq&menu=yes' }
    ],
  },
]

// 赞助者列表
const givemoney = [
  {
    avatar: '/images/member/laowu.jpg',
    name: '老无',
    title: '大股东',
    desc: '服务器的步履不停，皆因有赞助者相伴同行',
    links: [
    ],
  },
  {
    avatar: '/images/member/anan.jpg',
    name: '安安',
    title: '依旧是安安啦🐶',
    desc: '一句话',
    links: [
    ],
  },
  {
    avatar: '/images/member/Zelova.png',
    name: '幻辰汐Zelova',
    title: '🆙玩家',
    desc: '曾长期参与服务器测试，反馈大量BUG，超级在线王',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/523518473' },
    ],
  },
  {
    avatar: '/images/member/qipian.jpg',
    name: '𝓺𝓲𝓹𝓲𝓪𝓷',
    title: '金主+1',
    desc: '锐界幻境启动！~',
    links: [
    ],
  },
  {
    avatar: '/images/member/sly.jpg',
    name: 'SLY',
    title: '狐狸挚友兼双林会长',
    desc: '锐界幻境越来越好（都来加入我们公会）',
    links: [
    ],
  },
  {
    avatar: '/images/member/27.jpg',
    name: '贰柒',
    title: '腐竹粗软香糯的女朋友',
    desc: '你不觉得这个莲花真的很好看吗',
    links: [
    ],
  },
]
</script>


<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>开发团队</template>
    <template #lead>
      锐界幻境的稳定运行与功能迭代，离不开每位团队成员的专业付出与持续投入。
    </template>
  </VPTeamPageTitle>
  
  <!-- 核心团队 -->
  <VPTeamMembers size="small" :members="coreMembers" />

  <!-- 贡献者板块 -->
  <VPTeamPageSection>
    <template #title>社区贡献者</template>
    <template #lead>
      感谢每位为服务器添砖加瓦的贡献者，正是你们的参与让锐界幻境更完善。  
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>

  <!-- 赞助者者板块 -->
  <VPTeamPageSection>
    <template #title>赞助者</template>
    <template #lead>
      由衷感恩每一位赞助者的倾力助力与暖心支持，正是这份珍贵的心意与陪伴，为服务器的稳步发展注入了坚实动力，让我们得以携手同行、共筑这片属于所有玩家的美好游戏光景，奔赴更精彩的服务器未来。  
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="givemoney" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<a href="https://openomy.com/FwindEmi86/MiragEdge-DocWeb" target="_blank" style="display: block; width: 100%;" align="center">
  <img src="https://openomy.com/svg?repo=FwindEmi86/MiragEdge-DocWeb&chart=bubble&latestMonth=1" target="_blank" alt="Contribution Leaderboard" style="display: block; width: 100%;" />
</a>

**以上名单，排名不分前后**  