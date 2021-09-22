/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 设置cookie
 */

import { useEffect, useState } from "react";
import { Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useCookie } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
	const [counter, setCounter] = useState(1);

	const updateCookieHandler = () => {
		updateCookie(`my-awesome-cookie-${counter}`);
		setCounter(c => c + 1);
	};

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">设置cookie</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<p>Value: {value}</p>
					<Button onClick={updateCookieHandler}>Update Cookie</Button>
					<br />
					<br />
					<Button onClick={deleteCookie}>Delete Cookie</Button>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
