import React from "react";
import { Layout } from "antd";
import DocumentTitle from "react-document-title";
import { connect } from "dva";
import { Route, Redirect, Switch } from "dva/router";
import { ContainerQuery } from "react-container-query";
import { containerQueryProps } from "@/constants/common";
import classNames from "classnames";

const { Header, Content, Sider } = Layout;

class EmptyLayout extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	getPageTitle() {
		// 获取页面标题
		let { location, getRouteData } = this.props;
		let { pathname } = location;
		let title = "DZ前端货架平台";
		getRouteData("EmptyLayout").forEach((item) => {
			if (item.path === pathname) {
				title = item.name;
			}
		});
		return title;
	}

	render() {
		const { getRouteData } = this.props;

		const layout = (
			<Layout className="basic-layout">
				<Layout>
					<Content className="basic-content">
						<Switch>
							{
								getRouteData("EmptyLayout").map(item =>
								(
									<Route
										// exact={item.exact}
										key={item.path}
										path={item.path}
										component={item.component}
									/>
								)
								)
							}
							<Redirect exact to="/exception/404" />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
		return (
			<DocumentTitle title={this.getPageTitle()}>
				<ContainerQuery query={containerQueryProps}>
					{params => <div className={classNames(params)}>{layout}</div>}
				</ContainerQuery>
			</DocumentTitle>
		);
	}
}

export default connect(state => ({
	globalStore: state.global
}))(EmptyLayout);
