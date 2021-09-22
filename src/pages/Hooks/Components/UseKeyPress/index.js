/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个优雅的管理 keyup 和 keydown 键盘事件的 Hook，支持键盘组合键，定义键盘事件的 key 和 keyCode 别名输入 。
 */

import { useRef, useState, useLayoutEffect } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useKeyPress } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import CodeMd3 from "./code3.md";
import CodeMd4 from "./code4.md";
import CodeMd5 from "./code5.md";

const Demo2 = () => {
	const [counter, setCounter] = useState(0);

	useKeyPress("left", () => {
		setCounter((s) => s - 1);
	});

	useKeyPress("right", () => {
		setCounter((s) => s + 1);
	});

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<p>Try pressing the following: </p>
				<div>1. Press ArrowLeft to decrease</div>
				<div>2. Press ArrowRight to increase</div>
				<div>
					counter: <span style={{ color: "#f00" }}>{counter}</span>
				</div>
			</div>
		</CodePreviewer>
	);
};

const Demo3 = () => {
	const [num, setNum] = useState();
	const [key, setKey] = useState();
	const [state, setState] = useState();
	const filterKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	useKeyPress(filterKey, (event) => {
		setNum(event.key);
	});

	// a s d f, Backspace, 8
	useKeyPress([65, 83, 68, 70, 8, "8"], (event) => {
		setKey(event.key);
	});

	useKeyPress(["shift.c"], () => {
		setState(1);
	});

	useKeyPress("ctrl.c", () => {
		setState(3);
	});

	useKeyPress("meta.c", () => {
		setState(4);
	});

	useKeyPress(["ctrl.v", "meta.v"], () => {
		setState(5);
	});

	return (
		<CodePreviewer code={CodeMd3} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<p>Try pressing the following: </p>
				<div>
					1. Number key [0-9]: <span style={{ color: "#f00" }}>{num}</span>
				</div>
				<div>
					2. Press key [a, s, d, f, Backspace, 8]: <span style={{ color: "#f00" }}>{key}</span>
				</div>
				<div>
					3. Modifier key [shift.c]: {state === 1 && <span style={{ color: "#f00" }}>ok</span>}
				</div>
				<div>
					4. Modifier key [ctrl.c]:{" "}
					{state === 3 && <span style={{ color: "#f00" }}>ok</span>}
				</div>
				<div>
					5. Modifier key [meta.c]:{" "}
					{state === 4 && <span style={{ color: "#f00" }}>ok</span>}
				</div>
				<div>
					6. Modifier key [ctrl.v, meta.v]:{" "}
					{state === 5 && <span style={{ color: "#f00" }}>ok</span>}
				</div>
			</div>
		</CodePreviewer>
	);
};

const Demo4 = () => {
	const [key, setKey] = useState();
	const filterKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	useKeyPress(
		(event) => !filterKey.includes(event.key),
		(event) => {
			if (event.type === "keyup") {
				setKey(event.key);
			}
		},
		{
			events: ["keydown", "keyup"]
		},
	);

	return (
		<CodePreviewer code={CodeMd4} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				Pressing key except number key：<span style={{ color: "#f00" }}>{key}</span>
			</div>
		</CodePreviewer>
	);
};

const Demo5 = () => {
	const [text, setText] = useState("");

	useKeyPress(
		"enter",
		(event) => {
			const { value } = event.target;
			setText(value);
		},
		{
			events: ["keyup"],
			target: () => document.getElementById("input")
		},
	);

	return (
		<CodePreviewer code={CodeMd5} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div>
					<p>Input and pressing enter: {text}</p>
					<Input id="input" style={{ width: 300 }} />
				</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const [counter, setCounter] = useState(0);

	useKeyPress("ArrowUp", () => {
		setCounter((s) => s + 1);
	});

	// keyCode value for ArrowDown
	useKeyPress(40, () => {
		setCounter((s) => s - 1);
	});

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">支持键盘事件中的 key 和 keyCode，请按 ArrowUp 或 ArrowDown 键进行演示</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<p>Try pressing the following: </p>
					<div>1. Press ArrowUp by key to increase</div>
					<div>2. Press ArrowDown by keyCode to decrease</div>
					<div>
						counter: <span style={{ color: "#f00" }}>{counter}</span>
					</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">支持使用别名，更多内容请查看备注</h4>
			<Demo2 />
			<h4 className="blueGray">支持接收一组输入键，或以组合键的方式传递参数</h4>
			<Demo3 />
			<h4 className="blueGray">支持接收一个返回 boolean 的回调函数，处理预处理操作</h4>
			<Demo4 />
			<h4 className="blueGray">默认监听挂载在 window 上的事件，你也可以传入 DOM 对象或通过 function 返回一个对象的方式引入</h4>
			<Demo5 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
