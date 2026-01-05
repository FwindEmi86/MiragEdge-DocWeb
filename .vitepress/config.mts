import { defineConfig } from 'vitepress'
import { MermaidPlugin, MermaidMarkdown } from "vitepress-plugin-mermaid";
import addContributorsPlugin from './theme/addContributors';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MiragEdge 文档中心",
  description: "锐界幻境 全方位的指南",
  
  // 基础路径，如果部署在子路径下需要设置
  base: '/',
  
  // 输出目录
  outDir: '.vitepress/dist',
  
  // 语言配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      description: '锐界幻境 全方位的指南',
    }
  },
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/title_img/dis.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/title_img/LOGO-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/title_img/LOGO-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/title_img/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/title_img/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'MiragEdge, 锐界幻境, Minecraft, 我的世界, 服务器, 文档, 玩家手册, 狐风轩汐, FwindEmi, F.windEmi' }],
    ['meta', { name: 'author', content: 'F.windEmiko' }],
    ['meta', { property: 'og:title', content: 'MiragEdge 文档中心' }],
    ['meta', { property: 'og:description', content: '锐界幻境 全方位的指南' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/title_img/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://docs.miraged.ge' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@FwindEmiko' }],
    // 百度站点验证（如果需要）
    // ['meta', { name: 'baidu-site-verification', content: 'code-xxxxxxxx' }],
    // 360站点验证（如果需要）
    // ['meta', { name: '360-site-verification', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }],
  ],
  
  // Markdown 配置
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true, // 显示代码行号
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  
  // Vite 配置
  vite: {
    plugins: [
      MermaidPlugin(),
      addContributorsPlugin(),
    ],
    optimizeDeps: {
      include: ['mermaid'],
      exclude: ['mark.js'] // 排除 mark.js
    },
    ssr: {
      noExternal: ['mermaid'],
      external: ['mark.js'] // 外部化 mark.js
    },
    // 构建优化
    build: {
      chunkSizeWarningLimit: 2000, // 提高 chunk 大小警告限制
      sourcemap: false, // 生产环境关闭 sourcemap
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // 将 node_modules 中的依赖包拆分成更小的 chunks
            if (id.includes('node_modules')) {
              if (id.includes('mermaid')) {
                return 'vendor-mermaid';
              }
              if (id.includes('vue') || id.includes('vitepress')) {
                return 'vendor-vue';
              }
              return 'vendor';
            }
          }
        }
      },
      // terser 压缩选项
      //terserOptions: {
      //  compress: {
      //    drop_console: false, // 保留 console 输出，方便调试
      //    drop_debugger: true
      //  }
      //}
    },
    server: {
      fs: {
        allow: ['..'] // 允许访问父目录
      }
    }
  },
  
  // 主题配置
  themeConfig: {
    // 搜索配置
    search: {
      provider: 'local',// algolia
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        },
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: true,
            prefix: true,
            boost: { title: 2, content: 1 }
          },
        }
      }
    },
    
    // 导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '🎮 玩法介绍',
        link: '/features/index',
        activeMatch: '^/features/'
      },
      { 
        text: '📚 玩家手册', 
        link: '/manual/review',
        activeMatch: '^/manual/'
      },
      { 
        text: '💻 开发文档', 
        link: '/develop/',
        activeMatch: '^/develop/'
      },
      { 
        text: '👥 官方Q群', 
        link: '/manual/qq_group' 
      },
      //{
      //  text: '🔗 相关链接', 
      //  items: [
      //    { 
      //      text: '📺 哔哩哔哩 - 狐风轩汐', 
      //      link: 'https://space.bilibili.com/359174372',
      //      target: '_blank',
      //      rel: 'noopener noreferrer'
      //    },
      //    { 
      //      text: '📦 GitHub - 锐界幻境文档', 
      //      link: 'https://github.com/FwindEmi86/MiragEdge-DocWeb',
      //      target: '_blank',
      //      rel: 'noopener noreferrer'
      //    },
      //  ]
      //},
    ],
    
    // 侧边栏配置
    sidebar: {
      '/features/': [
        {text: '📖 玩法总览', link: '/features/index' },
        {
          text: '🌼 真实季节',
          collapsed: false,
          items: [
            { text: '整体介绍', link: '/features/seasons/info' },
            { text: '温度系统', link: '/features/seasons/temperature' },
            { text: '春季', link: '/features/seasons/spring' },
            { text: '夏季', link: '/features/seasons/summer' },
            { text: '秋季', link: '/features/seasons/fall' },
            { text: '冬季', link: '/features/seasons/winter' },
          ]
        },
        {
          text: '🌱 星露谷种植',
          collapsed: true,
          items: [
            { text: '介绍', link: '/features/croups/info' },
          ]
        },
        {
          text: '🎣 星露谷钓鱼',
          collapsed: true,
          items: [
            { text: '介绍', link: '/features/fishing/info' },
          ]
        },
        {
          text: '✨ 更多附魔',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/enchantments/info' },
            { text: '品质等级', link: '/features/enchantments/rarity' },
            { text: '功能分类', link: '/features/enchantments/group' },
            { text: '附魔列表', link: '/features/enchantments/list' },
            { text: '祛魔系统', link: '/features/enchantments/chesed' },
          ]
        },
        {
          text: '⚔️ 装备升级',
          collapsed: true,
          items: [
            { text: '介绍', link: '/features/mmo/info' },
          ]
        },
        {
          text: '🍲 更多食物',
          collapsed: true,
          items: [
            { text: '介绍', link: '/features/food/info' },
          ]
        }
      ],
 
      '/manual/': [
        {
          text: '📌 必看指南',
          collapsed: false,
          items: [
            { text: '✅ 玩家审核', link: '/manual/review' },
            { text: '⚖️ 玩家守则', link: '/manual/eula' },
            { text: '🔗 入服方法', link: '/manual/tutorial/serverjoin' },
            { text: '💾 白名单系统', link: '/manual/tutorial/whitelist' },
            { text: '🔌 客户端安装', link: '/manual/tutorial/clientinstall' },
            { text: '🎮 核心玩法目标', link: '/manual/tutorial/gameplay' },
          ]
        },
        {
          text: '🔧 常用功能教程',
          collapsed: false,
          items: [
            { text: '🐧 群服互通机器人', link: '/manual/function/qqbot' },
            { text: '💰 经济系统', link: '/manual/function/economy' },
            { text: '🏠 玩家工会', link: '/manual/function/playerguild' },
          ]
        },
        {
          items: [
            {
              text: '🌏 世界观故事',
              link: '/manual/other/worldview'
            },
            {
              text: '❓ 常见问题',
              link: '/manual/faq'
            },
            {
              text: '💬 QQ 群组',
              link: '/manual/qq_group'
            },
        {
          text: '🚩 历史事件记录',
          collapsed: true,
          items: [
            { text: '2026元旦合照纪念活动', link: '/manual/active/20260101' },
            { text: '新服数据丢失事件', link: '/manual/active/20251225' },
            { text: '存档数据重置', link: '/manual/active/20251017' },
          ]
        },
          ],
        }
      ],
 
      '/develop/': [
        {
          text: '📖 开发文档',
          items: [
            { text: '👥 开发团队与介绍', link: '/develop/' },
            { text: '📝 代码规范', link: '/develop/develop_standard' },
          ]
        },
        {
          text: '🔌 原创插件开发',
          collapsed: false,
          items: [
            { text: '📋 项目开发说明', link: '/develop/mc_plugins/' },
            {
              text: '📊 现有插件列表', 
              collapsed: true, 
              items: [
                { text: '💰 等价交换商店', link: '/develop/mc_plugins/emcshop' },
                { text: '🛩️ 幻空翼飞行', link: '/develop/mc_plugins/fe_fly' },
                { text: '📜 冒险等级任务', link: '/develop/mc_plugins/fe_quests' },
                { text: '🗞️ 物品功能核心', link: '/develop/mc_plugins/fe_itemscore' },
              ]
            },
          ]
        },
        {
          text: '🎨 服务器插件配置编写',
          collapsed: false,
          items: [
            { text: '🌽 自定义种植作物', link: '/develop/server_configs/customcrops' },
          ]
        },
        {
          text: '📕 网站开发编辑',
          collapsed: false,
          items: [
            { text: '🎇 自动图像组件', link: '/develop/webdev/autoimage' },
          ]
        },
        { 
          text: '✨ 贴图字符码', 
          link: '/develop/sticker' 
        },
        { 
          text: '📅 更新日志', 
          link: '/develop/logs' 
        },
        {
          text: '🔗 关于',
          collapsed: true,
          items: [
            { text: '概述', link: '/develop/' },
            { text: '旧文档', link: 'https://doc.miragedge.top' },
          ]
        }
      ]
    },
    
    // 大纲配置
    outline: {
      level: [1, 4],
      label: '本页目录'
    },
    returnToTopLabel: '返回顶部',
    
    // 社交链接
    socialLinks: [
      { 
        icon: 'bilibili', 
        link: 'https://space.bilibili.com/359174372',
        ariaLabel: '📺 哔哩哔哩 - 狐风轩汐'
      },
      { 
        icon: 'github', 
        link: 'https://github.com/FwindEmi86/MiragEdge-DocWeb',
        ariaLabel: '📦 GitHub - 锐界幻境文档'
      },
    ],
    
    // 最后更新时间
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    
    // 编辑链接
    //editLink: {
    //  pattern: 'https://github.com/FwindEmi86/MiragEdge-DocWeb',
    //  text: '在 GitHub 上编辑此页'
    //},
    
    // 深色模式切换
    darkModeSwitchLabel: '外观',
    
    // 侧边栏菜单文本
    sidebarMenuLabel: '菜单',
    
    // 文档页脚配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    // 返回顶部按钮（VitePress 默认启用）
    
    // 外部链接图标
    externalLinkIcon: true,
  },
  
  // 缓存配置
  cacheDir: './.vitepress/cache',
  
  
  // 清理死链警告
  ignoreDeadLinks: [
    '/docs/develop/intro',
    '/docs/ServerRule'
  ],
  
  // 自定义 Sitemap(搜索映射表) 生成
  //sitemap: {
  //  hostname: 'https://docs.miraged.ge'
  //}
})