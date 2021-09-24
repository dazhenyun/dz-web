/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 快速入门
 */

import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";

import IndexMd from "./index.md";

class Introduce extends PureComponent {

	render() {

		return (
			<>
				<Title
					title="快速入门"
					description="我们不提倡重复造轮子，原子类组件采用antd及其规范，中台解决方案采用ProComponents部分组件，@dzo/com基于前两者的基础上从业务中沉淀而来"
				/>
				<MdPreviewer md={IndexMd} />
			</>
		);
	}
}

export default Introduce;
