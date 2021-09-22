/*
 * @CreatDate: 2020-12-22 17:48:52
 * @Describe: 多操作按钮
 */

import { PureComponent } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { Handle } from "tntd";
import { Table } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";
import "./index.less";

class HandleDemo extends PureComponent {
	render() {
		const dataSource = [
			{
				key: "1",
				name: "胡彦斌",
				age: 32,
				address: "西湖区湖底公园1号"
			},
			{
				key: "2",
				name: "胡彦祖",
				age: 42,
				address: "西湖区湖底公园1号"
			}
		];

		const columns = [
			{
				title: "姓名",
				dataIndex: "name",
				key: "name"
			},
			{
				title: "年龄",
				dataIndex: "age",
				key: "age"
			},
			{
				title: "住址",
				dataIndex: "address",
				key: "address"
			},
			{
				title: "操作",
				dataIndex: "opera",
				width: 240,
				render: () => {
					return (
						<Handle className="custom-class">
							<a onClick={() => { console.log("online"); }}>上线</a>
							<a>查看</a>
							<a>编辑</a>
							<a>测试</a>
							<a>导入</a>
							<a>导出</a>
						</Handle>
					);
				}
			}
		];
		return (
			<div>
				<Title
					title="多按钮操作"
					description="当存在多个操作按钮时，可以将大于某个(例如3个)时展示为更多"
				/>
				<MdPreviewer md={BaseMd}></MdPreviewer>
				<CodePreviewer code={CodeMd} showCode={false}>
					<Table
						dataSource={dataSource}
						columns={columns}
						rowKey={(e, i) => i}
					/>
				</CodePreviewer>
				<MdPreviewer md={ApiMd}></MdPreviewer>
			</div>
		);
	}
}

export default HandleDemo;
