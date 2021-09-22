```jsx
import React, { useState } from 'react';
import { useKeyPress } from '@tntd/hooks';

export default () => {
    const [num, setNum] = useState();
	const [key, setKey] = useState();
	const [state, setState] = useState();
	const filterKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	useKeyPress(filterKey, (event) => {
		setNum(event.key);
	});

	// a s d f, Backspace, 8
	useKeyPress([65, 83, 68, 70, 8, "8"], (event) => {
		setKey(event.key);
	});

	useKeyPress(["shift.c"], () => {
		setState(1);
	});

	useKeyPress("ctrl.c", () => {
		setState(3);
	});

	useKeyPress("meta.c", () => {
		setState(4);
	});

	useKeyPress(["ctrl.v", "meta.v"], () => {
		setState(5);
	});

    return (
        <div>
            <p>Try pressing the following: </p>
			<div>
				1. Number key [0-9]: <span style={{ color: "#f00" }}>{num}</span>
			</div>
			<div>
				2. Press key [a, s, d, f, Backspace, 8]: <span style={{ color: "#f00" }}>{key}</span>
			</div>
			<div>
				3. Modifier key [shift.c]: {state === 1 && <span style={{ color: "#f00" }}>ok</span>}
			</div>
			<div>
				4. Modifier key [ctrl.c]:{" "}
				{state === 3 && <span style={{ color: "#f00" }}>ok</span>}
			</div>
			<div>
				5. Modifier key [meta.c]:{" "}
				{state === 4 && <span style={{ color: "#f00" }}>ok</span>}
			</div>
			<div>
				6. Modifier key [ctrl.v, meta.v]:{" "}
				{state === 5 && <span style={{ color: "#f00" }}>ok</span>}
			</div>
        </div>
    );
};
```