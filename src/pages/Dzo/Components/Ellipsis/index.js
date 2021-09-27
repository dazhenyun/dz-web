/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 省略号组件
 */

import { useEffect } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { Ellipsis } from "@dzo/com";
import { Table } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import ApiMd from "./api.md";

const columns = [
	{
		title: "姓名",
		dataIndex: "name"
	},
	{
		title: "年龄",
		dataIndex: "age"
	},
	{
		title: "住址",
		dataIndex: "address",
		ellipsis: true,
		render: (text) => (
			<Ellipsis title={text} />
		)
	},
	{
		title: "工作单位",
		dataIndex: "compony",
		ellipsis: true,
		render: (text) => (
			<Ellipsis title={text} />
		)
	},
	{
		title: "大学",
		dataIndex: "university",
		ellipsis: true,
		render: (text) => (
			<Ellipsis title={text} />
		)
	},
	{
		title: "大学简介",
		dataIndex: "des",
		ellipsis: true,
		render: (text) => (
			<Ellipsis title={text} />
		)
	}
];
const dataSource = [
	{
		name: "胡彦斌",
		age: 32,
		address: "中国浙江省丽水市云和县白龙山街道长田村坝头100号",
		compony: "中华人民共和国浙江省杭州市拱墅区万达商业中心D座16楼",
		university: "中华人民共和国浙江省杭州市浙江大学紫金港校区",
		des: "浙江大学紫金港校区位于杭州城西部塘北地块。浙江大学成立于1897年，前身'求是书院'，是中国人最早自己创办的新式高等学府之一。是首批进入国家'211工程'和'985工程'建设的重点大学之一"
	},
	{
		name: "胡彦祖",
		age: 42,
		address: "浙江省杭州市",
		compony: "拱墅区万达商业中心D座16楼",
		university: "浙江大学紫金港校区",
		des: "浙江大学紫金港校区位于杭州城西部塘北地块。"
	}
];

export default () => {
	return (
		<div>
			<Title
				title="Ellipsis省略号组件"
				description="根据限宽截断文本并显示省略号，添加Tooltip/Popover悬浮效果以显示完整文本。解决子符长度截断时不能很好的兼容中英文的问题。"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<h2>父级带宽度：</h2>
					<div style={{ width: 100 }}>
						<Ellipsis placement="topLeft" title="你看我有省略号吗？" />
					</div>
					<br />

					<h2>Tooltip和复制：</h2>
					<Ellipsis copyable widthLimit={100} title="你看我有省略号吗？" />
					<br />

					<h2>Popover和复制：</h2>
					<Ellipsis
						Popover
						copyable
						widthLimit={100}
						content="你看我有省略号吗？"
					/>
					<br />

					<h2>多行省略：</h2>
					<div style={{ width: 100 }}>
						<Ellipsis
							lines={2}
							title="你看我有省略号吗？你看我有省略号吗？你看我有省略号吗？"
						/>
					</div>
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 表格场景"></MdPreviewer>
			<CodePreviewer code={CodeMd2} showCode={false}>
				<div style={{ padding: 20 }}>
					<Table dataSource={dataSource} columns={columns} />
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
