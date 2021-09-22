/*
 * @CreatDate: 2021-09-15 17:22:50
 * @Describe: 卡片场景
 */

import { useState, Fragment } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import { Tabs, Button } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";

const { TabPane } = Tabs;

export default () => {

	const [activeKey, setActiveKey] = useState("1");

	const urlList = [
		{
			title: "列表场景",
			name: "1",
			src: "http://10.1.20.82:8076/%E8%BF%90%E8%90%A5%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0/%E7%9F%AD%E4%BF%A1%E8%90%A5%E9%94%80%E8%A7%A6%E8%BE%BE%E5%B9%B3%E5%8F%B01.15/html"
		}
	];

	const currentItem = urlList.find(item => item.name === activeKey);

	return (
		<Fragment>
			<Title
				title='列表场景'
				description="业务中已经使用的列表场景，列表场景的优势很明显，适合那些很多字段的列表展示，如果用表格则会显得拥挤不堪，不得不用滚动展示，但滚动体验很不好。"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<Tabs
				activeKey={activeKey}
				onChange={(activeKey) => {
					setActiveKey(activeKey);
				}}
				tabBarExtraContent={
					currentItem &&
					<Fragment>
						<Button
							onClick={() => {
								window.open(currentItem.src);
							}}
						>
							新窗口打开
						</Button>
					</Fragment>
				}
			>
				{
					urlList.map(item => {
						return (
							<TabPane
								tab={item.title}
								key={item.name}
							>
								<iframe
									seamless={true}
									style={{ border: "none" }}
									width="100%"
									height="800"
									src={item.src}
								/>
							</TabPane>
						);
					})
				}
			</Tabs>
		</Fragment>
	);
};

