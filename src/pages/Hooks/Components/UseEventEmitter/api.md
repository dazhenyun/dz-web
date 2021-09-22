
## API

```typescript
const result: Result = useEventEmitter<T>();
```

### Result

| 参数            | 说明             | 类型                                 |
|-----------------|------------------|--------------------------------------|
| emit            | 发送一个事件通知 | (val: T) => void                     |
| useSubscription | 订阅事件         | (callback: (val: T) => void) => void |
