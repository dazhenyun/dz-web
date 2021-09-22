import React from "react";
const Introduce = React.lazy(() => import("./Components/Introduce"));
const GeoJSON = React.lazy(() => import("./Components/GeoJSON"));
// const RegularExp = React.lazy(() => import("./Components/RegularExp"));

const Menu = [
	{
		title: "简介",
		code: "introduce",
		component: Introduce
	},
	{
		title: "地图数据",
		code: "geojson",
		component: GeoJSON
	}
	// {
	// 	title: "正则表达式",
	// 	code: "regExp",
	// 	component: RegularExp
	// }
];

export default Menu;
