```jsx 
import React, { useState } from 'react';
import { Button } from "antd";
import { useEventListener } from '@tntd/hooks';

export default () => {
    const [value, setValue] = useState(0);

	const clickHandler = () => {
		setValue(value + 1);
	};

	const ref = useRef();
	useEventListener("click", clickHandler, { target: ref });

  return (
    <div>
        <Button ref={ref}>
            You click {value} times
        </Button>
    </div>
  );
};
```