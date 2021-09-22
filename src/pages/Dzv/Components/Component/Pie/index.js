/*
 * @CreatDate: 2021-09-22 19:40:02
 * @Describe: 饼图
 */

import { PureComponent } from "react";
import { CodePreviewer } from "react-markdown-previewer";
import { Pie } from "@dzv/charts";

import md1 from "./pie1.md";
import md2 from "./pie2.md";

const option1 = {
	legend: {
		data: ["需求阶段", "开发阶段", "验证阶段", "审批阶段", "投产阶段", "下线归档", "未知"]
	},
	series: {
		name: "各阶段模型统计",
		data: [
			{ value: 100, name: "需求阶段" },
			{ value: 50, name: "开发阶段" },
			{ value: 40, name: "验证阶段" },
			{ value: 30, name: "审批阶段" },
			{ value: 100, name: "投产阶段" },
			{ value: 20, name: "下线归档" },
			{ value: 10, name: "未知" }
		]
	}
};

const option2 = {
	title: { // 中间显示的数据
		text: "模型统计",
		left: "50%",
		top: "41%",
		textAlign: "center",
		textStyle: {
			color: "#8B94AB",
			fontSize: 18,
			fontWeight: "normal"
		}
	},
	legend: {
		data: ["需求阶段", "开发阶段", "验证阶段", "审批阶段", "投产阶段", "下线归档", "未知"]
	},
	series: { // 最外层环的数据
		name: "各阶段模型统计",
		type: "pie",
		center: ["50%", "45%"],
		radius: ["45%", "58%"],
		data: [
			{ value: 100, name: "需求阶段" },
			{ value: 50, name: "开发阶段" },
			{ value: 40, name: "验证阶段" },
			{ value: 30, name: "审批阶段" },
			{ value: 100, name: "投产阶段" },
			{ value: 20, name: "下线归档" },
			{ value: 10, name: "未知" }
		]
	}
};

class PieComponent extends PureComponent {

	render() {
		const { theme } = this.props;

		return (
			<>
				<h2>饼图</h2>
				<CodePreviewer code={md1} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Pie theme={theme} option={option1} height={400} />
					</div>
				</CodePreviewer>
				<h2>环图</h2>
				<CodePreviewer code={md2} showCode={false}>
					<div style={{ padding: "20px" }}>
						<Pie theme={theme} option={option2} height={400} />
					</div>
				</CodePreviewer>
			</>
		);
	}
}

export default PieComponent;
