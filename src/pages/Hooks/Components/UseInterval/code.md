```jsx
import React from 'react';
import { useInterval } from '@tntd/hooks';

export default () => {
    const [count, setCount] = useState(0);

	useInterval(() => {
		setCount(count + 1);
	}, 1000);

  return (
    <div>
        <p> count: {count} </p>
    </div>
  );
};
```