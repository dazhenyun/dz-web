
## API

```typescript
const result:Result = useVirtualList(originalList: any[], Options);
```

### 参数

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| originalList | 包含大量数据的列表 | T[] | []      |
| options | 可选配置项，见 Options                       | -                      | -      |


### 可选项

| 参数 | 说明         | 类型   | 默认值 |
|------|--------------|--------|--------|
| itemHeight | 行高度，静态高度可以直接写入像素值，动态高度可传入函数 | number \| ((index: number) => number) | -    |
| overscan | 视区上、下额外展示的 dom 节点数量 | number | 10    |

### 结果

| 参数     | 说明                                     | 类型       |
|----------|------------------------------------------|------------|
| list  | 当前需要展示的列表内容                             | {data: T, index: number}[]    |
| containerProps     | 滚动容器的 props                             | {}        |
| wrapperProps | children 外层包裹器 props   | {} |
| scrollTo    | 快速滚动到指定 index                          | (index: number) => void        |