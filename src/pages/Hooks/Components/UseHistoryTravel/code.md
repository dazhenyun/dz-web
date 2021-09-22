```jsx
import React from 'react';
import { Button, Input } from "antd";
import { useHistoryTravel } from '@tntd/hooks';

export default () => {
    const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel([
		"do homework"
	]);

	const [inputValue, setInputValue] = useState("");

	const onAdd = () => {
		setValue([...value, inputValue]);
		setInputValue("");
	};

  return (
    <div>
        <div style={{ border: "1px solid #607D8B", padding: 16, margin: "16px 0" }}>
            <h3>TODO List</h3>
            <ul>
                {value.map((it, index) => (
                    <li key={index}>{it}</li>
                ))}
            </ul>
        </div>
        <div>
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Please enter TODO name"
                style={{ width: 200, marginRight: 20 }}
            />
            <Button onClick={onAdd}>Add TODO</Button>
            <Button className="ml10 mr10" disabled={backLength <= 0} onClick={back}>Undo</Button>
            <Button disabled={forwardLength <= 0} onClick={forward}>Redo</Button>
        </div>
    </div>
  );
};
```