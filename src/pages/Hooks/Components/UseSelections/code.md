```jsx
import React from 'react';
import { Checkbox } from "antd";
import { useSelections } from '@tntd/hooks';

const list = [1, 2, 3, 4, 5, 6, 7, 8];

export default () => {
    const {
		selected,
		allSelected,
		isSelected,
		toggle,
		toggleAll
	} = useSelections(list, [1]);

  return (
    <div>
        <div>Selected : {selected.join(",")}</div>
        <div style={{ borderBottom: "1px solid #E9E9E9", padding: "10px 0" }}>
            <Checkbox
                checked={allSelected}
                onChange={toggleAll}
            >
                全选
            </Checkbox>
        </div>
        <div style={{ padding: "10px 0" }}>
            {list.map((o) => (
                <Checkbox
                    checked={isSelected(o)}
                    onChange={() => toggle(o)}
                >
                    {o}
                </Checkbox>
            ))}
        </div>
    </div>
  );
};
```