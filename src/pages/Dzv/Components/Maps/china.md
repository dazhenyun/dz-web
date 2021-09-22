```jsx
import ThreeMap from "@dzv/three-map"; // 地图基类
import encoder from "geojson-decoder"; // geojson解码工具
import chinaData from "@dzv/three-map/lib/mapData/china.json"; // 内置离线中国地图数据

const chinaGeojson = encoder.decode(chinaData); // 解码 -- 所有内置地图数据都需要解码
const config = {}; // 地图配置
const dom = document.getElementById("chinaMap");
const map = new ThreeMap(config, chinaGeojson);
map.init(dom);

// 地图类默认配置
const defaultConfig = {
    background: "#11182f", // 背景颜色
    center: [103.754443, 30.544037], // 地图中心
    scale: 80, // 地图缩放
    translate: [0, 0], // 地图平移
    depth: 2, // 地图深度
    line: {
        color: '#5a77c5', // 轮廓线颜色
    },
    area: {
        color: '#344e85', // 区域颜色
        opacity: 0.7, // 透明度
        hover: true,
        hoverColor: '#5576bb', // 鼠标悬浮颜色
        upHover: false, // 悬浮凸起
        upHoverDepth: 2 // 凸起深度
    },
    controls: { // 控制器
        enableZoom: true, // 启用或禁用摄像机的缩放
        zoomSpeed: 1, // 缩放速度
        minDistance: 10, // 缩放最小
        maxDistance: 1000 // 缩放最大
    },
    camera: { // 相机
        position: [80, 5, 100], // x,y,z 对象三维坐标
        lookAt: [0, 0, 0], // x,y,z相机看的位置
        fov: 35, // 摄像机视锥体垂直视野角度
        near: 1, // 摄像机视锥体近端面
        far: 10000 // 摄像机视锥体远端面
    },
    text: { // 地名
        show: false,
        color: "#fff",
        fontSize: 12
    }
};

```