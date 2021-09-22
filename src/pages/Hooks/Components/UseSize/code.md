```jsx
import React from 'react';
import { useSize } from '@tntd/hooks';

export default () => {
    const ref = useRef();
	const size = useSize(ref);

    return (
        <div ref={ref}>
            try to resize the preview window <br />
            dimensions -- width: {size.width} px, height: {size.height} px
        </div>
    );
};
```