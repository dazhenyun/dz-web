/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 简介
 */

import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import IndexMd from "./index.md";

class Introduce extends PureComponent {

	render() {

		return (
			<MdPreviewer md={IndexMd} />
		);
	}
}

export default Introduce;
