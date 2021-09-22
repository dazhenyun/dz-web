/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Icon图标
 */

import "./index.less";
import { PureComponent } from "react";
import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import { Input, message } from "antd";
import { Icon, iconList } from "tntd";
import Clipboard from "react-clipboard.js";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import ApiMd from "./api.md";
import CodeMd from "./code.md";

const { Search } = Input;

class Document extends PureComponent {

	state = {
		list: Object.assign([], iconList)
	}

	onSuccess = (str) => {
		message.success(`${str} copied`);
	}

	search(val) {
		let list = Object.assign([], iconList);
		list = list.filter(item => {
			return item.includes(val);
		});
		this.setState({ list });
	}

	render() {
		const { list } = this.state;

		return (
			<div className="m-icon">
				<Title
					title="Icon图标"
					description="语义化的矢量图形。"
				/>
				<MdPreviewer md={BaseMd}></MdPreviewer>
				<Search
					placeholder="在此搜索图标，点击图标可复制代码"
					onChange={e => this.search(e.target.value)}
					style={{ width: 300 }}
				/>
				<ul className="ul">
					{
						list.map((item, index) => {
							const str = `<Icon type="${item}" />`;
							return (
								<li key={index}>
									<Clipboard
										className="u-clipbord"
										data-clipboard-text={str}
										onSuccess={() => this.onSuccess(str)}
									>
										<Icon type={item} />
										<p>{item}</p>
									</Clipboard>
								</li>
							);
						})
					}
				</ul>
				<h2>代码演示</h2>
				<CodePreviewer code={CodeMd} showCode={false}>
					<div style={{ padding: "10px 20px" }}>
						<Icon type="flag-cn" />
					</div>
				</CodePreviewer>
				<MdPreviewer md={ApiMd}></MdPreviewer>
			</div>
		);
	}
}

export default Document;
