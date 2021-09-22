import "./index.less";
import { PureComponent, Suspense } from "react";
import { connect } from "dva";
import { Menu, Tag } from "antd";
import { routerRedux } from "dva/router";
import menuList from "./menu";
import { getMenuNameList } from "@/utils/aside";

const { SubMenu } = Menu;
let flatMenu = [];

class Docs extends PureComponent {

	state = {
		activeItem: {
			component: menuList[0].component
		},
		selectedKeys: ["introduce"],
		defaultOpenKeys: ["menuComponents", "toolComponents", "commonComponents"]
	};

	componentDidMount() {
		const { match } = this.props;
		const { name } = match.params;
		// 判断url是否是正确的页面
		let urlIsExist = getMenuNameList(menuList, name).find(item => item === name);
		this.flatMenu(menuList);
		const obj = urlIsExist ? flatMenu.find(k => k.code === name) : menuList[0];
		this.setState({
			selectedKeys: [`${name}`],
			activeItem: {
				component: obj.component
			}
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
		const path = `/dzo/${data.code}`;
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
					{
						item.hasOwnProperty("notRender") &&
						!item.notRender &&
						<Tag className='dev-tag' color='red'>Dev</Tag>
					}
				</Menu.Item>
			);
		});
	}

	render() {
		const { activeItem, selectedKeys, defaultOpenKeys } = this.state;
		console.log("activeItem", activeItem);
		return (
			<div className="g-docs">
				<div className="menu">
					<Menu
						selectedKeys={selectedKeys}
						defaultOpenKeys={defaultOpenKeys}
						mode="inline"
						inlineCollapsed={false}
					>
						{this.renderMenu(menuList)}
					</Menu>
				</div>
				<div className="wrap-content">
					<div className="content">
						<Suspense fallback={null}>
							<activeItem.component />
						</Suspense>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	globalStore: state.global
}))(Docs);
