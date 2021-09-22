```jsx
import ThreeSphere from "three-sphere";
import worldTransparent from "./images/world_transparent.jpg";

const container = document.getElementById("earth1");
const threeSphereInstance = new ThreeSphere({
	radius: 142,
	mapImg: worldTransparent,
	transparent: true,
	needHelp: false,
	container: container,
	width: container.clientWidth,
	height: 420,
	countryEdge: {
		drawLine: true
	},
	point: {
		pointsData,
		wave: true
	},
	flyLine: {
		lineData: lineData
	},
	control: {
		autoRotate: true,
		enableDamping: true,
		autoRotateSpeed: 0.4
	}
});
threeSphereInstance.init();

```
