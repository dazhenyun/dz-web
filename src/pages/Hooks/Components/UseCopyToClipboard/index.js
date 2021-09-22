/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个复制数据到剪贴板的 Hook
 */

import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useCopyToClipboard, useFavicon } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	useFavicon("https://sinan.tongdun.me/cdn/bucket/disk/book/2805/955/20200715151604511_favicon-tntweb.png");
	const [text, setText] = useState("");
	const [state, copyToClipboard] = useCopyToClipboard();

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<Input
						style={{ width: 300 }}
						value={text}
						onChange={e => setText(e.target.value)}
					/>
					<Button className="ml10 mb10" onClick={() => copyToClipboard(text)}>copy text</Button>
					{state.error
						? <p>Unable to copy value: {state.error.message}</p>
						: state.value && <p>Copied {state.value}</p>}
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
