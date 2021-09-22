import dynamic from "dva/dynamic";

// dynamic包装 函数
const dynamicWrapper = ({ app, models = [], component }) =>
	dynamic({
		app,
		models,
		component
	});

const basicLayoutNavs = app => ({
	component: dynamicWrapper({
		app,
		models: () => [],
		component: () => import("../layouts/BasicLayout/")
	}),
	layout: "BasicLayout",
	name: "首页",
	path: "/",
	children: [
		{
			name: "other",
			path: "/",
			icon: "setting",
			children: [
				{
					name: "首页",
					path: "/",
					component: dynamicWrapper({
						app,
						models: () => [import("../pages/Home/model")],
						component: () => import("../pages/Home/")
					})
				},
				{
					name: "DZO",
					path: "/dzo/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Dzo")
					})
				},
				{
					name: "DZV",
					path: "/dzv/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Dzv")
					})
				},
				{
					name: "Hooks",
					path: "/hooks/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Hooks/")
					})
				},
				{
					name: "DZC",
					path: "/dzc/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Dzc/")
					})
				},
				{
					name: "设计",
					path: "/design/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Design/")
					})
				},
				{
					name: "解决方案",
					path: "/solution/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Solution/")
					})
				},
				{
					name: "工具导航",
					path: "/tools",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/Tools/")
					})
				},
				{
					name: "格式化工具",
					path: "/formatTools/:name",
					component: dynamicWrapper({
						app,
						models: () => [],
						component: () => import("../pages/FormatTools")
					})
				}
			]
		},
		{
			name: "other",
			path: "exception",
			icon: "setting",
			notRender: true,
			children: [
				{
					name: "403",
					path: "403",
					component: dynamicWrapper({
						app,
						component: () => import("../pages/Exception/403/")
					})
				},
				{
					name: "404",
					path: "404",
					component: dynamicWrapper({
						app,
						component: () => import("../pages/Exception/404/")
					})
				},
				{
					name: "500",
					path: "500",
					component: dynamicWrapper({
						app,
						component: () => import("../pages/Exception/500/")
					})
				}
			]
		}
	]
});

const emptyLayoutNavs = app => ({
	component: dynamicWrapper({
		app,
		component: () => import("../layouts/EmptyLayout/")
	}),
	layout: "EmptyLayout",
	name: "首页",
	path: "/",
	children: []
});

// nav data
export const getNavData = app => [
	basicLayoutNavs(app),
	emptyLayoutNavs(app)
];
