```jsx
import React from 'react';
import { Input } from "antd";
import { useThrottle } from '@tntd/hooks';

export default () => {
  const [value, setValue] = useState();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <div>
        <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Typed value"
            style={{ width: 280 }}
        />
        <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
    </div>
  );
};
```