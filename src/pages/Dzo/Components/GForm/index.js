/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: GForm 表单
 */

import { useRef, useEffect, useState } from "react";
import { Button, Row, Col } from "antd";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { GForm, NumRange, GFormItem } from "@dzo/com";
import Title from "@/components/Title";
import { complexForm } from "./AllComMap";
import { basicInfoForm, companyInfoForm, payInfoForm } from "./FormGroupsMap";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import CodeMd2 from "./code2.md";
import CodeMd3 from "./code3.md";
import CodeMd4 from "./code4.md";
import CodeMd5 from "./code5.md";
import CodeMd6 from "./code6.md";
import ApiMd from "./api.md";

const CardForm = ({ title, formSet }) => {
	const formItemProps = {
		column: 3,
		layout: "vertical"
	};

	return (
		<div className="card-box">
			<h5 className="chapter-title">{title}</h5>
			<Row gutter={30}>
				{formSet.map(itemSet => (
					<Col span={8} key={itemSet.name || Math.random()}>
						<GFormItem {...formItemProps} itemSet={itemSet} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default () => {
	const props = {
		formSet: [
			{
				type: "input",
				label: "用户名",
				name: "username"
			},
			{
				type: "password",
				label: "密码",
				name: "password"
			}
		],
		column: 1,
		style: { width: 400, margin: "0 auto" },
		defaultFooterBar: false,
		layout: "vertical",
		submitCall: values => {
			console.log(values);
		},
		toolBarRender: actionRef => (
			<Button
				style={{ width: "100%" }}
				type="primary"
				onClick={() => {
					actionRef.submit();
				}}
			>
				登录
			</Button>
		)
	};

	const noEmpty = [{ required: true }];
	const patternPhone = /^((13[0-9])|(14[1]|[4-9])|(15([0-3]|[5-9]))|(16[2]|[5-7])|(17[0-3]|[5-8])|(18[0-9])|(19[1|8|9]))\d{8}$/;
	const props2 = {
		formSet: [
			{
				type: "input",
				dataIndex: "id",
				title: "id",
				column: 0 // 占比列数为0，即可隐藏
			},
			{
				type: "input",
				label: "用户名",
				name: "username",
				validOptions: {
					rules: noEmpty
				}
			},
			{
				type: "input",
				label: "手机号",
				name: "mobile",
				validOptions: {
					rules: [
						...noEmpty,
						{ pattern: patternPhone, message: "请输入正确的手机号" }
					]
				}
			},
			{
				type: "input",
				label: "登录名称",
				name: "loginName",
				validOptions: {
					rules: noEmpty
				}
			},
			{
				type: "password",
				label: "登录密码",
				name: "password",
				validOptions: {
					rules: [
						...noEmpty,
						{ message: "请输入密码(6-20位)", min: 6, max: 20 }
					]
				}
			},
			{
				type: "radiogroup",
				label: "用户性别",
				name: "sex",
				optionsData: [
					{ label: "男", value: "1" },
					{ label: "女", value: "2" }
				],
				validOptions: {
					rules: noEmpty
				}
			},
			{
				type: "checkboxgroup",
				label: "角色",
				name: "role",
				optionsData: [
					{ label: "商户", value: "1" },
					{ label: "财务", value: "2" },
					{ label: "管理员", value: "3" }
				],
				validOptions: {
					rules: noEmpty
				}
			}
		],
		column: 1,
		style: { width: 500 },
		submitCall: values => {
			console.log(values);
		}
	};

	const props3 = {
		column: 1,
		style: { width: 500 },
		formSet: [
			{
				type: "custom",
				label: "数字区间",
				name: "numRange",
				renderChild: <NumRange precision={2} />,
				props: {
					onChange(v) {
						console.log(v);
					}
				}
			}
		],
		submitCall: values => {
			console.log(values);
		}
	};

	const [linkage, setLinkage] = useState(false);
	const formRef = useRef();
	const formSet = [
		{
			type: "switch",
			name: "switch",
			label: "营业(点击联动)",
			validOptions: {
				valuePropName: "checked"
			}
		},
		{
			type: "datepicker",
			name: "datepicker",
			label: "日期（必填非必填切换）",
			validOptions: {
				rules: [
					{
						required: linkage,
						message: "不能为空"
					}
				]
			}
		},
		{
			type: "textarea",
			name: "textarea2",
			label: "不营业原因（disabled效果）",
			validOptions: {
				rules: [
					{
						required: !linkage,
						message: "不能为空"
					}
				]
			},
			props: {
				disabled: linkage
			}
		},
		{
			type: "textarea",
			name: "textarea",
			label: "不营业原因（隐藏显示切换）",
			validOptions: {
				rules: [
					{
						required: !linkage,
						message: "不能为空"
					}
				]
			},
			column: linkage ? 0 : 1 // 联动隐藏
		}
	];

	const props4 = {
		column: 1,
		layout: "vertical",
		gutter: 20,
		formSet,
		initialValues: { switch: linkage },
		onValuesChange(changedValues, allValues) {
			if ("switch" in changedValues) {
				// 数据变化监听
				setLinkage(changedValues.switch);
			}
		},
		submitCall(values) {
			console.log(values);
		}
	};

	const props5 = {
		layout: "vertical",
		gutter: 20,
		formSet: complexForm,
		submitCall: values => {
			console.log(values);
		}
	};

	const props6 = {
		layout: "vertical",
		initialValues: {
			// 初始值
			status: 1
		},
		submitCall: values => {
			// 提交回调
			const { expirationTime, ...rest } = values;
			values = rest;
			values.startTime = expirationTime[0];
			values.endTime = expirationTime[1];
			merchantSave(values);
		},

		toolBarRender: () => (
			<>
				<Button
					type="link"
					size="large"
					className="mr10"
					onClick={history.goBack}
				>
					返回
				</Button>
			</>
		)
	};

	useEffect(() => {
		formRef.current.resetFields(); // 去除日期的错误提示信息
	}, [linkage]);

	return (
		<>
			<Title title="GForm 表单" />
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm {...props} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 基础表单"></MdPreviewer>
			<CodePreviewer code={CodeMd2} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm {...props2} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 自定义组件结合"></MdPreviewer>
			<MdPreviewer md="如果目前的组件类型无法满足，可以自定义组件结合，组件需配置 value、onChange"></MdPreviewer>
			<CodePreviewer code={CodeMd3} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm {...props3} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 输入项之间的联动"></MdPreviewer>
			<CodePreviewer code={CodeMd4} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm actionRef={formRef} {...props4} style={{ width: 500 }} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 组件类型所有示例"></MdPreviewer>
			<CodePreviewer code={CodeMd5} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm {...props5} />
				</div>
			</CodePreviewer>
			<MdPreviewer md="## 多表单组合"></MdPreviewer>
			<MdPreviewer md="有时候可能因为表单的样式问题，需要呈现卡片的感觉"></MdPreviewer>
			<CodePreviewer code={CodeMd6} showCode={false}>
				<div style={{ padding: 20 }}>
					<GForm {...props6}>
						<CardForm title="基础信息" formSet={basicInfoForm} />
						<CardForm title="公司信息" formSet={companyInfoForm} />
						<CardForm title="付款信息" formSet={payInfoForm} />
					</GForm>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</>
	);
};
