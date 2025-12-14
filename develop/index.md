# MiragEdge 开发文档中心

欢迎来到锐界幻境开发者文档！

---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: '/images/member/FwindEmi.jpg',
    name: '狐风轩汐',
    title: '服主、团队方向引领、服务端开发、MC插件开发、文档制作、网络运维管理',
    QQ: '2011857087',
    links: [
      { icon: 'github', link: 'https://github.com/FwindEmi86' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/359174372' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=2011857087&site=qq&menu=yes" target="_blank'}
    ],
  },
  {
    avatar: '/images/member/1525301523.jpg',
    name: '狐魇星玖',
    title: '吉祥物，百科全书！最喜欢吃草莓冰激凌。帮助设计制作了很多网站贴图插画awa',
    links: [
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1525301523&site=qq&menu=yes" target="_blank'}
    ],
  },
  {
    avatar: '/images/member/3095328344.jpg',
    name: '雯空璃雫',
    title: '功能、插件开发，神奇技术宅',
    links: [
      { icon: 'github', link: 'https://github.com/3095328344' },
      { icon: 'bilibili', link: '/images/member/3095328344.png' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=3095328344&site=qq&menu=yes" target="_blank'}
    ],
  },
  {
    avatar: '/images/member/星跃.jpg',
    name: '阡雪星跃F',
    title: '材质贴图创作。最喜欢贴小喵）',
    links: [
      { icon: 'bilibili', link: '/images/member/星跃.jpg' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=250094683&site=qq&menu=yes" target="_blank'}
    ],
  },
  {
    avatar: '/images/member/小喵.jpg',
    name: '白帆小喵L',
    title: '材质贴图创作。最喜欢贴星跃）',
    links: [
      { icon: 'bilibili', link: '/images/member/小喵.jpg' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=3518164690&site=qq&menu=yes" target="_blank'}
    ],
  },
]

const partners = [
  {
    avatar: '/images/member/Zelova.png',
    name: '幻辰汐Zelova',
    title: '无敌在线王，曾经测出了很多BUG？',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/523518473' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1415785556&site=qq&menu=yes" target="_blank'}
    ],
  },
  {
    avatar: '/images/member/炎寒.jpg',
    name: '炎寒fabler',
    title: '第一位帮助宣传的B站up。',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1891009014' },
      { icon: 'qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=1732920162&site=qq&menu=yes" target="_blank'}
    ],
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>开发团队</template>
    <template #lead>
    MiragEdge的开发运营离不开每位团队成员夜以继日的辛勤付出
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>贡献者</template>
    <template #lead>
    贡献者是那些做出贡献但不在核心团队中的成员，感谢您做出的贡献！
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>



## 文档导航

### 原创插件列表
- [EMCShop](/develop/mc_plugins/emcshop.md) - 等价交换商店（物品银行系统）
- [FE_Fly](/develop/mc_plugins/fe_fly.md) - 幻空翼飞行（限时飞行系统）


### 服务器内容共创开发资源和规范
- [开发者与代码规范](/develop/develop_standard)
- [贡献指南](#贡献指南v1-0)
