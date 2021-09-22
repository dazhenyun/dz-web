> 在开始之前，你需要掌握 React 及 React Hooks 基础用法。访问[链接](https://zh-hans.reactjs.org/docs/hooks-intro.html)学习 React Hooks 官方文档。

## 安装
```bash
npm install @tntd/hooks --save
```

## 如何使用
```javascript
import React from "react";
import { useToggle } from "@tntd/hooks";

export default () => {
  const [ state, { toggle } ] = useToggle();

  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
};
```

## 支持按需加载（推荐）
安装babel插件
```bash
npm install babel-plugin-tnt --save-dev
```
.babelrc中添加如下配置即可
```json
"plugins": [
    [
      "babel-plugin-tnt",
      {
        "library": ["@tntd/hooks"]
      }
    ],
]
```
