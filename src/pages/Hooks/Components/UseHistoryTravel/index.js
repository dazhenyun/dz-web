/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 优雅的管理状态变化历史，可以快速在状态变化历史中穿梭 - 前进跟后退
 */

import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useHistoryTravel } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel([
		"do homework"
	]);

	const [inputValue, setInputValue] = useState("");

	const onAdd = () => {
		setValue([...value, inputValue]);
		setInputValue("");
	};

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">基础用法</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div style={{ border: "1px solid #607D8B", padding: 16, margin: "16px 0" }}>
						<h3>TODO List</h3>
						<ul>
							{value.map((it, index) => (
								<li key={index}>{it}</li>
							))}
						</ul>
					</div>
					<div>
						<Input
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Please enter TODO name"
							style={{ width: 200, marginRight: 20 }}
						/>
						<Button onClick={onAdd}>Add TODO</Button>
						<Button className="ml10 mr10" disabled={backLength <= 0} onClick={back}>Undo</Button>
						<Button disabled={forwardLength <= 0} onClick={forward}>Redo</Button>
					</div>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
