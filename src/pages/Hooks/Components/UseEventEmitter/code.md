```jsx
import React, { useRef } from 'react';
import { Button, Input } from "antd";
import { useEventEmitter } from '@tntd/hooks';

const MessageBox = (props) => {
	return (
		<div style={{ paddingBottom: 24 }}>
			<p>You received a message</p>
			<Button onClick={() => props.focus$.emit()}>Reply</Button>
		</div>
	);
};

const InputBox = (props) => {
	const inputRef = useRef();
	props.focus$.useSubscription(() => {
		inputRef.current.focus();
	});
	return (
		<Input ref={inputRef} placeholder="Enter reply" style={{ width: "100%", padding: "4px" }} />
	);
};

export default () => {
    const focus$ = useEventEmitter();

    return (
        <div>
            <MessageBox focus$={focus$} />
			<InputBox focus$={focus$} />
        </div>
    );
};
```