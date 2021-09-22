```jsx
import ThreeMap from "@dzv/three-map"; // 地图基类
import encoder from "geojson-decoder"; // geojson解码工具
import chinaData from "@dzv/three-map/lib/mapData/china.json"; // 内置离线中国地图数据
import Bar from "@dzv/three-map/lib/components/Bar"; // 内置组件
import Line from "@dzv/three-map/lib/components/Line"; // 内置组件
import HaloPoint from "@dzv/three-map/lib/components/HaloPoint"; // 内置组件

let barData = [
	{ name: "浙江省", value: 60, center: [120.153576, 30.287459] },
	{ name: "湖北省", value: 80, center: [114.298572, 30.584355] },
	{ name: "青海省", value: 80, center: [101.778916, 36.623178] },
	{ name: "黑龙江省", value: 90, center: [126.642464, 45.756967] },
	{ name: "内蒙古自治区", value: 100, center: [111.670801, 40.818311] },
	{ name: "台湾省", value: 60, center: [121.509062, 25.044332] }
];

let lineData = [
	{
		source: { name: "青海省", center: [101.778916, 36.623178] },
		target: { name: "浙江省", center: [120.153576, 30.287459] }
	},
	{
		source: { name: "青海省", center: [101.778916, 36.623178] },
		target: { name: "湖北省", center: [114.298572, 30.584355] }
	},
	{
		source: { name: "青海省", center: [101.778916, 36.623178] },
		target: { name: "黑龙江省", center: [126.642464, 45.756967] }
	},
	{
		source: { name: "青海省", center: [101.778916, 36.623178] },
		target: { name: "内蒙古自治区", center: [111.670801, 40.818311] }
	},
	{
		source: { name: "青海省", center: [101.778916, 36.623178] },
		target: { name: "台湾省", center: [121.509062, 25.044332] }
	}
];

const chinaGeojson = encoder.decode(chinaData); // 解码 -- 所有内置地图数据都需要解码
const dom = document.getElementById("multiComponents");
const config = {
    area: {
        upHover: true // 悬浮凸起
    }
};
const map = new ThreeMap(config, chinaGeojson);
map.init(dom);

// 转换地图3维坐标
barData.forEach(item => {
    item.center = map.lnglatToVector3(item.center);
});
lineData.forEach(item => {
    item.source.center = map.lnglatToVector3(item.source.center);
    item.target.center = map.lnglatToVector3(item.target.center);
});

// 加光晕点
const haloPointInstance = new HaloPoint({}, barData);
map.scene.add(haloPointInstance.group);

// 加光柱
const barInstance = new Bar({}, barData);
map.scene.add(barInstance.group);

// 加飞线
const lineInstance = new Line({}, lineData);
map.scene.add(lineInstance.group);

```