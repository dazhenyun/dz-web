/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: NumRange 数字区间组件
 */

import { useState } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { NumRange } from "@dzo/com";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";

export default () => {
	const [value, setValue] = useState(null);

	return (
		<>
			<Title title="NumRange 数字区间" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<NumRange
						value={value}
						style={{ width: 500 }}
						onChange={v => {
							setValue(v);
						}}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
