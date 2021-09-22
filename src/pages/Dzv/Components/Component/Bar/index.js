/*
 * @CreatDate: 2021-09-22 19:29:05
 * @Describe: 柱状图
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { Bar } from "@dzv/charts";

import md1 from "./bar1.md";
import md2 from "./bar2.md";

const option1 = {
	title: {
		text: "贷款金额"
	},
	legend: {
		type: "scroll",
		data: ["申请金额", "实际放款金额"]
	},
	xAxis: {
		data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
	},
	yAxis: {
		name: "单位：万"
	},
	series: [
		{
			name: "申请金额",
			data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
			type: "bar",
			barMaxWidth: 20
		},
		{
			name: "实际放款金额",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "bar",
			barMaxWidth: 20
		}
	]
};

const option2 = {
	title: {
		text: "贷款金额"
	},
	legend: {
		type: "scroll",
		data: ["申请金额", "实际放款金额"]
	},
	xAxis: {
		data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
	},
	yAxis: {
		name: "单位：万"
	},
	series: [
		{
			name: "申请金额",
			data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
			type: "bar",
			barMaxWidth: 20,
			stack: "总量"
		},
		{
			name: "实际放款金额",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "bar",
			barMaxWidth: 20,
			stack: "总量"
		}
	]
};

class BarComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<h2>柱状图</h2>
				<CodePreviewer code={md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Bar theme={theme} option={option1} height={400} />
					</div>
				</CodePreviewer>
				<h2>堆叠图</h2>
				<CodePreviewer code={md2} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Bar theme={theme} option={option2} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default BarComponent;
