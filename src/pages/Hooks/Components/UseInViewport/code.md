```jsx
import React, { useRef } from 'react';
import { Button } from "antd";
import { useInViewport } from '@tntd/hooks';

export default () => {
    const ref = useRef();
	const inViewPort = useInViewport(ref);

    return (
        <div>
            <div ref={ref}>observer dom</div>
            <div style={{ marginTop: 70, color: inViewPort ? "#87d068" : "#f50" }}>
                {inViewPort ? "visible" : "hidden"}
            </div>
        </div>
    );
};
```