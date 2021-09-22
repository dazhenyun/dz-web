/*
 * @CreatDate: 2021-09-22 19:44:37
 * @Describe: 雷达图
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { Radar } from "@dzv/charts";

import md1 from "./md1.md";

const option1 = {
	legend: {
		data: ["预算分配", "实际开销"]
	},
	radar: {
		indicator: [
			{ name: "销售", max: 6500 },
			{ name: "管理", max: 16000 },
			{ name: "信息技术", max: 30000 },
			{ name: "客服", max: 38000 },
			{ name: "研发", max: 52000 },
			{ name: "市场", max: 25000 }
		]
	},
	series: [{
		name: "预算 vs 开销",
		type: "radar",
		data: [
			{
				value: [4300, 10000, 28000, 35000, 50000, 19000],
				name: "预算分配"
			},
			{
				value: [5000, 14000, 28000, 31000, 42000, 21000],
				name: "实际开销"
			}
		]
	}]
};

class RadarComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<h2>雷达图</h2>
				<CodePreviewer code={md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Radar theme={theme} option={option1} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default RadarComponent;
