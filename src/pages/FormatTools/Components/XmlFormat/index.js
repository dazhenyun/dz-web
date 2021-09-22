/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Xml格式化
 */

import { PureComponent } from "react";
import { Input, Button, message } from "antd";

const { TextArea } = Input;

class XmlFormat extends PureComponent {
	state = {
		text: null,
		result: null
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

	xmlToZip = () => {
		const { text } = this.state;
		let data = text;
		let resultData = "";

		resultData = data.replace(/\n[\s| | ]*\r/g, ""); // 去除多余空行
		resultData = data.replace(/[\r\n\t]/g, ""); // 去除回车换行、回车、换行
		resultData = data.replace(/\s+/g, " "); // 多个空格替换为一个空格
		return resultData;
	}

	// 计算头函数,用来缩进
	setPrefix(prefixIndex) {
		let result = "";
		let span = "    "; // 缩进长度
		let output = [];
		for (let i = 0; i < prefixIndex; ++i) {
			output.push(span);
		}
		result = output.join("");
		return result;
	}

	// 格式化xml代码
	toXML = (xmlStr) => {
		let text = xmlStr;

		// 使用replace去空格
		text = text.replace(/(<\w+)(\s.*?>)/g, ($0, name, props) => {
			return name + " " + props.replace(/\s+(\w+=)/g, " $1");
		}).replace(/>\s*?</g, ">\n<");
		// 处理注释
		text = text.replace(/\n/g, "\r").replace(/<!--(.+?)-->/g, ($0, text) => {
			let ret = "<!--" + escape(text) + "-->";
			return ret;
		}).replace(/\r/g, "\n");
		// 调整格式,以压栈方式递归调整缩进
		let rgx = /\n(<(([^\?]).+?)(?:\s|\s*?>|\s*?(\/)>)(?:.*?(?:(?:(\/)>)|(?:<(\/)\2>)))?)/mg;
		let nodeStack = [];
		let output = text.replace(rgx, ($0, all, name, isBegin, isCloseFull1, isCloseFull2, isFull1, isFull2) => {
			let isClosed = (isCloseFull1 === "/") || (isCloseFull2 === "/") || (isFull1 === "/") || (isFull2 === "/");
			let prefix = "";
			if (isBegin === "!") { // '!'开头
				prefix = this.setPrefix(nodeStack.length);
			} else {
				if (isBegin !== "/") { // '/' 开头
					prefix = this.setPrefix(nodeStack.length);
					if (!isClosed) { // 非关闭标签
						nodeStack.push(name);
					}
				} else {
					nodeStack.pop(); // 弹栈
					prefix = this.setPrefix(nodeStack.length);
				}
			}
			let ret = "\n" + prefix + all;
			return ret;
		});

		let outputText = output.substring(1);
		// 还原注释内容
		outputText = outputText.replace(/\n/g, "\r").replace(/(\s*)<!--(.+?)-->/g, ($0, prefix, text) => {
			if (prefix.charAt(0) === "\r") {
				prefix = prefix.substring(1);
			}
			text = unescape(text).replace(/\r/g, "\n");
			let ret = "\n" + prefix + "<!--" + text.replace(/^\s*/mg, prefix) + "-->";
			return ret;
		});
		outputText = outputText.replace(/\s+$/g, "").replace(/\r/g, "\r\n");
		return outputText;
	}

	changeCode(type) {
		const { text } = this.state;

		if (type === 1) { // 格式化Xml
			this.setState({ result: this.toXML(text) });
		} else if (type === 2) { // 压缩Xml
			this.setState({ result: this.xmlToZip(text) });
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
					placeholder="请输入要转换的XML文本"
					value={text}
					onChange={this.handleChange}
				/>
				<div className="mt20 mb20">
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

export default XmlFormat;
