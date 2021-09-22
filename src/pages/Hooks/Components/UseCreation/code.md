```jsx
import React, { useState } from 'react';
import { Button } from "antd";
import { useCreation } from '@tntd/hooks';

class Foo {
	constructor() {
		this.data = Math.random();
	}
}

export default () => {
    const foo = useCreation(() => new Foo(), []);
	const [, setFlag] = useState({});

    return (
        <div>
            <p>{foo.data}</p>
			<Button onClick={() => setFlag({})}>Rerender</Button>
        </div>
    );
};
```