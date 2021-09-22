/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 特效库
 */

import "./index.less";
import { PureComponent } from "react";
import { Row, Col } from "antd";
import { CodePreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";

// 转圈
import circleMD from "./example/rotate/circle/index.md";
import "./example/rotate/circle/index.css";
import circle3dMD from "./example/rotate/circle3d/index.md";
import "./example/rotate/circle3d/index.css";

// 水波纹
import rippleMD from "./example/ripple/index.md";
import rippleMD1 from "./example/ripple/index1.md";
import rippleMD2 from "./example/ripple/index2.md";
import "./example/ripple/index.css";

// 幻灯片
import SlideMd from "./example/slide/index.md";
import SlideMd1 from "./example/slide/index1.md";
import SlideMd2 from "./example/slide/index2.md";
import "./example/slide/index.css";

class SpecialEffects extends PureComponent {

	componentDidMount() {
		this.clickBtnRipple();
	}

	clickBtnRipple = () => {
		let rippleElements = document.getElementsByClassName("eventRippleDemo");
		let ripple;

		function createRipple(e) {
			ripple = document.createElement("div");
			ripple.className = "rippleEffect";

			this.appendChild(ripple);

			ripple.style.top = (e.offsetY - (this.offsetHeight / 2)) + "px";
			ripple.style.left = (e.offsetX - (this.offsetWidth / 2)) + "px";

			ripple.addEventListener("animationend", destroyRipple, false);
			ripple.addEventListener("webkitAnimationEnd", destroyRipple, false);
			ripple.addEventListener("oAnimationEnd", destroyRipple, false);
			ripple.addEventListener("MSAnimationEnd", destroyRipple, false);
		}

		function destroyRipple() {
			this.parentElement.removeChild(this);
		}

		for (var i = 0; i < rippleElements.length; i++) {
			rippleElements[i].addEventListener("mousedown", createRipple, false);
			rippleElements[i].addEventListener("touchstart", createRipple, false);
		}
	}

	render() {

		return (
			<div>
				<Title
					title='特效库'
					description="一些项目中使用的特效库。"
				/>
				<h2>转圈</h2>
				<Row gutter={16}>
					<Col span={12}>
						<CodePreviewer code={circleMD} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="rotateRoot">
									<div className="rotateCircle circleLeft"></div>
									<div className="rotateCircle circleRight"></div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
					<Col span={12}>
						<CodePreviewer code={circle3dMD} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="rotateRoot">
									<div className="rotateCircle3">
										<div className="circleLeft3d"></div>
									</div>
									<div className="rotateCircle3">
										<div className="circleRight3d"></div>
									</div>
									<div className="rotateCircle3 rotateCircleGroup">
										<div className="circleLeft3d"></div>
										<div className="circleRight3d"></div>
									</div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
				</Row>
				<h2>水波纹</h2>
				<Row gutter={16}>
					<Col span={12}>
						<CodePreviewer code={rippleMD} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="rippleRoot">
									<div className="waterRipple">
										<div className="waterDrop"></div>
									</div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
					<Col span={12}>
						<CodePreviewer code={rippleMD2} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="rippleRoot">
									<div className="eventRippleDemo eventRipple">
										点击
									</div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={24}>
						<CodePreviewer code={rippleMD1} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="eventRippleRoot">
									<div className="shadowRipple"></div>
									<div className="shadowRipple pink"></div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
				</Row>
				<h2>幻灯片</h2>
				<Row gutter={16}>
					<Col span={12}>
						<CodePreviewer code={SlideMd1} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="slideRoot">
									<div className="slideGuide"></div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
					<Col span={12}>
						<CodePreviewer code={SlideMd2} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="slideRoot">
									<div className="slideJumpContainer">
										<div className="slideJump"></div>
									</div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={24}>
						<CodePreviewer code={SlideMd} showCode={false}>
							<div style={{ padding: "20px" }}>
								<div className="slideRoot">
									<div className="slideUpDown"></div>
									<div className="eventPoint">
										<div className="slideUpDown"></div>
										<div className="eventCircle">
											<div></div>
											<div></div>
											<div></div>
										</div>
										<div className="eventInner"></div>
									</div>
								</div>
							</div>
						</CodePreviewer>
					</Col>
				</Row>
			</div>

		);
	}
}

export default SpecialEffects;
