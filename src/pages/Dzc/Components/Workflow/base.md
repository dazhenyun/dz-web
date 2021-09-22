### 前言
由于我们底层用的是joint.js，所以开发前需要安装必要的依赖，依赖下载如下：
- [点击下载 jquery.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144801486_jquery.min.js?download=true "点击下载JQuery")
- [点击下载 lodash.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144810298_lodash.min.js?download=true "点击下载lodash.min.js")
- [点击下载 backbone.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144814676_backbone.min.js?download=true "点击下载 backbone.min.js")
- [点击下载 joint.min.js](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144745127_joint.min.js?download=true "点击下载 joint.min.js")
- [点击下载 joint.min.css](https://sinan.tongdun.me/cdn/bucket/disk/book/2805/3245/20210428144752623_joint.min.css?download=true "点击下载 joint.min.css")

#### 推荐引入方式
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>流程图解决方案</title>
    <link href="/joint/joint.min.css" rel="stylesheet" />
    <script src="/joint/jquery.min.js"></script>
    <script src="/joint/lodash.min.js"></script>
    <script src="/joint/backbone.min.js"></script>
    <script src="/joint/joint.min.js"></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

### 安装
```bash
npm i @tntx/workflow
```

### 如何使用
```jsx
import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import Workflow from "@tntx/workflow";

const Demo = props => {
    const graphInstance = useRef();

    return (
        <div style={{ width: 1000, height: 800 }}>
            <Workflow
                saveLoading={false} // 与onSave配合使用
                onSave={(obj) => {
                    console.log(obj); // 返回的数据
                }}
                getGraphInstance={(ref) => { graphInstance.current = ref.current; }} // 获取画布实例
            />
        </div>
    )
};

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
```

## 代码演示

