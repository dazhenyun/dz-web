```jsx
import React from 'react';
import { Pie } from '@dzv/charts';

const option = {
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

export default () => <Pie option={option} />;
```