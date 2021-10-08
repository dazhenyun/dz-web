/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: ComIcon 自定义Icon
 */

import React, { useEffect } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { ComIcon } from "@dzo/com";
import { message } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";

export default () => {
	useEffect(() => {
		// 引入官方iconfont的Symbol的js文件，如果在项目中，可以放在html script标签引入一次即可
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.src = "//at.alicdn.com/t/font_1867423_9ry0ntx1gbk.js";
		document.head.appendChild(script);
	}, []);

	return (
		<>
			<Title account="ued" title="ComIcon 自定义Icon" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<ComIcon
						type="syncPeople"
						onClick={() => {
							message.success("你好");
						}}
					/>
					<ComIcon type="fuzhi" style={{ marginLeft: 10, color: "red" }} />
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
