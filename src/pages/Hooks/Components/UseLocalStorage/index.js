/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个可以将状态持久化存储在 localStorage 中的 Hook 。
 */

import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useLocalStorage } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import CodeMd3 from "./code3.md";

const defaultArray = ["a", "e", "i", "o", "u"];

const Demo2 = () => {
	const [value, setValue] = useLocalStorage("tdued", defaultArray);

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div>
					<p>{value.join("-")}</p>
					<Button onClick={() => setValue([...value, Math.random().toString(36).slice(-1)])}>push random</Button>
					<Button className="ml10" onClick={() => setValue(defaultArray)}>reset</Button>
				</div>
			</div>
		</CodePreviewer>
	);
};

const Demo3 = () => {
	const [user, setUser] = useLocalStorage("user", {
		id: 9234634791,
		name: "Zhangsan",
		age: 33
	});

	return (
		<CodePreviewer code={CodeMd3} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div>
					<Input
						style={{ width: 200 }}
						defaultValue={user.name}
						placeholder="input user name"
						onChange={(e) => {
							setUser({ ...user, name: e.target.value });
						}}
					/>
				</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const [message, setMessage] = useLocalStorage("user-message", "Hello~");

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">刷新页面后，可以看到输入框中的内容被从 localStorage 中恢复了</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<Input
						style={{ width: 200 }}
						value={message || ""}
						placeholder="Please enter some words..."
						onChange={(e) => setMessage(e.target.value)}
					/>
					<Button className="ml10 mr10" onClick={() => setMessage("Hello~")}>Reset</Button>
					<Button onClick={() => setMessage()}>Clear</Button>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">useLocalStorage 会自动处理序列化和反序列化的操作</h4>
			<Demo2 />
			<h4 className="blueGray">useLocalStorage 对象操作</h4>
			<Demo3 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
