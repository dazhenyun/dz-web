```jsx
import ThreeSphere from "three-sphere";
import dotPng from "./images/dot.png";
import worldTransparent from "./images/world_transparent.jpg";

const container = document.getElementById("earth2");
const threeSphereInstance = new ThreeSphere({
	radius: 142,
	mapImg: worldTransparent,
	transparent: false,
	needHelp: false,
	container: container,
	width: container.clientWidth,
	height: 420,
	countryEdge: {
		drawLine: true
	},
	// 点
	point: {
		pointsData,
		wave: true,
		column: true
	},

	// 飞线
	flyLine: {
		lineData: [[[116.2, 39.55], [69.11, 34.28]], [[116.2, 39.55], [19.49, 41.18]], [[116.2, 39.55], [3.08, 36.42]], [[116.2, 39.55], [16.22, 48.12]], [[116.2, 39.55], [49.56, 40.29]], [[116.2, 39.55], [-77.2, 25.05]], [[116.2, 39.55], [50.3, 26.1]], [[116.2, 39.55], [90.26, 23.43]], [[116.2, 39.55], [-59.3, 13.05]], [[116.2, 39.55], [27.3, 53.52]], [[116.2, 39.55], [4.21, 50.51]], [[116.2, 39.55], [-88.3, 17.18]]]
	},
	// 面
	countryShape: {
		drawShape: true
	}
});
threeSphereInstance2.init();

```
