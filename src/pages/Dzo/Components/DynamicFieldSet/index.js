/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: DynamicFieldSet 动态列表
 */

import { useRef } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { DynamicFieldSet, GForm } from "@dzo/com";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import ApiMd from "./api.md";

const formSet = [
	{
		type: "input",
		name: "name",
		props: {
			placeholder: "姓名"
		}
	},
	{
		type: "select",
		name: "sex",
		props: {
			placeholder: "性别"
		},
		optionsData: [
			{ label: "男", value: "0" },
			{ label: "女", value: "1" }
		]
	},
	{
		type: "datepicker",
		name: "date",
		props: {
			placeholder: "入职日期"
		}
	}
];

const formSet2 = [
	{
		type: "input",
		label: "姓名",
		name: "name",
		props: {
			placeholder: "姓名"
		}
	},
	{
		type: "select",
		name: "sex",
		title: "性别",
		props: {
			placeholder: "性别"
		},
		optionsData: [
			{ label: "男", value: "0" },
			{ label: "女", value: "1" }
		]
	},
	{
		type: "datepicker",
		name: "date",
		label: "入职日期",
		props: {
			placeholder: "入职日期"
		}
	}
];

export default () => {
	const formRef = useRef();
	const formRef2 = useRef();

	return (
		<>
			<Title title="DynamicFieldSet 动态列表" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm
						column={1}
						actionRef={formRef}
						submitCall={values => {
							console.log(values);
						}}
						formSet={[
							{
								type: "custom",
								renderChild: <DynamicFieldSet name="list" listFormSet={formSet} />
							}
						]}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 实例2"></MdPreviewer>
			<CodePreviewer code={CodeMd2} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm
						column={1}
						actionRef={formRef2}
						submitCall={values => {
							console.log(values);
						}}
						formSet={[
							{
								type: "custom",
								renderChild: <DynamicFieldSet name="list1" listFormSet={formSet2} hasHead />
							}
						]}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
