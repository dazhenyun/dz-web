## API

MoneyShow

| 参数      | 说明                                     | 类型      | 默认值 | 版本 |
| --------- | ---------------------------------------- | --------- | ------ | ---- |
| value     | 数值                                     | num , str | -      |      |
| size      | 字体大小三种规格 sm,md,lg                | bool      | true   |      |
| bold      | 是否加粗                                 | bool      | false  |      |
| color     | 颜色 green,red,orange,primary,默认文本色 | string    | -      |      |
| align     | 横排 horizontal                          | string    | -      |      |
| prefix    | 前缀                                     | string    | ￥     |      |
| precision | 精度                                     | num       | 2      |      |
| className | 样式                                     | string    | -      |      |
| 其它      | Statistic 组件支持的属性                 | obj       | -      |      |

MoneyInput

| 参数        | 说明                       | 类型      | 默认值 | 版本 |
| ----------- | -------------------------- | --------- | ------ | ---- |
| value       | 数值                       | num       | -      |      |
| onChange    | 输入监听变化               | func      | -      |      |
| prefix      | 前缀图标                   | ReactNode | -      |      |
| suffix      | 后缀图标                   | ReactNode | -      |      |
| addonBefore | 前缀标签                   | ReactNode | -      |      |
| addonAfter  | 后缀标签                   | ReactNode | -      |      |
| 其它        | InputNumber 组件支持的属性 | obj       | -      |      |
