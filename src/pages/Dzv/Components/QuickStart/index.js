/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 快速入门
 */

import { PureComponent, Fragment } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import BaseMd from "./base.md";

class QuickStart extends PureComponent {
	render() {
		return (
			<Fragment>
				<Title
					account="mufeng"
					title='图表组件库'
					description="基于echarts5封装的React图表组件库"
				/>
				<MdPreviewer md={BaseMd} />
			</Fragment>
		);
	}
}

export default QuickStart;
