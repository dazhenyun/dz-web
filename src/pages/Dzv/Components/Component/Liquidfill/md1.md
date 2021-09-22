```jsx
import React from 'react';
import { LiquidFill } from '@dzv/charts';

const option = {
	series: {
		data: [0.5, 0.4, 0.3]
	}
};

export default () => <LiquidFill option={option} />;
```