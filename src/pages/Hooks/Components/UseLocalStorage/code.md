```jsx
import React from 'react';
import { Input, Button } from "antd";
import { useLocalStorage } from '@tntd/hooks';

export default () => {
  const [message, setMessage] = useLocalStorage("user-message", "Hello~");

  return (
    <div>
        <Input
			style={{ width: 200 }}
			value={message || ""}
			placeholder="Please enter some words..."
			onChange={(e) => setMessage(e.target.value)}
		/>
		<Button className="ml10 mr10" onClick={() => setMessage("Hello~")}>Reset</Button>
		<Button onClick={() => setMessage()}>Clear</Button>
    </div>
  );
};
```