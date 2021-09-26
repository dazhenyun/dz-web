/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: Iconfont 图标库
 */

import { useState, Fragment } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import { Tabs, Button } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";

const { TabPane } = Tabs;

export default () => {
	const origin = location.origin;
	const [activeKey, setActiveKey] = useState("1");

	const urlList = [
		{
			title: "运营管控平台",
			name: "1",
			src: `${origin}/assets/iconfont1/index.html`
		},
		{
			title: "云踪系统",
			name: "2",
			src: `${origin}/assets/iconfont2/index.html`
		}
	];

	const currentItem = urlList.find(item => item.name === activeKey);

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
									style={{ border: "#f0f0f0 solid 1px" }}
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

