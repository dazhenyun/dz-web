```jsx
import React from 'react';
import { Input } from "antd";
import { useDebounce } from '@tntd/hooks';

export default () => {
  const [value, setValue] = useState();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div>
        <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Typed value"
            style={{ width: 280 }}
        />
        <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};
```