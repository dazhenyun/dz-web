
## API

```ts
const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullScreen(target, { onExitFull?, onFull? });
```

### 参数

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | DOM 节点或者 Ref 对象  | HTMLElement \| () => HTMLElement \| React.MutableRefObject | - |
| onExitFull | 监听退出全屏  | ()=>void | -      |
| onFull | 监听全屏  | ()=>void | -      |

### 结果

| 参数     | 说明                                     | 类型       |
|----------|------------------------------------------|------------|
| isFullscreen  | 是否全屏                          | boolean    |
| setFull  | 设置全屏                          | ()=>void    |
| exitFull  | 退出全屏                          | ()=>void    |
| toggleFull | 切换全屏                          | ()=>void    |