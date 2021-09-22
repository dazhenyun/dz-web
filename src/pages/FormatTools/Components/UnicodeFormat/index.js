/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Unicode格式化
 */

import React, { PureComponent } from "react";
import { Input, Button, message } from "antd";

const { TextArea } = Input;

class UnicodeFormat extends PureComponent {

	state = {
		text: "",
		result: ""
	}

	// 将汉字转为Unicode；
	toUnicode = (v) => {
		if (!v) return "";
		let str = "";
		for (let i = 0, len = v.length; i < len; i++) {
			str += "\\u" + parseInt(v[i].charCodeAt(0), 10).toString(16);
		}
		return str;
	}

	// 将Unicode转为汉字；
	toHanzi = (v) => {
		if (!v) return "";
		v = v.split("\\u");
		let str = "";
		for (let i = 0, len = v.length; i < len; i++) {
			if (v[i]) {
				str += String.fromCharCode(parseInt(v[i], 16).toString(10));
			}
		}
		return str;
	}

	// 复制内容到粘贴板
	copyToClip = (content) => {
		let aux = document.createElement("input");
		aux.setAttribute("value", content);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
	}

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	}

	changeCode(type) {
		const { text, result } = this.state;

		if (type === 1) { // 中文 转 Unicode
			this.setState({ result: this.toUnicode(text) });
		} else if (type === 2) { // Unicode 转 中文
			this.setState({ result: this.toHanzi(text) });
		} else if (type === 3) { // 复制完整结果
			if (!result) return message.warning("结果不能为空");
			this.copyToClip(result);
			message.success("复制成功");
		}
	}

	render() {
		const { text, result } = this.state;

		return (
			<div className="mt20">
				<TextArea
					rows={10}
					placeholder="请输入要转换的文本"
					value={text}
					onChange={this.handleChange}
				/>
				<div className="mt20 mb20">
					<Button type="primary" className="mr10" onClick={() => this.changeCode(1)}>
						中文 转 Unicode
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(2)}>
						Unicode 转 中文
					</Button>
					<Button type="primary" onClick={() => this.changeCode(3)}>
						复制完整结果
					</Button>
				</div>
				<TextArea
					rows={10}
					placeholder="转换之后的结果"
					value={result}
				/>
			</div>
		);
	}
}

export default UnicodeFormat;
