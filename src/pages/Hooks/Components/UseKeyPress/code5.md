```jsx
import React, { useState, useRef } from 'react';
import { Input } from "antd";
import { useKeyPress } from '@tntd/hooks';

export default () => {
    const [text, setText] = useState("");

	useKeyPress(
		"enter",
		(event) => {
			const { value } = event.target;
			setText(value);
		},
		{
			events: ["keyup"],
			target: () => document.getElementById("input")
		},
	);

    return (
        <div>
            <p>Input and pressing enter: {text}</p>
			<Input id="input" style={{ width: 300 }} />
        </div>
    );
};
```