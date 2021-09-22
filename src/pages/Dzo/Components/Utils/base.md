## 安装使用
```bash
npm install @tntd/utils
```

````jsx
import { getCookie } from "@tntd/utils";

const cookie = getCookie("test");
```` 

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
        "library": ["@tntd/utils"]
      }
    ],
]
```

## API文档

