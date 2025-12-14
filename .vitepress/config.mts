import { defineConfig } from 'vitepress'
import { MermaidPlugin, MermaidMarkdown } from "vitepress-plugin-mermaid";

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
      description: '锐界幻境 全方位的指南'
    }
  },
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/title_img/dis.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/title_img/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/title_img/favicon-16x16.png' }],
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
    plugins: [MermaidPlugin()],
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
      chunkSizeWarningLimit: 1000, // 提高 chunk 大小警告限制
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
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: true,
            prefix: true,
            boost: { title: 2, content: 1 }
          }
        }
      }
    },
    
    // 导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '🎮 玩法介绍',
        activeMatch: '^/features/',
        items: [
          { text: '🌱 星露谷种植', link: '/features/croups/' },
          { text: '🎣 星露谷钓鱼', link: '/features/fishing/' },
          { text: '✨ 特殊附魔', link: '/features/enchantments' },
          { text: '⚔️ 装备升级', link: '/features/mmo/' },
          { text: '🍲 更多食物', link: '/features/food' },
        ]
      },
      { 
        text: '📚 玩家手册', 
        link: '/manual/',
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
      {
        text: '🔗 相关链接', 
        items: [
          { 
            text: '📺 哔哩哔哩', 
            link: 'https://space.bilibili.com/359174372',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          { 
            text: '📦 GitHub - 锐界幻境文档', 
            link: 'https://github.com/FwindEmi86/MiragEdge-DocWeb',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
        ]
      },
    ],
    
    // 侧边栏配置
    sidebar: {
      '/features/': [
        {
          text: '🌱 星露谷种植',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/croups/' },
          ]
        },
        {
          text: '🎣 星露谷钓鱼',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/fishing/' },
          ]
        },
        {
          text: '✨ 特殊附魔',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/enchantments' },
            { text: '物品列表', link: '/features/enchantments/items' },
            { text: '附魔列表', link: '/features/enchantments/list' },
          ]
        },
        {
          text: '⚔️ 装备升级',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/mmo/' },
          ]
        },
        {
          text: '🍲 更多食物',
          collapsed: false,
          items: [
            { text: '介绍', link: '/features/food' },
          ]
        }
      ],
 
      '/manual/': [
        { 
          text: '✅ 玩家审核', 
          link: '/manual/review' 
        },
        {
          text: '📌 必看指南',
          collapsed: false,
          items: [
            { text: '🔗 入服方法 & 链接介绍', link: '/manual/tutorial/serverjoin' },
            { text: '💾 白名单系统', link: '/manual/tutorial/whitelist' },
            { text: '🔌 客户端安装', link: '/manual/tutorial/clientinstall' },
            { text: '🎮 核心玩法目标', link: '/manual/tutorial/gameplay' },
          ]
        },
        {
          text: '⚖️ 玩家守则',
          collapsed: false,
          items: [
            { text: '📜 服务器守则', link: '/manual/eula/' },
          ]
        },
        {
          text: '❓ 常见问题',
          collapsed: true,
          items: [
            { text: 'FAQ 概览', link: '/manual/faq/' },
          ]
        },
        {
          text: '📎 参考',
          collapsed: true,
          items: [
            { text: '💬 QQ 群', link: '/manual/qq_group' },
          ]
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
              collapsed: false, 
              items: [
                { text: '💰 等价交换商店', link: '/develop/mc_plugins/emcshop' },
              ]
            },
          ]
        },
        { 
          text: '📅 更新日志', 
          link: '/develop/logs' 
        },
        {
          text: '🔗 参考',
          collapsed: true,
          items: [
            { text: '概述', link: '/develop/' },
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
        ariaLabel: 'B站主页'
      }
    ],
    
    // 页脚配置
    footer: {
      copyright: `
        <div style="margin: 8px 0;">
          2020 - ${new Date().getFullYear()} MiragEdge✰锐界幻境 By F.windEmiko
        </div>
        <div style="margin: 8px 0;">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" style="color: var(--vp-c-text-2); text-decoration: none;">
            苏ICP备2024133820号-1
          </a>
           | 
          <a href="https://www.rainyun.com/FwindEmi_" target="_blank" rel="noopener noreferrer" style="color: var(--vp-c-brand); text-decoration: none;">
            雨云
          </a> 
          提供计算服务
          
        </div>
      `
    },
    
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