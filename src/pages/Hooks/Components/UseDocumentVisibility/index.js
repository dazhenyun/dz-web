/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 可以获取页面可见状态的 Hook。
 */

import { useEffect, useState } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useDocumentVisibility } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const documentVisibility = useDocumentVisibility();

	useEffect(() => {
		if (documentVisibility === "visible") {
			console.log(`Current document visibility state: ${documentVisibility}`);
		} else {
			console.log(`Current document visibility state: ${documentVisibility}`);
		}
	}, [documentVisibility]);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">监听 document 的可见状态</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					Current document visibility state: {documentVisibility}
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
