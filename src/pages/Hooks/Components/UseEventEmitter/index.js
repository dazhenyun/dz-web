/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 在多个组件之间进行事件通知有时会让人非常头疼，借助 EventEmitter ，可以让这一过程变得更加简单。
 */

import { useRef, useState } from "react";
import { Input, Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useEventEmitter } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

const MessageBox = (props) => {
	return (
		<div style={{ paddingBottom: 24 }}>
			<p>You received a message</p>
			<Button onClick={() => props.focus$.emit()}>Reply</Button>
		</div>
	);
};

const InputBox = (props) => {
	const inputRef = useRef();
	props.focus$.useSubscription(() => {
		inputRef.current.focus();
	});
	return (
		<Input ref={inputRef} placeholder="Enter reply" style={{ width: "100%", padding: "4px" }} />
	);
};

export default props => {
	const focus$ = useEventEmitter();

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">父组件创建了一个 focus$ 事件，并且将它传递给了两个子组件。在 MessageBox 中调用 focus$.emit ，InputBox 组件就可以收到通知</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<MessageBox focus$={focus$} />
					<InputBox focus$={focus$} />
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
