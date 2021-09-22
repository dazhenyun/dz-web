```jsx
import React, { useRef } from 'react';
import { Button } from "antd";
import { useFullscreen } from '@tntd/hooks';

export default () => {
    const ref = useRef();
	const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(ref);

    return (
        <div ref={ref} style={{ background: "white" }}>
            <div style={{ marginBottom: 16 }}>{isFullscreen ? "Fullscreen" : "Not fullscreen"}</div>
            <div>
                <Button onClick={setFull}>setFull</Button>
                <Button onClick={exitFull}>exitFull</Button>
                <Button onClick={toggleFull}>toggle</Button>
            </div>
        </div>
    );
};
```