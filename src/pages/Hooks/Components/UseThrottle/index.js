/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 用来处理节流值的 Hook。
 */

import { useState } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useThrottle } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const [value, setValue] = useState();
	const throttledValue = useThrottle(value, { wait: 500 });

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">ThrottledValue 每隔 500ms 变化一次</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<Input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder="Typed value"
						style={{ width: 280 }}
					/>
					<p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
