import { Fragment } from "react";
import { Title, Handle } from "tntd";
import { Table, Badge } from "antd";

export default () => {
	const dataSource = new Array(100).fill(1).map(
		(item, index) => ({
			id: index + 1,
			name: `项目${index + 1}`,
			description: "这是一段描述描述描述描述描述…",
			owner: `张三${index + 1}`,
			createTime: "2019-09-10 16:30:34",
			updateTime: "2019-09-10 16:30:34",
			status: ["初始化", "运行中", "成功", "失败"][index % 4],
			statusCode: ["default", "processing", "success", "error"][index % 4]
		})
	);
	const columns = [
		{
			title: "名称",
			dataIndex: "name",
			key: "name",
			ellipsis: true,
			width: 120,
			fixed: "left"
		},
		{
			title: "描述",
			dataIndex: "description",
			key: "description",
			ellipsis: true,
			width: 300
		},
		{
			title: "创建人",
			dataIndex: "owner",
			key: "owner",
			width: 120
		},
		{
			title: "创建时间",
			key: "createTime",
			dataIndex: "createTime"
		},
		{
			title: "修改时间",
			key: "updateTime",
			dataIndex: "updateTime"
		},
		{
			title: "状态",
			key: "status",
			width: 120,
			fixed: "right",
			render: (status, record) => {
				return <Badge status={record.statusCode} text={record.status} />;
			}
		},
		{
			title: "操作",
			key: "action",
			fixed: "right",
			width: 180,
			render: (text, record) => (
				<Handle>
					<a>编辑</a>
					<a>设置</a>
					<a>删除</a>
				</Handle>
			)
		}
	];
	return (
		<Fragment>
			<Title
				title='表格形式展现'
				number='3'
			/>
			<ul>
				<li>轻易不要让表格行换行，能一行解决的就一行解决；</li>
				<li>字段过多时，表格左右fixed后滚动；</li>
				<li>字段过多时，长文本宽度控制在300px以内，末尾...，至于是否要提供复制，根据业务决定；</li>
				<li>编号、id这些类型的字段限制宽度后，应提供一个复制按钮；</li>
			</ul>
			<Table
				className='border-table'
				rowKey="id"
				dataSource={dataSource}
				columns={columns}
				scroll={{ x: 1300 }}
				pagination={{
					pageSize: 10,
					total: 100,
					current: 1,
					showTotal: total => `共${total}条`,
					onChange: () => { },
					onShowSizeChange: () => { },
					showQuickJumper: true,
					showSizeChanger: true
				}}
			/>

		</Fragment>
	);
};
