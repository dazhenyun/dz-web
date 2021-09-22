import React from "react";
const Introduce = React.lazy(() => import("./Components/Introduce"));

const QuickStart = React.lazy(() => import("./Components/QuickStart"));
const Theme = React.lazy(() => import("./Components/Theme"));
// const Component = React.lazy(() => import("./Components/Component"));
const Line = React.lazy(() => import("./Components/Component/Line"));
const Bar = React.lazy(() => import("./Components/Component/Bar"));
const LineBar = React.lazy(() => import("./Components/Component/LineBar"));
const Pie = React.lazy(() => import("./Components/Component/Pie"));
const Radar = React.lazy(() => import("./Components/Component/Radar"));
const Funnel = React.lazy(() => import("./Components/Component/Funnel"));
const Gauge = React.lazy(() => import("./Components/Component/Gauge"));
const Tmap = React.lazy(() => import("./Components/Component/Tmap"));
const Liquidfill = React.lazy(() => import("./Components/Component/Liquidfill"));
const WordCloud = React.lazy(() => import("./Components/Component/WordCloud"));

// const Model = React.lazy(() => import("./Components/Model"));
// const Earth = React.lazy(() => import("./Components/Earth"));
const Maps = React.lazy(() => import("./Components/Maps"));
// const Layers = React.lazy(() => import("./Components/Layers"));

const SpecialEffects = React.lazy(() => import("./Components/SpecialEffects"));

const Menu = [
	{
		title: "简介",
		code: "introduce",
		component: Introduce
	},
	{
		title: "2D可视化",
		code: "2d",
		children: [
			{
				title: "快速入门",
				code: "quickStart",
				component: QuickStart
			},
			{
				title: "主题",
				code: "theme",
				component: Theme
			},
			{
				title: "Line 折线图",
				code: "line",
				component: Line
			},
			{
				title: "Bar 柱状图",
				code: "bar",
				component: Bar
			},
			{
				title: "LineBar 折柱图",
				code: "lineBar",
				component: LineBar
			},
			{
				title: "Pie 饼图",
				code: "pie",
				component: Pie
			},
			{
				title: "Radar 雷达图",
				code: "radar",
				component: Radar
			},
			{
				title: "Funnel 漏斗图",
				code: "funnel",
				component: Funnel
			},
			{
				title: "Gauge 仪表盘",
				code: "gauge",
				component: Gauge
			},
			{
				title: "Tmap 地图",
				code: "tmap",
				component: Tmap
			},
			{
				title: "Liquidfill 水球图",
				code: "liquidfill",
				component: Liquidfill
			},
			{
				title: "WordCloud 词云",
				code: "wordCloud",
				component: WordCloud
			}
		]
	},
	{
		title: "3D可视化",
		code: "3d",
		children: [
			// {
			// 	title: "模型",
			// 	code: "model",
			// 	component: Model
			// },
			// {
			// 	title: "地球",
			// 	code: "earth",
			// 	component: Earth
			// },
			{
				title: "地图",
				code: "maps",
				component: Maps
			}
			// {
			// 	title: "图层",
			// 	code: "layers",
			// 	component: Layers
			// }
		]
	},
	{
		title: "特效库",
		code: "specialEffects",
		component: SpecialEffects
	}
];

export default Menu;
