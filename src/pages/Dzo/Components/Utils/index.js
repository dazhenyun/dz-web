/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 常用工具库 Utils
 */

import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import BaseMd from "./base.md";
import Title from "@/components/Title";

class Utils extends PureComponent {

	render() {
		return (
			<div>
				<Title
					title="前端业务代码工具库"
					description="我们把业务开发中常用的工具类函数，统一封装到@tntd/utils包下，以提高开发效率，并支持TS引用。"
				/>
				<MdPreviewer md={BaseMd}></MdPreviewer>
			</div>
		);
	}
}

export default Utils;
