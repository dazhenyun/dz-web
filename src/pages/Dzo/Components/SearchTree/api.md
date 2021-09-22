## API

| 参数                  | 说明                                                             | 类型      | 默认值 | 版本 |
| --------------------- | ---------------------------------------------------------------- | --------- | ------ | ---- |
| title                 | 标题                                                             | string    | -      |      |
| breadCrumbRightRender | 标题右边操作栏                                                   | func      | -      |      |
| treeData              | 树状数据                                                         | array     | []     |      |
| modelKeys             | 字段索引值转化                                                   | array     | []     |      |
| search                | 是否支持搜索                                                     | bool      | true   |      |
| renameKey             | 重命名的 key                                                     | string    | -      |      |
| onRename              | 重命名回调 (value,node)=>{}                                      | func      | -      |      |
| onSelect              | 点击事件 (keys,node)=>{}                                         | func      | -      |      |
| iconRender            | 数据节点的 icon 展示 (node,isExpand)=>{}                         | func      | -      |      |
| onTreeNode            | 给数据节点绑定属性，参考 antd TreeNode 属性 (node)=>({...props}) | func      | -      |      |
| onTreeNodeTitle       | 给数据节点的 title 绑定属性 (node)=>({...props})                 | func      | -      |      |
| onRightClickRender    | 右键点击渲染 (node, clearRightClickRender, setRenameKey)=>{}     | func      | -      |      |
| containerRef          | 外部滚动的 ReactNode,滚动时候去除右键菜单渲染                    | ReactNode | -      |      |
| expandedLevel         | 默认展开第几层                                                   | num       | 1      |      |
| 其它                  | 参考 antd Tree 组件属性                                          | obj       | -      |      |

modelKeys

| 参数          | 说明          |
| ------------- | ------------- |
| childrenField | 默认 children |
| nameField     | 默认 title    |
| keyField      | 默认 key      |