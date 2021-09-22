/*
 * @CreatDate: 2021-09-15 17:13:26
 * @Describe: 大盘统计
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
			title: "大盘1",
			name: "1",
			src: "http://10.1.20.82:8076/%E8%BF%90%E8%90%A5%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0/%E7%9F%AD%E4%BF%A1%E8%90%A5%E9%94%80%E8%A7%A6%E8%BE%BE%E5%B9%B3%E5%8F%B01.15/html"
		},
		{
			title: "大盘2",
			name: "2",
			src: "http://10.1.20.82:8076/%E8%BF%90%E8%90%A5%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0/%E7%9F%AD%E4%BF%A1%E8%90%A5%E9%94%80%E8%A7%A6%E8%BE%BE%E5%B9%B3%E5%8F%B01.15/html"
		}
	];

	const currentItem = urlList.find(item => item.name === activeKey);

	return (
		<div>
			<Title
				title='大盘统计'
				description="UED对公司内部多个项目大盘进行的总结，有规律可直接借鉴。"
			/>

			<MdPreviewer md={BaseMd}></MdPreviewer>
			<div>
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
			</div>
		</div>
	);
};

