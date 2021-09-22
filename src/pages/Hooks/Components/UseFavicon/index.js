/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 设置网站图标
 */

import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useFavicon } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	useFavicon("https://sinan.tongdun.me/cdn/bucket/disk/book/2805/955/20200715140114981_favicon-sinan.png");

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">窗口图标将被替换</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					观察浏览器tab图标
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
