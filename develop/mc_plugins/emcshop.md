# 项目状态：E

## EMCShop（等价交换商店）

基于 Paper API 1.21.4 开发的 Java 插件，实现了等价交换（EMC）系统，允许玩家将物品转换为货币，并通过商店系统购买物品。

### 基本信息
- **插件版本**：3.14
- **插件命令**：`/emcshop`（别名：`/emc`、`/es`）
- **作者**：F.windEmiko（狐风轩汐）

<div className="image-center">
  <div className="image-card">
    <div className="image-container">
      <img 
        src="/images/develop/emcshop-g.png" 
        alt="项目运行原理架构" 
      />
    </div>
    <div className="image-caption">项目运行原理架构</div>
  </div>
</div>

### 主要功能
- **物品转换系统** - 玩家可以将物品转换为 EMC 货币
- **商店购买系统** - 使用 EMC 货币购买已解锁的物品
- **物品解锁机制** - 通过转换物品来解锁新物品
- **数据库存储** - 支持 MySQL 和 SQLite 两种数据库
- **消息格式化** - 使用 MiniMessage 格式支持丰富的消息格式化
- **权限系统** - 包含完善的权限系统，支持管理员重载、用户转换、购买和预览等功能

### 双经济模式支持
1. **EMC 独立经济模式** - 使用插件自带的 EMC 货币系统
2. **Vault 经济模式** - 集成 Vault 插件，使用服务器现有的经济系统

### 技术特点
- **开发环境**：使用 Java 21 开发
- **数据库管理**：集成 HikariCP 连接池
- **插件集成**：支持 PlaceholderAPI 和 Vault 插件
- **构建与保护**：使用 Maven 构建，并包含代码加密混淆保护
