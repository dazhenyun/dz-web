```jsx
import React from 'react';
import { useMouse } from '@tntd/hooks';

export default () => {
    const mouse = useMouse();

    return (
        <div>
            Mouse Pos: {JSON.stringify(mouse)}
        </div>
    );
};
```