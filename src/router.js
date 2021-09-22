import { Router, Route, Switch } from "dva/router";
import dynamic from "dva/dynamic";
import { cloneDeep } from "lodash";
import { Spin, ConfigProvider } from "antd";
import { getNavData } from "./common/nav";
import { getPlainNode } from "./utils/utils";
import zhCN from "antd/es/locale/zh_CN";

// 设置默认的加载组件
dynamic.setDefaultLoadingComponent(() => (
	<Spin size="large" className="globalSpin" />
));

function getRouteData(navData, path) {
	if (
		!navData.some(item => item.layout === path) ||
		!navData.find(item => item.layout === path).children
	) {
		return null;
	}
	const route = navData.find(item => item.layout === path);

	return getPlainNode(cloneDeep(route.children));
}

function getLayout(navData, path) {
	if (
		!navData.some(item => item.layout === path) ||
		!navData.filter(item => item.layout === path)[0].children
	) {
		return null;
	}
	let route = navData.filter(item => item.layout === path)[0];
	return {
		component: route.component,
		layout: route.layout,
		name: route.name,
		path: route.path
	};
}

function RouterConfig({ history, app }) {
	const navData = getNavData(app);
	const BasicLayout = getLayout(navData, "BasicLayout").component;
	const EmptyLayout = getLayout(navData, "EmptyLayout").component;

	const passProps = {
		app,
		navData: navData.filter(item => item.layout !== "UserLayout"), // 剔除掉无需登录模块
		getRouteData: path => getRouteData(navData, path)
	};

	const emptyLayoutRouterList = [
		"/dms"
	];

	return (
		<ConfigProvider locale={zhCN}>
			<Router history={history}>
				<Switch>
					{emptyLayoutRouterList.map(item => (
						<Route
							path={item}
							render={props => (
								<EmptyLayout {...props} {...passProps} />
							)}
						/>
					))}
					<Route
						path="/"
						render={props => (
							<BasicLayout {...props} {...passProps} />
						)}
					/>
				</Switch>
			</Router>
		</ConfigProvider>
	);
}

export default RouterConfig;
