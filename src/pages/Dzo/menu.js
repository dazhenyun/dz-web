import React from "react";
const Introduce = React.lazy(() => import("./Components/Introduce"));
const DzCli = React.lazy(() => import("./Components/DzCli"));
const Standard = React.lazy(() => import("./Components/Standard"));
const Recommend = React.lazy(() => import("./Components/Recommend"));
const Babel = React.lazy(() => import("./Components/Babel"));

const ComIcon = React.lazy(() => import("./Components/ComIcon"));
const DynamicFieldSet = React.lazy(() => import("./Components/DynamicFieldSet"));
const GForm = React.lazy(() => import("./Components/GForm"));
const ModalForm = React.lazy(() => import("./Components/ModalForm"));
const Money = React.lazy(() => import("./Components/Money"));
const NumRange = React.lazy(() => import("./Components/NumRange"));
const SearchTree = React.lazy(() => import("./Components/SearchTree"));
const FileUpload = React.lazy(() => import("./Components/FileUpload"));
const TableBtns = React.lazy(() => import("./Components/TableBtns"));

// const Icon = React.lazy(() => import("./Components/Icon"));
// const Handle = React.lazy(() => import("./Components/Handle"));
// const Ellipsis = React.lazy(() => import("./Components/Ellipsis"));

// const Utils = React.lazy(() => import("./Components/Utils"));

const Menu = [
	{
		title: "简介",
		code: "introduce",
		component: Introduce
	},
	{
		title: "脚手架cli 🔥",
		code: "dzCli",
		component: DzCli
	},
	{
		title: "前端规范",
		code: "standard",
		component: Standard
	},
	{
		title: "精选组件",
		code: "recommend",
		component: Recommend
	},
	{
		title: "Babel插件",
		code: "babel",
		component: Babel
	},
	{
		title: "组件",
		code: "commonComponents",
		children: [
			{
				title: "ComIcon 自定义Icon",
				code: "comIcon",
				component: ComIcon
			},
			{
				title: "DynamicFieldSet 动态列表",
				code: "dynamicFieldSet",
				component: DynamicFieldSet
			},
			{
				title: "GForm 表单",
				code: "gForm",
				component: GForm
			},
			{
				title: "ModalForm 表单弹窗",
				code: "modalForm",
				component: ModalForm
			},
			{
				title: "Money 金额",
				code: "money",
				component: Money
			},
			{
				title: "NumRange 数字区间",
				code: "numRange",
				component: NumRange
			},
			{
				title: "SearchTree 搜索树",
				code: "searchTree",
				component: SearchTree
			},
			{
				title: "TableBtns 操作按钮",
				code: "tableBtns",
				component: TableBtns
			},
			{
				title: "FileUpload 文件上传",
				code: "fileUpload",
				component: FileUpload
			}
			// {
			// 	title: "Icon图标",
			// 	code: "icon",
			// 	component: Icon,
			// 	notRender: process.env.SYS_ENV !== "development"	// 线上环境不显示
			// },
			// {
			// 	title: "多按钮操作",
			// 	code: "handle",
			// 	component: Handle,
			// 	notRender: process.env.SYS_ENV !== "development"	// 线上环境不显示
			// },
			// {
			// 	title: "Ellipsis省略号",
			// 	code: "ellipsis",
			// 	component: Ellipsis,
			// 	notRender: process.env.SYS_ENV !== "development"	// 线上环境不显示
			// }
		]
	}
	// {
	// 	title: "工具",
	// 	code: "toolComponents",
	// 	children: [
	// 		{
	// 			title: "常用工具库",
	// 			code: "utils",
	// 			component: Utils
	// 		}
	// 	]
	// }
];

export default Menu;
