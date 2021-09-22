/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: TableBtns 表格操作按钮
 */

import { useEffect } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { TableBtns } from "@dzo/com";
import { message } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";

export default () => {

	const buttons = [
		{
			name: "编辑",
			method: () => {
				message.success("设置点击事件");
			}
		},
		{
			type: "confirm",
			name: "删除",
			method: () => {
				message.success("删除点击事件");
			}
		},
		{
			type: "download",
			name: "下载",
			fileName: "test.csv",
			pathname: "http://www.baidu.com"
		},
		{
			type: "link",
			name: "链接",
			pathname: "http://www.baidu.com"
		},
		{
			type: "status",
			status: 1, // 默认0 1 切换
			textEnum: { 1: "授权", 0: "取消授权" },
			method: v => {
				console.log(v);
			}
		},
		{
			type: "more",
			children: [
				{
					name: "编辑1",
					method: () => {
						message.success("设置点击事件");
					}
				},
				{
					type: "confirm",
					name: "删除1",
					method: () => {
						message.success("删除点击事件");
					}
				},
				{
					type: "download",
					name: "下载1",
					auth: false,
					fileName: "test.csv",
					pathname: "http://www.baidu.com"
				},
				{
					type: "link",
					name: "链接1",
					pathname: "http://www.baidu.com"
				},
				{
					type: "status",
					status: 1, // 默认0 1 切换
					method: v => {
						console.log(v);
					}
				}
			]
		}
	];

	return (
		<>
			<Title title="TableBtns 表格操作按钮" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<TableBtns buttons={buttons} />
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
