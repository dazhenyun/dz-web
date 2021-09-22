```jsx
import React from 'react';
import { useHover } from '@tntd/hooks';

export default () => {
    const isHovering = useHover(() => document.getElementById("hover-div"), {
		onEnter: () => {
			console.log("onEnter");
		},
		onLeave: () => {
			console.log("onLeave");
		}
	});

    return (
        <div id="hover-div">{isHovering ? "hover" : "leaveHover"}</div>
    );
};
```