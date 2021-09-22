/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 计算公式组件
 */

import "./index.less";
import { PureComponent } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";
import FormulaEdit from "@dzc/formula-edit";

class Formula extends PureComponent {
	state = {
		fieldList: [
			{ name: "放款金额", value: "fkje" },
			{ name: "实际放款金额", value: "sjfkje" },
			{ name: "借款人姓名", value: "jkrxm" },
			{ name: "借款人手机号", value: "jkrsjh" },
			{ name: "借款人身份证", value: "jkrsfz" }
		],
		methodList: [
			{ name: "平均值", value: "平均值(,)", realValue: "avg" },
			{ name: "最大值", value: "最大值(,)", realValue: "max" },
			{ name: "最小值", value: "最小值(,)", realValue: "min" },
			{ name: "求和", value: "求和(,)", realValue: "sum" }
		],
		normalList: [
			{ name: "且", value: "and" },
			{ name: "或", value: "or" }
		],
		defaultCode: "@实际放款金额 = #最大值(@放款金额, 100) 或 #求和(@实际放款金额, 200); "
	}

	getCode = (code, obj) => {
		console.log(code, obj);
	}

	handleBtn = (item) => {
		this.refs.formulaRef.insertValue(`#${item.value}`);
	}

	render() {
		const { fieldList, methodList, normalList, defaultCode } = this.state;

		return (
			<div>
				<Title
					title='计算公式编辑器'
					description="基于业务分离出的公式编辑器，支持自定义变量和方法的使用。"
				/>
				<MdPreviewer md={BaseMd}></MdPreviewer>
				<CodePreviewer code={CodeMd} showCode={false}>
					<div style={{ padding: "20px" }}>
						<FormulaEdit
							ref="formulaRef"
							theme="night" // 主题
							height={300} // 高度
							defaultValue={defaultCode} // 初始化值
							fieldList={fieldList} // @唤起
							methodList={methodList} // #唤起
							normalList={normalList} // 自定义无需校验关键词
							readOnly={false} // 是否只读
							lineNumber={true} // 是否显示列数
							onChange={this.getCode} // 回调
						>
							<div className="formula-tag">
								{
									methodList.map((item, index) => {
										return (
											<button
												key={index}
												onClick={() => this.handleBtn(item)}
											>
												{item.name}
											</button>
										);
									})
								}
							</div>
						</FormulaEdit>
					</div>
				</CodePreviewer>
				<MdPreviewer md={ApiMd}></MdPreviewer>
			</div>
		);
	}
}

export default Formula;
