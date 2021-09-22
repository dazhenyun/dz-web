## 代码

```javascript
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
```

## API

### 参数
| 属性名称    | 属性说明                           | 类型     | 默认值      | 是否必须 |
| :---------- | :------------------------------ | :------ | :---------- | :------- |
| type        | 类型，展示“更多”的模式，Icon或者文字 | String   | 文字          | 否       |
| num        | 最多展示的个数                     | Number   |    3      | 否      |
| divider  | 分隔线                     | Bool   | true          | 否       |
| lang       | 中英文                     | String   | cn          | 否       |
| className  | 自定义类名                     | String   | 无          | 否       |
