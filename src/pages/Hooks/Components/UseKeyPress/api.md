
## API

```javascript
useKeyPress(
  keyFilter: KeyFilter, 
  eventHandler: EventHandler = noop, 
  options?: Options
)
```

### 参数

> Tips: keyType 为键盘事件中的 key 和 keyCode

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| keyFilter | 支持键盘事件中的 key 和 keyCode，支持回调方式返回 boolean 判断，支持别名使用  | keyType \| Array<keyType\> \| ((event: KeyboardEvent) => boolean) | -      |
| eventHandler | 事件回调函数  | (event: KeyboardEvent) => void | () => {}      |
| options | 可选配置项，见 Options | -                | -              |

### Options

| 参数            | 说明                                                   | 类型                              | 默认值 |
|-----------------|--------------------------------------------------------|-----------------------------------|--------|
| events | 触发事件  |  Array<keydown \| keyup\> | ['keydown']     |
| target | DOM 节点或者 Ref 对象  | (() => HTMLElement) \| HTMLElement \| React.MutableRefObject | - |

## 备注

1.全部的按键别名
```javascript
enter
tab
delete (捕获“删除”和“退格”键)
esc
space
up
down
left
right
```

2.修饰键
```javascript
ctrl
alt
shift
meta
```
