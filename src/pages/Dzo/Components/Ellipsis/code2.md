```jsx
import React from 'react';
import { Table } from "antd";
import { Ellipsis } from '@dzo/com';

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

export default props => {
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
};
```