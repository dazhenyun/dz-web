/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: SearchTree 搜索树
 */

import { useState } from "react";
import { Tooltip, Button, Modal, message } from "antd";
import {
	FolderOutlined,
	FileTextOutlined,
	PlusCircleOutlined,
	FolderOpenOutlined
} from "@ant-design/icons";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { SearchTree } from "@dzo/com";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import CodeMd3 from "./code3.md";
import ApiMd from "./api.md";

const { TreeBreadCrumb } = SearchTree;

const treeData = [
	{
		key: "1",
		title: "父文件1",
		children: [
			{ key: "1-1", title: "子文件1" },
			{ key: "1-2", title: "子文件2" }
		]
	},
	{
		key: "2",
		title: "父文件2",
		children: [
			{
				key: "2-1",
				title: "子文件3",
				folder: true,
				children: [{ key: "2-1-1", title: "子文件5" }]
			},
			{
				key: "2-2",
				title: "子文件4"
			}
		]
	}
];

const treeData2 = [
	{
		key: "1",
		title: "文件夹1",
		folder: true, // 这个数据需要在传入之前组装好
		children: [
			{ key: "1-1", title: "子文件1" },
			{ key: "1-2", title: "子文件2" },
			{ key: "1-3", title: "子文件3" },
			{ key: "1-4", title: "子文件4" },
			{ key: "1-5", title: "子文件5" }
		]
	},
	{
		key: "2",
		title: "文件夹2",
		folder: true,
		children: [
			{
				key: "2-1",
				title: "子文件夹",
				folder: true,
				children: [{ key: "2-1-1", title: "子文件1" }]
			},
			{
				key: "2-2",
				title: "子文件2"
			}
		]
	},
	{
		key: "3",
		title: "文件夹333333333333333",
		folder: true,
		children: []
	}
];

const treeData3 = [
	{
		key: "1",
		title: "父文件1",
		children: [
			{ key: "1-1", title: "子文件1" },
			{ key: "1-2", title: "子文件2" }
		]
	},
	{
		key: "2",
		title: "父文件2",
		children: [
			{
				key: "2-1",
				title: "子文件3",
				folder: true,
				children: [{ key: "2-1-1", title: "子文件5" }]
			},
			{
				key: "2-2",
				title: "子文件4"
			}
		]
	}
];

export default () => {
	const [selectedKeys, setSelectedKeys] = useState(["2-1-1"]);
	const [checkedKeys, setCheckedKeys] = useState([]);

	return (
		<>
			<Title account="ued" title="SearchTree 搜索树" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<SearchTree treeData={treeData} iconRender={() => <FolderOutlined />} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 文件夹跟文件组合"></MdPreviewer>
			<MdPreviewer md="包含右键菜单示例、重命名等"></MdPreviewer>
			<CodePreviewer code={CodeMd2} showCode={false}>
				<div style={{ padding: 20 }}>
					<SearchTree
						toolBarRender={() => (
							<TreeBreadCrumb
								title="我是标题"
								rightRender={() => (
									<Tooltip title="新建文件夹">
										<PlusCircleOutlined />
									</Tooltip>
								)}
							/>
						)}
						selectedKeys={selectedKeys}
						treeData={treeData2}
						iconRender={(item, isExpand) =>
							item.folder ? (
								isExpand ? (
									<FolderOpenOutlined />
								) : (
									<FolderOutlined />
								)
							) : (
								<FileTextOutlined />
							)
						}
						onSelect={(keys, item) => {
							if (!item.folder) {
								setSelectedKeys([item.key]);
							}
						}}
						onRightClickRender={({ item, clearRightClickRender, setRenameKey }) => {
							return [
								{
									key: "add",
									name: "新增",
									onClick: () => {
										Modal.confirm({
											content: "新增"
										});
									}
								},
								{
									key: "del",
									name: "删除",
									onClick: () => {
										Modal.confirm({
											content: `确认删除${item?.title}？`
										});
									}
								},
								{
									key: "rename",
									name: "重命名",
									onClick: () => {
										setRenameKey(item.key);
									}
								}
							];
						}}
						onRename={(v, item, clearRename) => {
							message.success("重命名修改成功");
							clearRename();
						}}
					/>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 全选"></MdPreviewer>
			<CodePreviewer code={CodeMd3} showCode={false}>
				<div style={{ padding: 20 }}>
					<SearchTree
						treeData={treeData3}
						toolBarRender={({ clearCheckedKeys }) => (
							<SearchTree.TreeBreadCrumb
								title={`已选 ${checkedKeys?.length || ""}`}
								rightRender={() => (
									<a
										onClick={() => {
											clearCheckedKeys();
										}}
									>
										清除
									</a>
								)}
							/>
						)}
						checkedKeys={checkedKeys}
						onCheck={keys => {
							setCheckedKeys(keys);
						}}
						checkable
					/>
					<Button
						type="primary"
						onClick={() => {
							console.log(checkedKeys);
						}}
					>
						保存
					</Button>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
