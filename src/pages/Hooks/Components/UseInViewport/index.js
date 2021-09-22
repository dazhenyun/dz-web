/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个用于判断 dom 元素是否在可视范围之内的 Hook
 */

import { useEffect, useRef } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useInViewport } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const inViewPort = useInViewport(() => document.querySelector("#demo2"));

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div id="demo2">observer dom</div>
				<div style={{ marginTop: 70, color: inViewPort ? "#87d068" : "#f50" }}>
					{inViewPort ? "visible" : "hidden"}
				</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const ref = useRef();
	const inViewPort = useInViewport(ref);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">使用 ref 监听节点在视图变化或者滚动时是否在可视范围之内</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div ref={ref}>observer dom</div>
					<div style={{ marginTop: 70, color: inViewPort ? "#87d068" : "#f50" }}>
						{inViewPort ? "visible" : "hidden"}
					</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">传入 function 并返回一个 dom 元素</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
