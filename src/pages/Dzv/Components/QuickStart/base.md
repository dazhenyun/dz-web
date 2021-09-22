## 安装
```bash
npm install @dzv/charts --save
```

## 如何使用
```jsx
import { Line } from "@dzv/charts";

// 组件接收3个参数：height, theme, option(option参数完全遵循echarts的options参数)

ReactDOM.render(
    <Line />,
    mountNode
);

```

## 支持按需加载（推荐）
安装babel插件

```bash
npm install babel-plugin-dz --save-dev
```

.babelrc中添加如下配置即可

```json
"plugins": [
    [
      "babel-plugin-dz",
      {
        "library": ["@dzv/charts"]
      }
    ],
]
```

