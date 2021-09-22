/*
 * @CreatDate: 2021-09-22 19:35:58
 * @Describe: 折柱图
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { LineBar } from "@dzv/charts";

import md1 from "./lineBar1.md";

const option = {
	color: ["#07C790", "#EF6555", "#F7B035", "#2196F3"],
	legend: {
		data: ["通过", "拒绝", "人工审核率", "核查率"]
	},
	xAxis: {
		data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
	},
	yAxis: [
		{
			name: "单位：笔数"
		},
		{
			name: "单位：%"
		}
	],
	series: [
		{
			name: "通过",
			data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
			type: "bar",
			barMaxWidth: 20
		},
		{
			name: "拒绝",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "bar",
			barMaxWidth: 20
		},
		{
			name: "人工审核率",
			data: [12, 42, 28, 14, 40, 50, 45, 50, 50, 60],
			type: "line",
			smooth: true,
			yAxisIndex: 1
		},
		{
			name: "核查率",
			data: [5, 32, 20, 8, 32, 41, 34, 40, 35, 50],
			type: "line",
			smooth: true,
			yAxisIndex: 1
		}
	]
};

class LineBarComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<h2>折柱图</h2>
				<CodePreviewer code={md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<LineBar theme={theme} option={option} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default LineBarComponent;
