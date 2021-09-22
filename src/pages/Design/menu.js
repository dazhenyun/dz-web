import React from "react";
const Frame1 = React.lazy(() => import("./Components/Frame1"));
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const Color = React.lazy(() => import("./Components/Color"));
const ColorBigbang = React.lazy(() => import("./Components/ColorBigbang"));
const DigitaFonts = React.lazy(() => import("./Components/DigitaFonts"));
// const Typography = React.lazy(() => import("./Components/Typography"));
// const BaseTable = React.lazy(() => import("./Components/BaseTable"));
const CardScene = React.lazy(() => import("./Components/CardScene"));
const ListScene = React.lazy(() => import("./Components/ListScene"));

const Menu = [
	{
		title: "Color",
		code: "color",
		component: Color
	},
	// {
	// 	title: "字体规范",
	// 	code: "typography",
	// 	component: Typography
	// },
	// {
	// 	title: "基础表格",
	// 	code: "baseTable",
	// 	component: BaseTable
	// },
	{
		title: "色彩大爆炸🔥",
		code: "colorBigbang",
		component: ColorBigbang
		// notRender: process.env.SYS_ENV !== "development"	// 线上环境不显示
	},
	{
		title: "数字字体",
		code: "DigitalFonts",
		component: DigitaFonts
	},
	{
		title: "设计场景化",
		code: "scene",
		children: [
			{
				title: "业务规范",
				code: "frame1",
				component: Frame1
			},
			{
				title: "大盘统计",
				code: "dashboard",
				component: Dashboard
			},
			{
				title: "卡片场景",
				code: "cardScene",
				component: CardScene
			},
			{
				title: "列表场景",
				code: "listScene",
				component: ListScene
			}
		]
	}
];

export default Menu;
