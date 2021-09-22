- 内置中国地图及各省的离线地图数据
- 渲染地图基类，支持多组件接入
- 丰富的配置，灵活的设计，让你轻松实现你想要的效果

## 安装
```bash
npm install @dzv/three-map --save
```

## 如何使用
```jsx
import ThreeMap from "@dzv/three-map";

// 初始化地图
const dom = document.getElementById('myMap');
const config = {}; // 地图配置
const geojson = geojson; // 绘制地图的geojson数据
const map = new ThreeMap(config, geojson); // 地图实例
map.init(dom); // 初始化渲染

```

## 实例
