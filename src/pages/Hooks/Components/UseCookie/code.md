```jsx
import React, { useState } from 'react';
import { Button } from "antd";
import { useCookie } from '@tntd/hooks';

export default () => {
    const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
	const [counter, setCounter] = useState(1);

	const updateCookieHandler = () => {
		updateCookie(`my-awesome-cookie-${counter}`);
		setCounter(c => c + 1);
	};

    return (
        <div>
            <p>Value: {value}</p>
            <Button onClick={updateCookieHandler}>Update Cookie</Button>
            <br />
            <Button onClick={deleteCookie}>Delete Cookie</Button>
        </div>
    );
};
```