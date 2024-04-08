# react基础
## 状态管理
1.  mobx

2.  redux

## 生命周期& Hook
1. **新增** & **废弃**
  - componentWillReceiveProps 废弃
  - GetDerivedStateFromProps 新增

2. 自定义Hooks 
  - 自定义use开头
  - 推荐使用ahooks

## 性能优化
1. 减少渲染次数
 - useMemo memo 
 - componentShouleUpdate
 - GetDerivedStateFromProps
 - 组件懒加载
 - 使用 Fragment 避免额外标记  和 Suspance  有啥区别
 - 不要使用内联函数定义
 - 类组件 在构造函数中进行函数this绑定
 - 减少使用箭头函数用上述方式进行绑定
 - 避免使用内联样式属性 
 - 优化条件渲染
 - 避免重复无限渲染 render函数中避免更新状态
 - 为组件创建错误边界
 - 组件卸载前进行清理操作