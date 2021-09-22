```jsx
import React from 'react';
import { Button } from "antd";
import { useInterval } from '@tntd/hooks';

export default () => {
    const [count, setCount] = useState(0);
	const [interval, setInterval] = useState(1000);

	useInterval(
		() => {
			setCount(count + 1);
		},
		interval,
		{ immediate: true },
	);

  return (
    <div>
        <p style={{ marginTop: 16 }}> count: {count} </p>
		<p style={{ marginTop: 16 }}> interval: {interval} </p>
		<Button onClick={() => setInterval(interval + 1000)}>interval + 1000</Button>
		<Button onClick={() => setInterval(1000)}>reset interval</Button>
		<Button onClick={() => setInterval(null)}>clear</Button>
    </div>
  );
};
```