/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 用于设置页面标题的 Hook。
 */

import { useEffect, useState } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useTitle } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	useTitle("hello world", { restoreOnUnmount: true });

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">设置页面标题</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<p>设置页面标题为：hello world</p>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
