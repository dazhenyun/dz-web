/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 信贷决策流
 */

import "./index.less";
import { useRef } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";
import Workflow from "@tntx/workflow";

const Demo = props => {

	const graphInstance = useRef();

	return (
		<div>
			<Title
				title='信贷决策流'
				description="基于业务分离出的决策流组件，完善的API，简单的用法，极大提升开发效率。"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "20px", height: "900px" }}>
					<Workflow
						saveLoading={false} // 与onSave配合使用
						onSave={(obj) => {
							console.log(obj); // 返回的数据
						}}
						getGraphInstance={(ref) => { graphInstance.current = ref.current; }} // 获取画布实例
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};

export default Demo;

