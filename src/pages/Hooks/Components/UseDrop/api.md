
## API

```javascript
const getDragProps = useDrag();

<div {...getDragProps(id)}>draggable</div>

const [ props, { isHovering } ] = useDrop({
  onText: (text: string, e: Event) => void,
  onFiles: (files: File[], e: Event) => void,
  onUri: (uri: string, e: Event) => void,
  onDom: (content: any, e: Event) => void
});
```

### useDrag Result

| 参数 | 说明                                              | 类型                    |
|----------|-------------------------------------------|-------------------------|
| getDragProps  | 一个接收拖拽的值，并返回需要透传给被拖拽节点 props 的方法 | (content: any) => props |

### useDrop Result

| 参数 | 说明                                              | 类型                    |
|----------|-------------------------------------------|-------------------------|
| props      | 需要透传给接受拖拽区域 dom 节点的 props | - |
| isHovering   | 是否是拖拽中，且光标处于释放区域内   | boolean     |

### useDrop Params

| 参数 | 说明                                              | 类型                    | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| onText | 拖拽文字的回调 | (text: string, e: Event) => void | -      |
| onFiles | 拖拽文件的回调 | (files: File[], e: Event) => void | -      |
| onUri | 拖拽链接的回调 | (text: string, e: Event) => void | -      |
| onDom | 拖拽自定义 dom 节点的回调 | (content: any, e: Event) => void | -      |