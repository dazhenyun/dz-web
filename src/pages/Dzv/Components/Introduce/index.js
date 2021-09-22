/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 简介
 */

import "./index.less";
import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import IndexMd from "./index.md";

class Introduce extends PureComponent {

	render() {

		return (
			<div>
				<MdPreviewer md={IndexMd} />
			</div>
		);
	}
}

export default Introduce;
