/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个跟踪鼠标位置的 Hook
 */

import { useEffect, useState } from "react";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useMouse } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const mouse = useMouse();

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">获取鼠标位置</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					Mouse Pos: {JSON.stringify(mouse)}
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
