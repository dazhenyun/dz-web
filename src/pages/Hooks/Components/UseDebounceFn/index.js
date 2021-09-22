/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 用来处理防抖函数的 Hook。
 */

import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useDebounceFn } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const [value, setValue] = useState(0);
	const { run } = useDebounceFn(
		() => {
			setValue(value + 1);
		},
		{
			wait: 500
		},
	);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<p style={{ marginTop: 16 }}> Clicked count: {value} </p>
					<Button onClick={run}>Click fast!</Button>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
