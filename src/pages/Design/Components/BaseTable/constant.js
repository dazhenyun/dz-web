export const pageSearchParams = [
	{
		labelText: "核查单编号",
		children: [
			{
				name: "checkCode",
				componentType: "input",
				isInputNumber: false,
				placeholder: "请输入核查单编号"
			}
		]
	},
	{
		labelText: "核查单来源",
		children: [
			{
				name: "sourceType",
				componentType: "select",
				placeholder: "请选择来源",
				selectOption: [
					{ name: "1", dName: "贷前" },
					{ name: "2", dName: "贷后" }
				]
			}
		]
	},
	{
		labelText: "",
		children: [
			{
				name: "搜索",
				componentType: "searchBtn"
			},
			{
				name: "清空",
				componentType: "clearBtn"
			}
		]
	}
];

export const defaultColumns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		ellipsis: true,
		render: text => <a>{text}</a>
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age"
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address"
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		render: tags => (
			<span>
				tag
			</span>
		)
	},
	{
		title: "Action",
		key: "action",
		render: (text, record) => (
			<span>
				<a>Invite {record.name}</a>
				<Divider type="vertical" />
				<a>Delete</a>
			</span>
		)
	}
];
