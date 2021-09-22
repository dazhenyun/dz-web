/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个用于监听 dom 节点尺寸变化的 Hook
 */

import { useRef, useState } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useSize } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const dom = document.querySelector("body");
	const size = useSize(dom);

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				try to resize the preview window <br />
				dimensions -- width: {size.width} px, height: {size.height} px
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const ref = useRef();
	const size = useSize(ref);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">使用 ref 监听节点尺寸变化</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div ref={ref}>
						try to resize the preview window <br />
                		dimensions -- width: {size.width} px, height: {size.height} px
            		</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">传入一个 dom 元素</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
