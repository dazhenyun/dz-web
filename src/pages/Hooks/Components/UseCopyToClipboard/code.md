```jsx
import React, { useState } from 'react';
import { Button, Input } from "antd";
import { useCopyToClipboard } from '@tntd/hooks';

export default () => {
    const [text, setText] = useState("");
	const [state, copyToClipboard] = useCopyToClipboard();

    return (
        <div>
            <Input
                style={{ width: 300 }}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button className="ml10 mb10" onClick={() => copyToClipboard(text)}>copy text</Button>
            {state.error
                ? <p>Unable to copy value: {state.error.message}</p>
                : state.value && <p>Copied {state.value}</p>}
        </div>
    );
};
```