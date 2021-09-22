/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一对帮助你处理在拖拽中进行数据转移的 hooks
 */

import { useEffect, useState } from "react";
import { Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useDrop, useDrag } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default () => {
	const getDragProps = useDrag();
	const [props, { isHovering }] = useDrop({
		onText: (text, e) => {
			console.log(e);
			alert(`'text: ${text}' dropped`);
		},
		onFiles: (files, e) => {
			console.log(e, files);
			alert(`${files.length} file dropped`);
		},
		onUri: (uri, e) => {
			console.log(e);
			alert(`uri: ${uri} dropped`);
		},
		onDom: (content, e) => {
			alert(`custom: ${content} dropped`);
		}
	});

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">拖拽区域可以接受文件，链接，文字，和下方的 box 节点</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div style={{ border: "1px dashed #e8e8e8", padding: 16, textAlign: "center" }} {...props}>
						{isHovering ? "release here" : "drop here"}
					</div>
					<div style={{ display: "flex", marginTop: 8 }}>
						{Array.from(Array(5)).map((e, i) => (
							<div
								{...getDragProps(`box${i}`)}
								style={{
									border: "1px solid #e8e8e8",
									padding: 16,
									width: 80,
									textAlign: "center",
									marginRight: 16
								}}
							>
								box{i}
							</div>
						))}
					</div>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
