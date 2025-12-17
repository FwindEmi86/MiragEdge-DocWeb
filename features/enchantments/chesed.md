# 祛魔系统

**待编写**

提供4个辅助道具，涵盖3个增幅范围，VIP玩家可拥有特权加成。

<SmartImage 
  src="/images/features/祛魔道具.png" 
  alt="祛魔道具"
  caption="祛魔道具"
  maxWidth="520px"
/>

普通玩家，默认解析器数量限制为2

不同于原版砂轮，祛魔师一次可单独拆卸一个附魔

花费经验等级、灵叶、星痕石
## 价格计算
以下公式中,   
level 代表拆卸前等级, maxLevel 代表附魔最大等级, order 代表一次性解析中的第几个附魔  

> 经验等级exp-level:  
- 计算公式: "20*({level}/{maxLevel})*{order}"  

> 灵叶vault:  
- 计算公式: "680*({level}/{maxLevel})*{order}"  

> 星痕石player-points:  
- 计算公式: "6*({level}/{maxLevel})*{order}"  

<SmartImage 
  src="/images/features/祛魔师.png" 
  alt="祛魔师"
  caption="祛魔界面"
  maxWidth="450px"
/>