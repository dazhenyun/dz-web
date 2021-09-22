/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Html格式化
 */

import { PureComponent } from "react";
import Parser from "./Parser";
import { Input, Button, message } from "antd";

const { TextArea } = Input;

class HtmlFormat extends PureComponent {
	state = {
		text: null,
		result: null
	}

	constructor(props) {
		super(props);
	}

	styleHtml(htmlSource, indentSize, indentChar, maxChar) {
		let multiParser = new Parser();

		multiParser.printer(htmlSource, indentChar, indentSize);
		while (true) {
			let t = multiParser.getToken();
			multiParser.tokenText = t[0];
			multiParser.tokenType = t[1];

			if (multiParser.tokenType === "TK_EOF") {
				break;
			}

			switch (multiParser.tokenType) {
				case "TK_TAG_START":
				case "TK_TAG_SCRIPT":
				case "TK_TAG_STYLE":
					multiParser.printNewline(false, multiParser.output);
					multiParser.printToken(multiParser.tokenText);
					multiParser.indent();
					multiParser.currentMode = "CONTENT";
					break;
				case "TK_TAG_END":
					multiParser.printNewline(true, multiParser.output);
					multiParser.printToken(multiParser.tokenText);
					multiParser.currentMode = "CONTENT";
					break;
				case "TK_TAG_SINGLE":
					multiParser.printNewline(false, multiParser.output);
					multiParser.printToken(multiParser.tokenText);
					multiParser.currentMode = "CONTENT";
					break;
				case "TK_CONTENT":
					if (multiParser.tokenText !== "") {
						multiParser.printNewline(false, multiParser.output);
						multiParser.printToken(multiParser.tokenText);
					}
					multiParser.currentMode = "TAG";
					break;
			}
			multiParser.lastToken = multiParser.tokenType;
			multiParser.lastText = multiParser.tokenText;
		}
		return multiParser.output.join("");
	}

	toHtml = () => {
		const { text } = this.state;
		let data = text;
		let resultData = "";

		let dataHolder = ["__dataHolder_", [Math.random(), Math.random(), Math.random(), Math.random()].join("_").replace(/[^0-9]/g, "_"), "_"].join("_");
		let dataHolders = {};
		let index = 0;
		data = data.replace(/(\")(data:[^\"]*)(\")/g, function ($0, $1, $2, $3) {
			let name = dataHolder + index++;
			dataHolders[name] = $2;
			return $1 + name + $3;
		});
		data = this.styleHtml(data, 1, "\t", 0x10000000);
		resultData = data.replace(new RegExp(dataHolder + "[0-9]+", "g"), function ($0) {
			return dataHolders[$0];
		});

		return resultData;
	}

	htmlToZip = () => {
		const { text } = this.state;
		let data = text;
		let resultData = "";

		resultData = data.replace(/\n[\s| | ]*\r/g, ""); // 去除多余空行
		resultData = data.replace(/[\r\n\t]/g, ""); // 去除回车换行、回车、换行
		resultData = data.replace(/\s+/g, " "); // 多个空格替换为一个空格
		return resultData;
	}

	handleChange = (e) => {
		this.setState({ text: e.target.value });
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

	changeCode(type) {
		const { text } = this.state;

		if (type === 1) { // 格式化HTML
			this.setState({ result: this.toHtml(text) });
		} else if (type === 2) { // 压缩HTML
			this.setState({ result: this.htmlToZip(text) });
		} else if (type === 3) { // 复制完整结果
			this.copyToClip();
			message.success("复制成功");
		}
	}

	render() {
		const { text, result } = this.state;

		return (
			<div className="mt20">
				<TextArea
					rows={10}
					placeholder="请输入要转换的HTML文本"
					value={text}
					onChange={this.handleChange}
				/>
				<div className="mt20 mb20">
					<Button type="primary" className="mr10" onClick={() => this.changeCode(1)}>
						格式化
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(2)}>
						压缩HTML
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

export default HtmlFormat;

