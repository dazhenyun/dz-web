/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: Iconfont 图标库
 */

import { useState } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import { Tabs } from "antd";
import Title from "@/components/Title";
import WrapIcon from "./WrapIcon";
import yygk from "./yygk.json";
import yz from "./yz.json";
import dmp from "./dmp.json";

import BaseMd from "./base.md";

const { TabPane } = Tabs;

export default () => {
	const [activeKey, setActiveKey] = useState("1");

	const urlList = [
		{
			title: "DMP",
			name: "1",
			src: "//at.alicdn.com/t/font_2839244_7v59p1l45yy.js",
			data: dmp.glyphs
		},
		{
			title: "运营管控平台",
			name: "2",
			src: "//at.alicdn.com/t/font_1948912_3kjtcem0hq2.js",
			data: yygk.glyphs
		},
		{
			title: "云踪系统",
			name: "3",
			src: "//at.alicdn.com/t/font_2839222_wqehsdeg8nm.js",
			data: yz.glyphs
		}
	];

	return (
		<div>
			<Title
				title='Iconfont 图标库'
				description="业务系统中所使用的iconfont图标库"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<div>
				<Tabs
					activeKey={activeKey}
					onChange={(activeKey) => {
						setActiveKey(activeKey);
					}}
				>
					{
						urlList.map(item => {
							return (
								<TabPane
									tab={item.title}
									key={item.name}
								// style={{ border: "#f0f0f0 solid 1px" }}
								>
									<WrapIcon
										src={item.src}
										data={item.data}
									/>
								</TabPane>
							);
						})
					}
				</Tabs>
			</div>
		</div>
	);
};

