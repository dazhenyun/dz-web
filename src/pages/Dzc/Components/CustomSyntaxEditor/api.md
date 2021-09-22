### API

|    参数    | 类型    |  默认值   |  是否必填  | 说明         |
| :------:  | :-----: | :----:   | :------: | :----------: |
| defaultCode | string |  ""     |   非必填    | 初始化赋值     |
| readOnly  | boolean |  false   |   非必填  | 设置只读       |
| height | number   |  300     |   非必填  | 编辑器高度       |
| theme  | string   |  "day"     |   非必填  | 主题："day"和"night" |
| activeLine   | boolean   |  true     |   非必填  | 当前行选中标识  |
| indentUnit   | number   |  4     |   非必填  | tab按几个空格缩进  |
| fold   | boolean   |  true     |   非必填  | 代码折叠  |
| keywords   | array   |  []     |   非必填  | 自定义提示关键词  |
| onChange  | function|  无      |   非必填  | 返回code       |
| Ctrl+F   | 键盘事件   |  -     |   内置  | 自动格式化代码  |