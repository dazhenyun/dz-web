/*
 * @CreatDate: 2020-03-22 15:39:38
 * @Describe: 格式化工具模块
 */

import "./index.less";
import { PureComponent } from "react";
import { connect } from "dva";
import { Menu } from "antd";
import { routerRedux } from "dva/router";
import menuList from "./menu";
import { getUrlKey } from "@tntd/utils";

const { SubMenu } = Menu;
let flatMenu = [];

class Docs extends PureComponent {

	state = {
		activeItem: {
			component: menuList[0].component
		},
		selectedKeys: ["json"],
		showHeader: true
	};

	componentDidMount() {
		const { match } = this.props;
		const { name } = match.params;
		this.flatMenu(menuList);
		const obj = flatMenu.find(k => k.code === name);

		const hasHeader = getUrlKey("hasHeader");
		let showHeader = true;
		if (hasHeader === "no" && window.self !== top) {
			showHeader = false;
		}

		this.setState({
			selectedKeys: [`${name}`],
			activeItem: {
				component: obj.component
			},
			showHeader
		});
	}

	flatMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return this.flatMenu(item.children);
			}
			return flatMenu.push(item);
		});
	}

	clickMenuItem = (data) => {
		const { dispatch } = this.props;
		const path = `/formatTools/${data.code}`;
		dispatch(routerRedux.push(path));
		this.setState({
			activeItem: {
				component: data.component
			},
			selectedKeys: [`${data.code}`]
		});
	}

	renderMenu = (data) => {
		return data.map((item) => {
			if (item.notRender) {
				return;
			}
			if (item.children) { // 如果有子节点，继续递归调用，直到没有子节点
				return (
					<SubMenu title={item.title} key={item.code}>
						{this.renderMenu(item.children)}
					</SubMenu>
				);
			}
			// 没有子节点就返回当前的父节点
			return (
				<Menu.Item
					title={item.title}
					key={item.code}
					onClick={() => this.clickMenuItem(item)}
				>
					{item.title}
				</Menu.Item>
			);
		});
	}

	render() {
		const { activeItem, selectedKeys, showHeader } = this.state;

		return (
			<div className="g-format-tools">
				{
					showHeader &&
					<div className="menu">
						<Menu
							selectedKeys={selectedKeys}
							mode="horizontal"
						>
							{this.renderMenu(menuList)}
						</Menu>
					</div>
				}
				<div className="wrap-content">
					<activeItem.component />
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	globalStore: state.global
}))(Docs);
