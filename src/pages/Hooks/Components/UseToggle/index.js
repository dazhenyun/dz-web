/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 用于在两个状态值间切换的 Hook。
 */

import { useEffect, useState } from "react";
import { Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useToggle } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const [state, { toggle, setLeft, setRight }] = useToggle("Hello", "World");

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div>
					<p>Effects：{state}</p>
					<p>
						<Button onClick={() => toggle()}>Toggle</Button>
						<Button onClick={() => toggle("Hello")}>Toggle Hello</Button>
						<Button onClick={() => toggle("World")}>Toggle World</Button>
						<Button onClick={setLeft}>Set Hello</Button>
						<Button onClick={setRight}>Set World</Button>
					</p>
				</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const [state, { toggle }] = useToggle();

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">默认为 boolean 切换</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div>
						<p>Effects：{`${state}`}</p>
						<p>
							<Button onClick={() => toggle()}>Toggle</Button>
							<Button onClick={() => toggle(false)}>Toggle False</Button>
							<Button onClick={() => toggle(true)}>Toggle True</Button>
						</p>
					</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">接受两个参数，在参数间进行切换</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
