```jsx
import React from 'react';
import { Button } from "antd";
import { useToggle } from '@tntd/hooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle("Hello", "World");

  return (
    <div>
		<p>Effects：{state}</p>
		<p>
			<Button onClick={() => toggle()}>Toggle</Button>
			<Button onClick={() => toggle("Hello")}>Toggle Hello</Button>
			<Button onClick={() => toggle("World")}>Toggle World</Button>
			<Button onClick={setLeft}>Set Hello</Button>
			<Button onClick={setRight}>Set World</Button>
		</p>
	</div>
  );
};
```