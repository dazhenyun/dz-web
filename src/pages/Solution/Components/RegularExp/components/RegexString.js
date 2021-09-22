import { Select, Alert, Input, Table, Tooltip, Card } from "antd";
import { Modal } from "tntd";
import regExpList from "../regExp";
import { useState, useEffect, useRef } from "react";
import "../index.less";

const { Option, OptGroup } = Select;

export default () => {
	const regExpSelectRef = useRef();
	const regExpStringRef = useRef();

	const [errorMessage, setErrorMessage] = useState(false);
	const [dataSource, setDataSource] = useState([]);
	const [visible, setVisible] = useState(false);

	// 选择框选择输入
	const onChange = value => {
		regExpSelectRef.current.value = value;
		handleString();
	};
	// 输入事件
	const handleString = () => {
		try {
			let testString = regExpStringRef.current.value;
			let regExpObj = eval(regExpSelectRef.current.value);
			console.log(regExpObj);
			console.log(testString);
			let res = testString.match(regExpObj);
			console.log(res);
			setErrorMessage(false);
			if (res) {
				if (!res.index && res.index !== 0) {
					let resData = res.map((item, index) => {
						let newItem = {
							res: item,
							index: testString.indexOf(item)
						};
						testString = testString.replace(item, "0");
						console.log(testString);
						return newItem;
					});
					setDataSource(resData);
				} else {
					setDataSource(
						[
							{
								res: res[0],
								index: res.index
							}
						]
					);

				}

			} else {
				setDataSource([]);
			}

		} catch (err) {
			if (err) {
				console.log(err);
				setErrorMessage(true);
			}
		}

	};
	// 验证正则表达式
	const handleRegExp = () => {
		try {
			eval(regExpSelectRef.current.value);
			handleString();
			setErrorMessage(false);
		} catch (err) {
			if (err) {
				console.log(err);
				setErrorMessage(true);
			}
		}
	};

	const columns = [
		{
			title: "序号",
			render: (txt, record, index) => {
				return (
					<Tooltip title={index}>
						{index}
					</Tooltip>
				);
			}
		},
		{
			title: "匹配结果",
			render: (record) => {
				return (
					<Tooltip title={record.res}>
						{record.res}
					</Tooltip>
				);
			}
		},
		{
			title: "在原字符中的位置",
			render: (record) => {
				return (
					<Tooltip title={record.index}>
						{record.index}
					</Tooltip>
				);
			}
		}
	];

	useEffect(() => {
		// 处理输入的字符串
		regExpStringRef.current.oninput = handleString;
		// 处理输入的正则表达式
		regExpSelectRef.current.oninput = handleRegExp;
	}, []);

	return (

		<div className='regExp'>
			<Card size="small" title="正则表达式匹配" extra={<a onClick={() => setVisible(true)} > Regulex正则表达式解析</a>} style={{ width: "100%" }}>
				<span style={{ paddingRight: 10 }}>选择正则表达式进行匹配:</span>
				<Select
					className='regExpSelect'
					placeholder={"选择正则表达式"}
					onChange={onChange}
				>
					{
						regExpList.map((item) => {
							return (
								<OptGroup label={item.title} className='optGroup'>
									{item.children.map((opt) => {
										return (
											<Option value={opt.value}>{opt.title}</Option>
										);
									})}
								</OptGroup>
							);
						})
					}
				</Select>

				<textarea
					className='ant-input'
					placeholder='输入正则表达式进行匹配，例如/[^\uFF00-\uFFFF]/g'
					style={{ resize: "none", marginBottom: "10px" }}
					// value={regexInput}
					ref={regExpSelectRef}
				/>
				{
					errorMessage
						? (
							<Alert message="正则表达式语法错误" type="error" />
						)
						: null
				}
				<span>输入要匹配的字符串</span>
				<textarea
					className='ant-input'
					style={{ resize: "none", marginBottom: "10px" }}
					ref={regExpStringRef}
				/>
				<Table columns={columns} dataSource={dataSource} />
				<Modal
					visible={visible}
					title="Regulex"
					logo="https://jex.im/favicon.ico"
					onCancel={() => setVisible(false)}
				>
					<iframe src="https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24" />
				</Modal>
			</Card>
		</div >

	);
};
