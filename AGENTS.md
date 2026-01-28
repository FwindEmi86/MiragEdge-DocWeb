# MiragEdge-DocWeb 项目上下文

## 项目概述

**MiragEdge-DocWeb** 是一个基于 VitePress 的多站点文档网站项目，用于管理锐界幻境（MiragEdge）Minecraft 服务器的官方文档。该项目支持构建和部署多个子站点，包括主文档站和开发者个人站点。

### 核心特性

- **多站点架构**：支持主文档站（miragedge.top）和个人站点（f.windemiko.top）的构建
- **现代化技术栈**：基于 VitePress + Vue 3 的静态站点生成
- **自动化构建**：提供 Windows 和 Linux 两套构建脚本
- **容器化部署**：支持 Docker 容器化部署

### 项目类型

这是一个**代码项目**，主要包含：
- VitePress 静态文档网站
- Node.js 构建脚本
- Docker 容器化配置
- GitHub Actions CI/CD 配置

## 技术架构

### 主要依赖

**核心框架**：
- `vitepress@1.6.4` - 主要文档框架
- `vue@3.x` - 前端框架

**构建工具**：
- `pnpm@10.15.0` - 包管理器
- `typescript@5.9.3` - 类型检查
- `@vitepress/theme-website@1.0.8` - 主题

**功能插件**：
- `vitepress-plugin-mermaid@2.0.17` - Mermaid 图表支持
- `vitepress-plugin-group-icons@1.6.5` - 图标分组
- `vitepress-plugin-announcement@0.1.6` - 公告插件
- `@vrcd-community/markdown-it-video@1.1.1` - 视频嵌入支持

### 构建配置

- **配置文件**：`.vitepress/config.mts`
- **测试配置**：`.vitepress/vitest.config.mts`
- **主题定制**：`.vitepress/theme/index.ts`

## 项目结构

```
MiragEdge-DocWeb/
├── .vitepress/              # VitePress 配置目录
│   ├── config.mts          # 主配置文件
│   ├── vitest.config.mts   # 测试配置
│   ├── theme/              # 主题定制
│   └── test/               # 测试代码
├── build/                  # 构建输出目录
│   ├── miragedge.top/      # 主文档站
│   └── f.windemiko.top/    # 个人站点
├── develop/                # 开发相关文档
│   ├── mc_plugins/         # MC 插件文档
│   ├── server_configs/     # 服务器配置
│   └── webdev/             # Web 开发文档
├── features/               # 核心玩法文档
├── manual/                 # 玩家指南
├── public/                 # 静态资源
│   ├── images/             # 图片资源
│   └── title_img/          # 站点图标
├── ServerStatus/           # 服务器状态监控
└── test_tool/              # 测试工具
```

## 构建和运行

### 开发模式

```bash
# 启动开发服务器
npm run dev
```

### 构建命令

```bash
# 构建主文档站
npm run build

# 构建并预览
npm run preview

# 运行测试
npm run test
npm run test:watch
npm run test:ui
npm run test:coverage
```

### 构建脚本

项目提供了两套构建脚本：

1. **Windows 构建**：`build.bat`
   - 构建主文档站到 `build/miragedge.top/`
   - 构建个人站点到 `build/f.windemiko.top/`
   - 使用 xcopy 复制文件

2. **Linux 构建**：`webstart.sh`
   - 从 GitHub 拉取最新代码
   - 执行构建流程
   - 支持 SSH 部署

### Docker 部署

```bash
# 构建 Docker 镜像
docker build -t docweb .

# 运行容器
docker-compose up -d
```

## 开发规范

### 文档结构

- **功能模块分类**：按功能模块组织文档结构
- **相对路径引用**：使用相对路径引用内部文档
- **Markdown 格式**：统一使用标准 Markdown 格式

### Git 工作流

- **分支策略**：基于 Git 的版本控制
- **提交规范**：遵循清晰的提交信息规范
- **自动化部署**：通过 GitHub Actions 实现 CI/CD

### 测试规范

- **单元测试**：使用 Vitest 进行单元测试
- **测试覆盖率**：配置覆盖率检查
- **测试配置**：多环境测试配置

## 部署配置

### 服务配置

- **Systemd 服务**：`docweb.service` - Linux 系统服务配置
- **Nginx 配置**：`default.conf` - 反向代理配置
- **环境变量**：通过 `.env` 文件管理配置

### 监控和状态

- **服务器状态**：`ServerStatus/` 目录提供状态监控服务
- **健康检查**：包含客户端和服务端监控脚本
- **日志记录**：完整的构建和运行日志

## 特定功能

### 代码高亮

- 支持语法高亮
- 支持 mermaid 流程图
- 支持视频嵌入

### 多站点支持

- 主文档站：`miragedge.top`
- 个人站点：`f.windemiko.top`
- 共享主题和配置

### 交互式功能

- 星空粒子效果（index.md）
- 交互式图表
- 动态配置

## 维护者

- **主导维护**：狐风轩汐（F.windEmiko）
- **GitHub 仓库**：https://github.com/FwindEmi86/MiragEdge-DocWeb
- **文档站点**：https://miragedge.top

## 相关资源

- **官网**：https://f.windemiko.top
- **QQ交流群**：523914625
- **Bilibili**：359174372（狐风轩汐）

---

> 项目愿景：实现一个开放创新的服务器平台，打造一个纯净、稳定、有趣的 Minecraft 服务器社区。