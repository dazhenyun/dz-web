/*
 * @CreatDate: 2021-09-16 16:29:14
 * @Describe: babel按需加载
 */

import { MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import BaseMd from "./base.md";

export default () => {
	return (
		<div>
			<Title
				title="@dzo/babel-plugin-dz"
				description="基于DZO组件规范，自动化分析代码和样式的引入来帮助减小打包体积。"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
		</div>
	);
};
