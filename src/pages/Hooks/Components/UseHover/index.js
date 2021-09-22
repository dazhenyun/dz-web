/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个用于追踪 dom 元素是否有鼠标悬停的 Hook
 */

import { useEffect, useRef } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useHover } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const isHovering = useHover(() => document.getElementById("hover-div"), {
		onEnter: () => {
			console.log("onEnter");
		},
		onLeave: () => {
			console.log("onLeave");
		}
	});

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div id="hover-div">{isHovering ? "hover" : "leaveHover"}</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const ref = useRef();
	const isHovering = useHover(ref);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">使用 ref 设置需要需要监听的元素</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div ref={ref}>{isHovering ? "hover" : "leaveHover"}</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">传入 function 并返回一个 dom 元素</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
