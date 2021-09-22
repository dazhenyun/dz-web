/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个用于处理 dom 全屏的 Hook
 */

import { useEffect, useRef } from "react";
import { Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useFullscreen } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import img from "./react-hooks.jpg";

const Demo2 = () => {
	const [, { setFull }] = useFullscreen(() => document.getElementById("fullscreen-img"));

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div style={{ background: "white" }}>
					<div style={{ marginBottom: 16 }}>
						<img id="fullscreen-img" src={img} style={{ width: 320 }} alt="" />
					</div>
					<Button onClick={setFull}>setFull</Button>
				</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const ref = useRef();
	const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(ref);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">使用 ref 设置需要全屏的元素</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div ref={ref} style={{ background: "white" }}>
						<div style={{ marginBottom: 16 }}>{isFullscreen ? "Fullscreen" : "Not fullscreen"}</div>
						<div>
							<Button onClick={setFull}>setFull</Button>
							<Button onClick={exitFull}>exitFull</Button>
							<Button onClick={toggleFull}>toggle</Button>
						</div>
					</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">传入 function 来监听任意的 dom 节点</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
