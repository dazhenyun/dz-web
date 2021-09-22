/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 提供虚拟化列表能力的 Hook，用于解决展示海量数据渲染时首屏渲染缓慢和滚动卡顿问题。
 */

import { useEffect, useState } from "react";
import { InputNumber, Button } from "antd";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useVirtualList } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";

const Demo2 = () => {
	const [value, onChange] = useState(0);
	const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
		Array.from(Array(99999).keys()),
		{
			itemHeight: i => (i % 2 === 0 ? 42 + 8 : 84 + 8),
			overscan: 10
		},
	);

	return (
		<CodePreviewer code={CodeMd2} showCode={false}>
			<div style={{ padding: "10px 20px" }}>
				<div style={{ textAlign: "right", marginBottom: 16 }}>
					<InputNumber
						style={{ width: 120 }}
						placeholder="line number"
						value={value}
						onChange={e => onChange(e)}
					/>
					<Button style={{ marginLeft: 8 }} onClick={() => scrollTo(value)}>scroll to</Button>
				</div>
				<div {...containerProps} style={{ height: "300px", overflow: "auto" }}>
					<div {...wrapperProps}>
						{list.map(ele => (
							<div
								style={{
									height: ele.index % 2 === 0 ? 42 : 84,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									border: "1px solid #e8e8e8",
									marginBottom: 8
								}}
								key={ele.index}
							>
								Row: {ele.data} size: {ele.index % 2 === 0 ? "small" : "large"}
							</div>
						))}
					</div>
				</div>
			</div>
		</CodePreviewer>
	);
};

export default props => {
	const { list, containerProps, wrapperProps } = useVirtualList(Array.from(Array(9999).keys()), {
		overscan: 30,
		itemHeight: 60
	});

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">渲染大量数据</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<div {...containerProps} style={{ height: "300px", overflow: "auto" }}>
						<div {...wrapperProps}>
							{list.map((ele) => (
								<div
									style={{
										height: 52,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										border: "1px solid #e8e8e8",
										marginBottom: 8
									}}
									key={ele.index}
								>
									Row: {ele.data}
								</div>
							))}
						</div>
					</div>
				</div>
			</CodePreviewer>
			<h4 className="blueGray">动态指定每个元素的高度</h4>
			<Demo2 />
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
