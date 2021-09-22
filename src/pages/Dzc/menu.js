import React from "react";
const Introduce = React.lazy(() => import("./Components/Introduce"));
const Formula = React.lazy(() => import("./Components/Formula"));
const TextMark = React.lazy(() => import("./Components/TextMark"));
const TextAvatar = React.lazy(() => import("./Components/TextAvatar"));
const Workflow = React.lazy(() => import("./Components/Workflow"));
const CustomSyntaxEditor = React.lazy(() => import("./Components/CustomSyntaxEditor"));

const Menu = [
	{
		title: "简介",
		code: "introduce",
		component: Introduce
	},
	{
		title: "组件物料",
		code: "components",
		children: [
			{
				title: "计算公式",
				code: "formula",
				component: Formula
			},
			{
				title: "文字头像",
				code: "textAvatar",
				component: TextAvatar
			}
			// {
			// 	title: "信贷决策流",
			// 	code: "workflow",
			// 	component: Workflow
			// },
			// {
			// 	title: "高亮文本",
			// 	code: "textMark",
			// 	component: TextMark
			// },
			// {
			// 	title: "自定义语法编辑器",
			// 	code: "customSyntaxEditor",
			// 	component: CustomSyntaxEditor
			// }
		]
	}
];

export default Menu;
