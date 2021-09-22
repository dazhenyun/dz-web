/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 优雅使用 EventListener 的 Hook。
 */

import { useRef, useState } from "react";
import { Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useEventListener } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const [value, setValue] = useState("");

	const keyDownHandler = (ev) => {
		setValue(ev.code);
	};
	useEventListener("keydown", keyDownHandler);

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				Your press key is {value}
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const [value, setValue] = useState(0);

	const clickHandler = () => {
		setValue(value + 1);
	};

	const ref = useRef();
	useEventListener("click", clickHandler, { target: ref });

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">点击按钮查看效果</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<Button ref={ref}>
						You click {value} times
            		</Button>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">按下键盘查看效果</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
