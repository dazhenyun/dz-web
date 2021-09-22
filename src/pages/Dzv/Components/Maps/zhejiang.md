```jsx
import ThreeMap from "@dzv/three-map"; // 地图基类
import encoder from "geojson-decoder"; // geojson解码工具
import zjData from "@dzv/three-map/lib/mapData/zhejiang.json"; // 内置离线浙江省地图数据

const zjGeojson = encoder.decode(zjData);
const config = {
    center: [120.149506, 29.089524],
    depth: 0.5, // 地图深度
    camera: {
        position: [80, 5, 120],
        fov: 3
    },
    text: {
        show: true
    }
};
const zjDom = document.getElementById("zhejiangMap");
const zjMap = new ThreeMap(config, zjGeojson);
zjMap.init(zjDom);

```
