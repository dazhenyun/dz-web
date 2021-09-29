import React from "react";
const Color = React.lazy(() => import("./Components/Color"));
const BrandWall = React.lazy(() => import("./Components/BrandWall"));
const Iconfont = React.lazy(() => import("./Components/Iconfont"));
const Ppt = React.lazy(() => import("./Components/Ppt"));
const ColorBigbang = React.lazy(() => import("./Components/ColorBigbang"));
const DigitaFonts = React.lazy(() => import("./Components/DigitaFonts"));
// const Typography = React.lazy(() => import("./Components/Typography"));

const Frame1 = React.lazy(() => import("./Components/Frame1"));
const Frame2 = React.lazy(() => import("./Components/Frame2"));
const Frame3 = React.lazy(() => import("./Components/Frame3"));
const Frame4 = React.lazy(() => import("./Components/Frame4"));
const Frame5 = React.lazy(() => import("./Components/Frame5"));
const Frame6 = React.lazy(() => import("./Components/Frame6"));
const Frame7 = React.lazy(() => import("./Components/Frame7"));

const Menu = [
	{
		title: "色彩规范",
		code: "color",
		component: Color
	},
	{
		title: "LOGO 品牌墙",
		code: "brandWall",
		component: BrandWall
	},
	{
		title: "Iconfont 图标库",
		code: "iconfont",
		component: Iconfont
	},
	{
		title: "PPT 模板",
		code: "ppt",
		component: Ppt,
		notRender: process.env.SYS_ENV !== "development"	// 线上环境不显示
	},
	// {
	// 	title: "字体规范",
	// 	code: "typography",
	// 	component: Typography
	// },
	{
		title: "数字字体",
		code: "DigitalFonts",
		component: DigitaFonts
	},
	{
		title: "色彩大爆炸",
		code: "colorBigbang",
		component: ColorBigbang
		// notRender: process.env.SYS_ENV !== "development"	// 线上环境不显示
	},
	{
		title: "设计场景化🔥",
		code: "scene",
		children: [
			{
				title: "全局导航",
				code: "frame1",
				component: Frame1
			},
			{
				title: "二级导航",
				code: "frame2",
				component: Frame2
			},
			{
				title: "筛选",
				code: "frame3",
				component: Frame3
			},
			{
				title: "表格",
				code: "frame4",
				component: Frame4
			},
			{
				title: "按钮",
				code: "frame5",
				component: Frame5
			},
			{
				title: "表单",
				code: "frame6",
				component: Frame6
			},
			{
				title: "数据格式字体",
				code: "frame7",
				component: Frame7
			}
		]
	}
];

export default Menu;
