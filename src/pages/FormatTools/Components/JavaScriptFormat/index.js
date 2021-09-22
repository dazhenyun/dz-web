/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: javascript格式化
 */

import { PureComponent } from "react";
import { Button, message, Select } from "antd";
import Editor from "@/components/Editor";

const beautify_js = require("js-beautify").js_beautify;
const { Option } = Select;

class JavaScriptFormat extends PureComponent {

	state = {
		defaultCode: "if ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}",
		code: "",
		formatCode: "",
		newCode: "",
		indentSize: "1"
	}

	// 复制内容到粘贴板
	copyToClip = (content) => {
		let ele = document.createElement("textarea");
		ele.innerHTML = content;
		document.body.appendChild(ele);
		ele.select();
		document.execCommand("copy");
		document.body.removeChild(ele);
	}

	changeCode(type) {
		const { defaultCode, formatCode } = this.state;

		if (type === 1) { // 格式化
			this.setState({ formatCode: "" });
			setTimeout(() => {
				this.formatData();
			});
		} else if (type === 2) { // 示例
			this.setState({
				code: "",
				newCode: ""
			});
			setTimeout(() => {
				this.setState({
					code: defaultCode,
					newCode: defaultCode
				});
			});
		} else if (type === 3) { // 清空
			this.setState({ code: " " });
			setTimeout(() => {
				this.setState({
					code: "",
					formatCode: "",
					newCode: ""
				});
			});
		} else if (type === 4) { // 复制
			if (!formatCode) return message.warning("格式化代码不能为空");
			this.copyToClip(formatCode);
			message.success("复制成功");
		}
	}

	formatData = () => {
		const { newCode, indentSize } = this.state;
		const formatted = beautify_js(newCode, {
			indent_size: indentSize,
			indent_char: indentSize === "1" ? "\t" : " "
		});
		this.setState({ formatCode: formatted });
	}

	changeEditor = (code) => {
		this.setState({ newCode: code });
	}

	changeSelect = async (e) => {
		await this.setState({ indentSize: e });
		this.formatData();
	}

	render() {
		const { code, formatCode } = this.state;

		return (
			<div className="mt20">
				<Editor
					code={code}
					onChange={this.changeEditor}
				/>
				<div className="mt20 mb20">
					<Button type="primary" className="mr10" onClick={() => this.changeCode(1)}>
						格式化
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(2)}>
						JavaScript示例
					</Button>
					<Button className="mr10" onClick={() => this.changeCode(3)}>
						清空代码
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(4)}>
						复制代码
					</Button>
					<Select
						defaultValue="1"
						onChange={this.changeSelect}
					>
						<Option value="1">tab缩进</Option>
						<Option value="2">2格缩进</Option>
						<Option value="4">4格缩进</Option>
					</Select>
				</div>
				<Editor
					code={formatCode}
				/>
			</div>
		);
	}
}

export default JavaScriptFormat;
