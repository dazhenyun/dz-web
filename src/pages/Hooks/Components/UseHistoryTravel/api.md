
## API

```javascript
const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<T>(initialValue?: T);
```

### 结果

| 参数              | 说明               | 类型                  |
|------------------|--------------------|-----------------------|
| value     | 当前值         | T |
| setValue  | 设值函数  | T => void | 
| backLength | 可回退历史长度 | number |
| forwardLength | 可前进历史长度 | number |
| back | 在历史中向后回退一步 | () => void |
| foward | 在历史中向前前进一步 | () => void |

### 参数

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| initialValue? | 可选, 初始值  | T |  - |     
