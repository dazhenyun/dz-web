/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 社区精选组件
 */

import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import BaseMd from "./base.md";

class Recommend extends PureComponent {

	render() {

		return (
			<div>
				<MdPreviewer md={BaseMd}></MdPreviewer>
			</div>
		);
	}
}

export default Recommend;
