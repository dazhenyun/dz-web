/*
 * @CreatDate: 2021-09-15 11:20:51
 * @Describe: 正则表达式
 */

import Title from "@/components/Title";
import { MdPreviewer } from "react-markdown-previewer";
import BaseMd from "./base.md";
import RegexString from "./components/RegexString";

export default () => {
	return (
		<div>
			<Title title='正则表达式' />
			<RegexString />
			<MdPreviewer md={BaseMd}></MdPreviewer>
		</div>
	);
};
