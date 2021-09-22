# API
## ThreeSphere 地球config配置
|    参数   | 说明    | 类型    |  默认值         |
| :------  | :----- | :----   | :------ | :---------- |
| radius  | 半径 | num  |  142        |
| mapImg     | 地球背景图  | string  |     |
| transparent    |  地球是否透明 | bool  |  true      |
| needHelp   |   是否需要帮助坐标     | bool |  false   |
| container |    容器    | dom |   document.getElementById('App')    |
| countryEdge |   国家边界  | obj   |  null          |
| countryShape |   国家面  | obj |  null          |
| point |   点  | obj |  null          |
| point.pointsData | 点数据 | array |null|
| point\[type\] | 点类型(可根据lglt2xyz坐标转换自由添加球面Layer效果)当前支持球波、柱状； | point.wave=true(球波); point.column=true(柱状图); |null|
| flyLine | 飞线 |obj|null|
| flyLine.lineData | 飞线数据 |array|null|
| control |   控制器  | obj |  null          |
| control.autoRotate  | 自动旋转 | bool  |  false        |
| control.enableDamping  | 缓冲 | bool  |  false        |
| control.autoRotateSpeed  | 旋转速度 | num  |  2        |

### lglt2xyz 坐标转换
```javascript
	const lglt2xyz = (lg, lt, r) => {
		const phi = (180 + lg) * (Math.PI / 180)
		const theta = (90 - lt) * (Math.PI / 180)
		const x = -r * Math.sin(theta) * Math.cos(phi);
		const y = r * Math.cos(theta);
		const z = r * Math.sin(theta) * Math.sin(phi);
		return new THREE.Vector3(x,y,z)
	}
```

