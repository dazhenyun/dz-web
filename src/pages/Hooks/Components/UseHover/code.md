```jsx
import React, { useRef } from 'react';
import { useHover } from '@tntd/hooks';

export default () => {
    const ref = useRef();
	const isHovering = useHover(ref);

    return (
        <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>
    );
};
```