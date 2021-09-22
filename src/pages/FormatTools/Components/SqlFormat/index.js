/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Sql格式化
 */

import { PureComponent } from "react";
import sqlFormatter from "sql-formatter";
import { Input, Button, message, Select } from "antd";

const { TextArea } = Input;
const Option = Select.Option;

class SqlFormat extends PureComponent {
	state = {
		text: null,
		result: null,
		language: "sql"
	}

	// 复制内容到粘贴板
	copyToClip = () => {
		let sourceData = document.getElementsByClassName("ant-input")[1].innerHTML;
		let ele = document.createElement("textarea");
		ele.innerHTML = sourceData;
		document.body.appendChild(ele);
		ele.select();
		document.execCommand("copy");
		document.body.removeChild(ele);
	}

	toSql = () => {
		const { text, language } = this.state;

		let result = sqlFormatter.format(text, { language: language });
		return result;
	}

	sqlToZip = () => {
		const { text } = this.state;
		let data = text;
		let resultData = "";

		resultData = data.replace(/\n[\s| | ]*\r/g, ""); // 去除多余空行
		resultData = data.replace(/[\r\n\t]/g, ""); // 去除回车换行、回车、换行
		resultData = data.replace(/\s+/g, " "); // 多个空格替换为一个空格
		return resultData;
	}

	changeCode(type) {
		const { text } = this.state;

		if (type === 1) { // 格式化Sql
			this.setState({ result: this.toSql(text) });
		} else if (type === 2) { // 压缩Sql
			this.setState({ result: this.sqlToZip(text) });
		} else if (type === 3) { // 复制完整结果
			this.copyToClip();
			message.success("复制成功");
		}
	}

	render() {
		const { text, result, language } = this.state;

		return (
			<div className="mt20">
				<TextArea
					rows={10}
					placeholder="请输入要转换的SQL"
					value={text}
					onChange={e => this.setState({ text: e.target.value })}
				/>
				<div className="mt20 mb20">
					<Select
						style={{ width: 100, marginRight: 10 }}
						value={language}
						onChange={value => this.setState({ language: value })}
					>
						<Option value="sql">sql</Option>
						<Option value="n1ql">n1ql</Option>
						<Option value="db2">db2</Option>
						<Option value="pl/sql">pl/sql</Option>
					</Select>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(1)}>
						格式化
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(2)}>
						压缩XML
					</Button>
					<Button type="primary" onClick={() => this.changeCode(3)}>
						复制完整结果
					</Button>
				</div>
				<TextArea
					rows={10}
					value={result}
					placeholder="转换之后的结果"
				/>
			</div>
		);
	}
}

export default SqlFormat;
