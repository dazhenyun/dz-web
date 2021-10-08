/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Money 金额组件
 */

import { useState } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { Money, GForm } from "@dzo/com";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import ApiMd from "./api.md";

const { MoneyInput, MoneyShow } = Money.set(100); // 甚至转化单位

export default () => {

	const [value, setValue] = useState(1);
	const onChange = v => {
		console.log(v);
		setValue(v);
	};

	return (
		<>
			<Title account="ued" title="Money 金额组件" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					无值：
					<MoneyShow value={"--"} />
					<br />
					小
					<MoneyShow value={10000} size="sm" />
					<br />
					中（默认）
					<MoneyShow value={10000} />
					<br />
					大
					<MoneyShow value={10000} size="lg" />
					<br />
					加粗
					<MoneyShow value={10000} size="lg" bold />
					<br />
					颜色（green,red,orange,primary,默认文本色）
					<MoneyShow value={10000} size="lg" color="green" />
					<MoneyShow value={10000} size="lg" color="red" />
					<MoneyShow value={10000} size="lg" color="orange" />
					<MoneyShow value={10000} size="lg" color="primary" />
					<br />
					横排：
					<MoneyShow value={10000} align="horizontal" precision={4} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 金额输入框"></MdPreviewer>
			<CodePreviewer code={CodeMd2} showCode={false}>
				<div style={{ padding: 20 }}>
					金额输入框： <MoneyInput value={value} onChange={onChange} />
					<br />
					<br />
					<br />
					Form表单结合:
					<GForm
						formSet={[
							{
								label: "金额",
								type: "custom",
								name: "amount",
								renderChild: <MoneyInput />,
								props: {
									precision: 4 // 默认两位
								}
							},
							{
								label: "金额",
								type: "custom",
								name: "amount2",
								renderChild: <MoneyInput />,
								props: {
									prefix: "$",
									suffix: "元"
								}
							},
							{
								label: "金额",
								type: "custom",
								name: "amount3",
								renderChild: <MoneyInput />,
								props: {
									addonBefore: "$",
									addonAfter: "元"
								}
							}
						]}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
