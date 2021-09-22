/*
 * @CreatDate: 2020-03-34 23:47:52
 * @Describe: json格式化
 */

import { PureComponent } from "react";
import { Button, message } from "antd";
import JSONEditor from "@/components/Editor/Json";

class JsonFormat extends PureComponent {
	state = {
		defaultCode: "{\"name\":\"张三\",\"age\":18,\"bobby\":\"eat\",\"abc\":[1,2,3,4,5,6]}",
		code: "",
		formatCode: "",
		newCode: ""
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
			this.setState({ formatCode: "" }, () => {
				this.formatData();
			});
		} else if (type === 2) { // 示例
			this.setState({
				code: "",
				newCode: ""
			}, () => {
				this.setState({
					code: defaultCode,
					newCode: defaultCode
				});
			});
		} else if (type === 3) { // 清空
			this.setState({ code: " " }, () => {
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
		let { newCode } = this.state;
		try {
			newCode = JSON.stringify(JSON.parse(newCode), null, 4).toString();
			newCode = newCode.replace(/\[{/g, "[\r\n{");
			newCode = newCode.replace(/\}]/g, "}\r\n]");
		} catch {}

		console.log(newCode);
		this.setState({ formatCode: newCode });
	}

	changeEditor = (code) => {
		this.setState({ newCode: code });
	}

	render() {
		const { code, formatCode } = this.state;

		return (
			<div className="mt20">
				<JSONEditor
					code={code}
					onChange={this.changeEditor}
				/>
				<div className="mt20 mb20">
					<Button type="primary" className="mr10" onClick={() => this.changeCode(1)}>
						格式化
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(2)}>
						Json示例
					</Button>
					<Button className="mr10" onClick={() => this.changeCode(3)}>
						清空代码
					</Button>
					<Button type="primary" className="mr10" onClick={() => this.changeCode(4)}>
						复制代码
					</Button>
				</div>
				<JSONEditor
					code={formatCode}
				/>
			</div>
		);
	}
}

export default JsonFormat;
