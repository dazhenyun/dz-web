```jsx
import React from 'react';
import { Button } from "antd";
import { useLocalStorage } from '@tntd/hooks';

const defaultArray = ["a", "e", "i", "o", "u"];

export default () => {
  const [value, setValue] = useLocalStorage("tdued", defaultArray);

  return (
    <div>
		<p>{value.join("-")}</p>
		<Button onClick={() => setValue([...value, Math.random().toString(36).slice(-1)])}>push random</Button>
		<Button className="ml10" onClick={() => setValue(defaultArray)}>reset</Button>
	</div>
  );
};
```