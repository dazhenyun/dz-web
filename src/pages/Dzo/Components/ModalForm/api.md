## API

| 参数           | 说明                                   | 类型   | 默认值 | 版本 |
| -------------- | -------------------------------------- | ------ | ------ | ---- |
| visible        | 弹窗显示                               | bool   | false  |      |
| initialValues  | 表单初始值                             | object | -      |      |
| formSet        | 表单的配置项，请参考 GForm 的 formSet  | array  | -      |      |
| formProps      | form 内部的一些配置，参考 GForm 的属性 | object | -      |      |
| formRef        | 操作表单的方法                         | object | -      |      |
| loading        | 请求的加载状态                         | bool   | false  |      |
| onValuesChange | 表单的值变化监听钩子                   | func   | -      |      |
| onOk           | 保存按钮的回调                         | func   | -      |      |
| onCancel       | 关闭按钮的回调                         | func   | -      |      |
| beforeRender   | 表单前的渲染 initialValues=>ReactNode  | func   | -      |      |
| afterRender    | 表单后的渲染 initialValues=>ReactNode  | func   | -      |      |
| ...rest        | 参考 antd Modal 的属性                 | object | -      |      |