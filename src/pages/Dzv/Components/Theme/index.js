/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 主题
 */

import "./index.less";
import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import IndexMd from "./index.md";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import copy from "copy-to-clipboard";

const imgList = [
	{ url: require("./img/vintage.png"), name: "vintage" },
	{ url: require("./img/dark.png"), name: "dark" },
	{ url: require("./img/macarons.png"), name: "macarons" },
	{ url: require("./img/infographic.png"), name: "infographic" },
	{ url: require("./img/shine.png"), name: "shine" },
	{ url: require("./img/roma.png"), name: "roma" }
];

class Theme extends PureComponent {

	copyCliboard(name) {
		const str = `import "@dzv/charts/lib/Theme/${name}";`;
		if (copy(str)) {
			message.success(`${str} copied`);
		}
	}

	render() {

		return (
			<div className="charts-theme">
				<MdPreviewer md={IndexMd} />
				<ul className="clearfix">
					{
						imgList.map((item, index) => {
							return (
								<li key={index}>
									<img src={item.url} onClick={() => this.copyCliboard(item.name)} />
									{item.name}
								</li>
							);
						})
					}
				</ul>
				<Button
					type="primary"
					className="btn"
					size="large"
					onClick={() => {
						window.open("https://echarts.apache.org/zh/theme-builder.html");
					}}
				>
					定制主题
					<ArrowRightOutlined />
				</Button>
			</div>
		);
	}
}

export default Theme;
