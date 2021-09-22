/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: `useCreation` 是 `useMemo` 或 `useRef` 的替代品。
 */

import { useEffect, useState } from "react";
import { Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useCreation } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

class Foo {
	constructor() {
		this.data = Math.random();
	}
}

export default props => {
	const foo = useCreation(() => new Foo(), []);
	const [, setFlag] = useState({});

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<p>{foo.data}</p>
					<Button onClick={() => setFlag({})}>Rerender</Button>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
