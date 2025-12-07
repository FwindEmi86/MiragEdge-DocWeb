import { defineConfig } from 'vitepress'
import { MermaidPlugin, MermaidMarkdown } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MiragEdge 文档中心",
  description: "锐界幻境 全方位的指南",
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/title_img/mai2.png' }]
  ],
  themeConfig: {
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '玩法介绍',
        items: [
          { text: '星露谷种植', link: '/features/croups' },
          { text: '星露谷钓鱼', link: '/features/fishing' },
          { text: '特殊附魔', link: '/features/enchantments' },
          { text: '装备升级', link: '/features/mmo' },
          { text: '更多食物', link: '/features/food' },
        ]
      },
      { text: '玩家手册', link: '/manual/' },
      { text: '开发文档', link: '/develop/' },
      {text: '官方Q群', link:'/manual/qq_group'},
      {
        text: '🔗链接', 
        items: [
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/359174372' },
          { text: 'GitHub', link: 'https://github.com/MaiM-with-u/MaiBot' },
          { text: '锐界幻境文档', link: 'https://github.com/MaiM-with-u/docs' },
        ]
      },
    ],
    outline: [1, 4],
    sidebar: {
      '/features/': [
        {
          text: '星露谷种植',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/croups/' },
          ]
        },
        {
          text: '星露谷钓鱼',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/fishing/' },
          ]
        },
        {
          text: '特殊附魔',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/enchantments' },
            { text: '物品列表', link: '/features/enchantments/items' },
            { text: '附魔列表', link: '/features/enchantments/list' },
          ]
        },
        {
          text: '装备升级',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/mmo/' },
          ]
        },
        {
          text: '更多食物',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/food' },
          ]
        }
      ],
 
      '/manual/': [
        { text: '玩家审核', link: '/manual/review' },
        {
          text: '必看',
          collapsed: false,
          items: [
            { text: '🔗 入服方法&链接介绍', link: '/manual/tutorial/serverjoin' },
            { text: '💾 白名单系统', link: '/manual/tutorial/whitelist' },
            { text: '🔌 客户端安装', link: '/manual/tutorial/clientinstall' },
            { text: '🎮 核心玩法目标', link: '/manual/tutorial/gameplay' },
          ]
        },
        {
          text: '玩家守则',
          collapsed: false,
          items: [
            { text: '守则', link: '/manual/eula/' },
          ]
        },
        {
          text: '常见问题',
          collapsed: true,
          items: [
            { text: 'FAQ 概览', link: '/manual/faq/' },
          ]
        },
        {
          text: '参考',
          collapsed: true,
          items: [
            { text: 'QQ 群', link: '/manual/qq_group' },
          ]
        }
      ],
 
      '/develop/': [
        {
          text: '开发文档',
          items: [
            { text: '介绍', link: '/develop/' },
            { text: '开发者与代码规范', link: '/develop/develop_standard' },
          ]
        },
        {
          text: '原创插件开发',
          collapsed: false,
          items: [
            { text: '项目开发说明', link: '/develop/mc_plugins/' },
            {
              text: '现有插件列表', 
              collapsed: false, 
              items: [
                { text: '等价交换商店', link: '/develop/mc_plugins/emcshop' },
              ]
            },
          ]
        },
        { text: '更新日志', link: '/develop/logs' },
        {
          text: '参考',
          collapsed: true,
          items: [
            { text: '概述', link: '/develop/' },
          ]
        }
        // {
        //   text: '开发指南',
        //   collapsed: false,
        //   items: [
        //     { text: 'AI辅助开发', link: '/develop/guide/ai-instruction' }
        //   ]
        // }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MaiM-with-u/MaiBot' }
    ],

    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
  markdown: {
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  vite: {
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },
})
