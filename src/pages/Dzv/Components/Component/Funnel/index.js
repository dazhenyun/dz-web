/*
 * @CreatDate: 2021-09-22 19:48:03
 * @Describe: 漏斗图
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { Funnel } from "@dzv/charts";

import md1 from "./md1.md";

const option1 = {
	legend: {
		data: ["展现", "点击", "访问", "咨询", "订单"]
	},
	series: [
		{
			name: "网站情况",
			type: "funnel",
			label: {
				show: true,
				position: "inside"
			},
			data: [
				{ value: 100, name: "展现" },
				{ value: 80, name: "点击" },
				{ value: 60, name: "访问" },
				{ value: 40, name: "咨询" },
				{ value: 20, name: "订单" }
			]
		}
	]
};

class FunnelComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<h2>漏斗图</h2>
				<CodePreviewer code={md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Funnel theme={theme} option={option1} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default FunnelComponent;
