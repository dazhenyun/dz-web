/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 一个帮助你管理列表状态，并能生成唯一 key 的 Hook。
 */

import { useEffect, useState } from "react";
import { Input } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { useDynamicList } from "@tntd/hooks";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

export default props => {
	const { list, remove, insert, replace } = useDynamicList(["David", "Jack"]);

	return (
		<div>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<h2>代码演示</h2>
			<h4 className="blueGray">可增删的不定条数数据</h4>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: "10px 20px" }}>
					<ul style={{ padding: 0 }}>
						{
							list.map((item, index) => {
								return (
									<li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
										<Input
											value={item}
											style={{ width: 200 }}
											onChange={(e) => replace(index, e.target.value)}
										/>
										{
											list.length > 1 &&
											<MinusCircleOutlined className="ml10" onClick={() => remove(index)} />
										}
										<PlusCircleOutlined className="ml10" onClick={() => insert(index + 1, "")} />
									</li>
								);
							})
						}
					</ul>
					<p>{JSON.stringify(list)}</p>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
