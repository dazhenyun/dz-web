```jsx
import React from 'react';
import { Line } from '@dzv/charts';

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

export default () => <Line option={option} />;
```