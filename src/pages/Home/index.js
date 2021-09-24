import "./index.less";
import { useEffect, useState } from "react";
import { connect } from "dva";
import { Row, Col } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import { routerRedux } from "dva/router";

const solutionList = [
	{
		name: "2D可视化方案",
		des: "罗列常见的图表类型，开箱即用、配置简单",
		url: "/dzv/quickStart",
		src: require("./img/solution-1.svg")
	},
	{
		name: "3D可视化方案",
		des: "采用3D绘图技术，封装自用组件，简单易用",
		url: "/dzv/maps",
		src: require("./img/solution-3.svg")
	}
];

const HomePage = props => {
	const { dispatch } = props;

	const goToLink = (path) => {
		dispatch(routerRedux.push(path));
	};

	return (
		<div className="g-home">
			<div className="banner">
				<div className="banner-in">
					<p className="p1">前端一体化解决方案</p>
					<p className="p2">致力于提供简单、专业可靠的前端解决方案，让体验更美好</p>
					<button className="btn" onClick={() => goToLink("/dzo/introduce")}>开始使用</button>
				</div>
			</div>
			<div className="tntd">
				<div className="u-title">DZO<i></i></div>
				<ul className="clearfix ul">
					<li>
						<p className="p1"><img src={require("./img/feature-1.svg")} /></p>
						<p className="p2">快速接入</p>
						<p className="p3">一键快速搭建开发环境</p>
					</li>
					<li>
						<p className="p1"><img src={require("./img/feature-2.svg")} /></p>
						<p className="p2">简单易用</p>
						<p className="p3">功能模块操作简单方便</p>
					</li>
					<li>
						<p className="p1"><img src={require("./img/feature-3.svg")} /></p>
						<p className="p2">配套齐全</p>
						<p className="p3">私有化场景全面覆盖</p>
					</li>
					<li>
						<p className="p1"><img src={require("./img/feature-4.svg")} /></p>
						<p className="p2">强扩展性</p>
						<p className="p3">支持灵活的个性化定制</p>
					</li>
				</ul>
			</div>
			<div className="tntx">
				<div className="u-title">DZC<i></i></div>
				<div className='tntx-main'>
					<Row gutter={40}>
						<Col span={8}>
							<div className='tntx-item-wrap'>
								<img src={require("./img/tntx/npm.svg")} />
								<div className='info'>
									<p className="p2">组件物料</p>
									<p className="p3">贴合内部业务抽离，dzo最佳辅助</p>
								</div>
							</div>
						</Col>
						<Col span={8}>
							<div className='tntx-item-wrap'>
								<img src={require("./img/tntx/design.svg")} />
								<div className='info'>
									<p className="p2">设计物料</p>
									<p className="p3">精选业务UI素材，按需取用无依赖</p>
								</div>
							</div>
						</Col>
						<Col span={8}>
							<div className='tntx-item-wrap'>
								<img src={require("./img/tntx/code.svg")} />
								<div className='info'>
									<p className="p2">代码片段</p>
									<p className="p3">超轻量级业务模块，html+css随取随用</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<div className="solution" style={{ background: "#fff" }}>
				<div className="u-title">DZV<i></i></div>
				<ul className="ul clearfix">
					{
						solutionList &&
						solutionList.map((item, index) => {
							return (
								<li key={index} onClick={() => goToLink(item.url)}>
									<span className="s1"><img src={item.src} /></span>
									<p className="p1">{item.name}</p>
									<p className="p2">{item.des}</p>
								</li>
							);
						})
					}
				</ul>
			</div>
			<div className="design">
				<div className="u-title">设计语言<i></i></div>
				<div className="design-in clearfix">
					<div className="standard">
						<div className="title">设计规范</div>
						<span onClick={() => goToLink("/design/color")}>点击进入<RightCircleOutlined /></span>
						<img src={require("./img/standard.svg")} />
					</div>
					<div className="scene">
						<div className="title">设计场景</div>
						<span onClick={() => goToLink("/design/frame1")}>点击进入<RightCircleOutlined /></span>
						<img src={require("./img/scene.svg")} />
					</div>
				</div>
			</div>
			{/* <div className="solution">
				<div className="u-title">解决方案<i></i></div>
				<ul className="ul clearfix">
					{
						solutionList &&
						solutionList.map((item, index) => {
							return (
								<li key={index} onClick={() => goToLink(item.url)}>
									<span className="s1"><img src={item.src} /></span>
									<p className="p1">{item.name}</p>
									<p className="p2">{item.des}</p>
								</li>
							);
						})
					}
				</ul>
			</div> */}
			<div className="footer">
				<div className="footer-in">
					<ul>
						<li><span>友情链接</span></li>
						<li><a href="https://www.adayun.com/#/" target="_blank">阿达云🔥</a></li>
						<li><a href="http://git.dztech.com/" target="_blank">GitLab</a></li>
						<li><a href="http://10.1.20.101:8660/" target="_blank">禅道</a></li>
					</ul>
					<ul style={{ float: "right" }}>
						{/* <li><span>意见反馈</span></li> */}
						{/* <li><img src={require("./img/ewm.jpg")} /></li> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default connect(state => ({
	homeStore: state.home
}))(HomePage);
