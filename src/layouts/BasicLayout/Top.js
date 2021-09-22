import { PureComponent } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";

class Top extends PureComponent {

	handleClick = (path) => {
		const { dispatch } = this.props;
		dispatch(routerRedux.push(path));
	}

	render() {
		const { navList } = this.props.globalStore;
		const pathname = location.pathname;

		return (
			<header className={pathname === "/" ? "g-header g-header2" : "g-header"}>
				<a className="logo"></a>
				<ul className="ul">
					{
						navList.map((item, index) => {
							return (
								<li
									key={index}
									className={item.active ? "active" : null}
									onClick={() => this.handleClick(item.path)}
								>
									{
										item.new &&
										<i className="new-dot"></i>
									}
									{item.name}
								</li>
							);
						})
					}
				</ul>
			</header>
		);
	}
}

export default connect(state => ({
	globalStore: state.global
}))(Top);
