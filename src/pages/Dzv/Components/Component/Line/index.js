/*
 * @CreatDate: 2021-09-22 19:18:59
 * @Describe: 折线图
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { Line } from "@dzv/charts";

import Md1 from "./line1.md";
import Md2 from "./line2.md";

const option = {
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
			type: "line",
			smooth: true
		},
		{
			name: "实际放款金额",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "line",
			smooth: true
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
			type: "line",
			smooth: true,
			stack: "总量",
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0, color: "#5B8FF9" // 0% 处的颜色
					}, {
						offset: 1, color: "#fff" // 100% 处的颜色
					}],
					global: false // 缺省为 false
				}
			}
		},
		{
			name: "实际放款金额",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "line",
			smooth: true,
			stack: "总量",
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0, color: "#5AD8A6" // 0% 处的颜色
					}, {
						offset: 1, color: "#fff" // 100% 处的颜色
					}],
					global: false // 缺省为 false
				}
			}
		}
	]
};

class LineComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<h2>折线图</h2>
				<CodePreviewer code={Md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Line theme={theme} option={option} height={400} />
					</div>
				</CodePreviewer>
				<h2>面积图</h2>
				<CodePreviewer code={Md2} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Line theme={theme} option={option2} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default LineComponent;
