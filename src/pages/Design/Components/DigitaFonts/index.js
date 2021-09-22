/*
 * @CreatDate: 2021-09-15 17:26:04
 * @Describe: 数字字体
 */

import { MdPreviewer } from "react-markdown-previewer";
import Charts from "./Charts";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import UseMd from "./use.md";

export default () => {

	return (
		<>
			<Title
				title='数字字体'
				description="适合项目中特殊数据的展示的数字字体"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<Charts />
			<MdPreviewer md={UseMd}></MdPreviewer>
		</>
	);
};
