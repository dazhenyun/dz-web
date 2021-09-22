```jsx
import React, { useState } from 'react';
import { useEventListener } from '@tntd/hooks';

export default () => {
  	const [value, setValue] = useState("");

	const keyDownHandler = (ev) => {
		setValue(ev.code);
	};
	useEventListener("keydown", keyDownHandler);

  	return (
		<div>
			Your press key is {value}
		</div>
	);
};
```