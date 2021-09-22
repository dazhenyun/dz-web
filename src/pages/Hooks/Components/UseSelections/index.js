/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 常见联动 checkbox 逻辑封装，支持多选，单选，全选逻辑，还提供了是否选择，是否全选。
 */

import { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useSelections } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

const list = [1, 2, 3, 4, 5, 6, 7, 8];

export default props => {
	const {
		selected,
		allSelected,
		isSelected,
		toggle,
		toggleAll
	} = useSelections(list, [1]);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">常见的 checkbox 联动</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div>Selected : {selected.join(",")}</div>
					<div style={{ borderBottom: "1px solid #E9E9E9", padding: "10px 0" }}>
						<Checkbox
							checked={allSelected}
							onChange={toggleAll}
						>
							全选
						</Checkbox>
					</div>
					<div style={{ padding: "10px 0" }}>
						{list.map((o) => (
							<Checkbox
								checked={isSelected(o)}
								onChange={() => toggle(o)}
							>
								{o}
							</Checkbox>
						))}
					</div>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
