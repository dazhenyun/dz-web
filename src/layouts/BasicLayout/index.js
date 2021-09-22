import React from "react";
import { Layout } from "antd";
import DocumentTitle from "react-document-title";
import { connect } from "dva";
import { Route, Redirect, Switch } from "dva/router";
import { ContainerQuery } from "react-container-query";
import { containerQueryProps } from "@/constants/common";
import classNames from "classnames";
import Top from "./Top";
import "./index.less";

const { Content } = Layout;

class BasicLayout extends React.PureComponent {
	getPageTitle() {
		// 获取页面标题
		let { location, getRouteData } = this.props;
		let { pathname } = location;
		let title = "DZ前端货架平台";

		getRouteData("BasicLayout").forEach(({ path, pattern, name }) => {
			if (path === pathname || (pattern && new RegExp(pattern).test(pathname))) {
				title = name;
			}
		});

		return title;
	}

	render() {
		const { getRouteData, currentUser, location: { pathname } } = this.props;

		const personalMode = {
			theme: "night"
		};

		const layout = (
			<Layout className={classNames("light basic-layout", { night: personalMode.theme === "night" })}>
				{
					!pathname.includes("/formatTools/") &&
					<Top currentUser={currentUser} />
				}
				<Layout>
					<Content className="basic-content">
						<Switch>
							{
								getRouteData("BasicLayout").map(item =>
								(
									<Route
										exact={item.exact}
										key={item.path}
										path={item.path}
										component={item.component}
									/>
								)
								)
							}
							<Redirect exact from="/" to="/index" />
							<Redirect exact to="/exception/404" />
						</Switch>
					</Content>
				</Layout>
			</Layout >
		);
		return (
			// <DocumentTitle title={this.getPageTitle()}>
			<ContainerQuery query={containerQueryProps}>
				{params => <div className={classNames(params)}>{layout}</div>}
			</ContainerQuery>
			// </DocumentTitle>
		);
	}
}

export default connect(state => ({
	globalStore: state.global
}))(BasicLayout);
