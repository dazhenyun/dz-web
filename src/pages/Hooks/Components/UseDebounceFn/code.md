```jsx
import React from 'react';
import { Button } from "antd";
import { useDebounceFn } from '@tntd/hooks';

export default () => {
  	const [value, setValue] = useState(0);
	const { run } = useDebounceFn(
		() => {
			setValue(value + 1);
		},
		{
			wait: 500
		},
	);

	return (
		<div>
			<p style={{ marginTop: 16 }}> Clicked count: {value} </p>
			<Button onClick={run}>Click fast!</Button>
		</div>
	);
};
```