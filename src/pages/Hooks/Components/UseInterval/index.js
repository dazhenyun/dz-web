/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个可以处理 setInterval 计时器函数的 Hook。
 */

import { useState } from "react";
import { Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useInterval } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const [count, setCount] = useState(0);
	const [interval, setInterval] = useState(1000);

	useInterval(
		() => {
			setCount(count + 1);
		},
		interval,
		{ immediate: true },
	);

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<p style={{ marginTop: 16 }}> count: {count} </p>
				<p style={{ marginTop: 16 }}> interval: {interval} </p>
				<Button onClick={() => setInterval(interval + 1000)}>interval + 1000</Button>
				<Button onClick={() => setInterval(1000)}>reset interval</Button>
				<Button onClick={() => setInterval(null)}>clear</Button>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const [count, setCount] = useState(0);

	useInterval(() => {
		setCount(count + 1);
	}, 1000);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">每1000ms，执行一次</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<p> count: {count} </p>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">立即执行定时器的重启、间隔时间增加、清除的使用</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
