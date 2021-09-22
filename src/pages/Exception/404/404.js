import { PureComponent } from "react";
import { connect } from "dva";
import { Route, Redirect, Switch, routerRedux, Link } from "dva/router";
import store from "../../../app";

class Exp404 extends PureComponent {
	constructor(props) {
		super(props);
		this.goHome = this.goHome.bind(this);
	}

	goHome() {
		let { dispatch } = store;
		dispatch(routerRedux.push("/"));
		return;
	}

	render() {
		let { dispatch } = store;
		return (
			<div className="exception">
				<div className="img-block">
					<div className="img-ele exp404"></div>
				</div>
				<div className="content">
					<h1>404</h1>
					<div className="desc">抱歉，你访问的页面不存在</div>
					<div className="actions">
						<button type="button" className="ant-btn ant-btn-primary" onClick={this.goHome.bind(this)}>
							<span>返回首页</span></button>
					</div>
				</div>
			</div>
		);
	}
}

export default Exp404;
