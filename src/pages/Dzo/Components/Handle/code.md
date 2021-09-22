```jsx
/*
 * @CreatDate: 2020-12-22 17:48:52
 * @Describe: 多操作按钮
 */

import { PureComponent } from "react";
import { Handle } from "tntd";
import { Table } from "antd";

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
				render: ()=>{
					return (
						<Handle className="custom-class">
							<a onClick={()=>{console.log("online");}}>上线</a>
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
			<Table
				dataSource={dataSource}
				columns={columns}
				rowKey={(e, i)=>i}
			/>
		);
	}
}

export default HandleDemo;

```
