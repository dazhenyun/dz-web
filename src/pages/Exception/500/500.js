import { PureComponent } from "react";
import { connect } from "dva";
import { Link, Route, Redirect, Switch, routerRedux } from "dva/router";
import store from "../../../app";

class Exp500 extends PureComponent {
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
		return (
			<div className="exception">
				<div className="img-block">
					<div className="img-ele exp500"></div>
				</div>
				<div className="content">
					<h1>500</h1>
					<div className="desc">抱歉，服务器出错了</div>
					<div className="actions">
						<button type="button" className="ant-btn ant-btn-primary" onClick={this.goHome.bind(this)}>
							<span>返回首页</span></button>
					</div>
				</div>
			</div>
		);
	}
}

export default Exp500;
