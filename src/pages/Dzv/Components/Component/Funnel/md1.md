```jsx
import React from 'react';
import { Funnel } from '@dzv/charts';

const option = {
	legend: {
		data: ['展现', '点击', '访问', '咨询', '订单']
	},
	series: [
		{
			name: '网站情况',
			type: 'funnel',
			label: {
				show: true,
				position: 'inside'
			},
			data: [
				{ value: 100, name: '展现' },
				{ value: 80, name: '点击' },
				{ value: 60, name: '访问' },
				{ value: 40, name: '咨询' },
				{ value: 20, name: '订单' },
			]
		}
	]
};


export default () => <Funnel height={500} option={option} />;
```