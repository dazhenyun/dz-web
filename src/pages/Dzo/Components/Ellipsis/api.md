## API  
参数均同Ant3 Tooltip/Popover。 以下为新增参数

|      参数         |       说明          |    类型        |
|      ----         |        ----         |      ----      |
|  Popover |  指定超出宽度后，悬浮显示的类型为Popover，缺省则为Tooltip  |   |
|  emptyText |   空文本字符，缺省值为空  |   string    |
|  widthLimit |   指定溢出宽度值，缺省值为父元素宽度 |   number    |
|  lines |   指定多行截断的最大行数  |   number    |
|  copyable |   显示复制按钮，缺省值为不显示，文本为空时亦不显示  |      |
   
#### 其他参数
|      参数         |       说明          |    类型        |
|      ----         |        ----         |      ----      |
|  title |   同Tooltip，可省略，缺省值为元素文本 |   string    |
|  content |   同Popover，可省略，缺省值为元素文本 |   string    |
        
## 何时使用  
需要使文本元素在宽度溢出时显示省略号并添加悬浮效果（Tooltip/Popover）时。
        
## 如何使用  
- 支持`Popover`和`Tooltip`两种悬浮效果；
- 当选用`Popover`时，将需要展示的内容放在`content`里（如例1），并添加`Popover`属性；
- 当选用`Tooltip`时，将需要展示的内容放在`title`（如例2）或包含在标签里（如例3）；
- -----
- 为什么不使用统一的属性传递展示的内容？因为antd3中的`Popover`和`Tooltip`的属性是有区别的，`Popover`用`title`作卡片标题，`content`作卡片内容，而`Tooltip`仅用`title`作卡片内容，没有标题功能；具体请参考 [Ant3-Popover](https://3x.ant.design/components/popover-cn/) 和 [Ant3-Tooltip](https://3x.ant.design/components/tooltip-cn/)
- 相应的，你可以直接使用`Popover`和`Tooltip`的API（如例4）；转换一下思维，你可以把它当作带有***省略号、复制***的`Popover/Tooltip`使用；
- 利用好`emptyText`属性，在Table中直接作为render中的父元素；
- ---- 
- 根据需求添加下列选填项
- 添加`copyable`属性后，会在右侧添加一个复制按钮，
- 添加`lines`指定多行限制，仅在需要多行功能时使用，
- 添加`widthLimit`属性以增加限制宽度，若不添加则会受父元素宽度限制，
- 添加`emptyText`指定数据为空时的文本，例如`emptyText="- -"`