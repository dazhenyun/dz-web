/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: 表单
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
			title: "场景1",
			name: "1",
			src: "http://10.1.20.82:8076/%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8CUI%E8%A7%84%E8%8C%83/html/%E9%A1%B9%E7%9B%AE%E5%9C%BA%E6%99%AF/%E5%89%8D%E7%AB%AF%E7%94%A8/%E5%BC%B9%E7%AA%97/index.html#artboard3"
		},
		{
			title: "场景2",
			name: "2",
			src: "http://10.1.20.82:8076/%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8CUI%E8%A7%84%E8%8C%83/html/%E9%A1%B9%E7%9B%AE%E5%9C%BA%E6%99%AF/%E5%89%8D%E7%AB%AF%E7%94%A8/%E5%BC%B9%E7%AA%97/index.html#artboard2"
		},
		{
			title: "场景3",
			name: "3",
			src: "http://10.1.20.82:8076/%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8CUI%E8%A7%84%E8%8C%83/html/%E9%A1%B9%E7%9B%AE%E5%9C%BA%E6%99%AF/%E5%89%8D%E7%AB%AF%E7%94%A8/%E5%BC%B9%E7%AA%97/index.html#artboard1"
		},
		{
			title: "场景4",
			name: "4",
			src: "http://10.1.20.82:8076/%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8CUI%E8%A7%84%E8%8C%83/html/%E9%A1%B9%E7%9B%AE%E5%9C%BA%E6%99%AF/%E5%89%8D%E7%AB%AF%E7%94%A8/%E5%BC%B9%E7%AA%97/index.html#artboard0"
		}
	];

	const currentItem = urlList.find(item => item.name === activeKey);

	return (
		<div>
			<Title
				account="mulan"
				title='表单'
				description="基于业务抽离的视觉设计规范"
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

