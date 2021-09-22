```jsx
import React, { useState } from 'react';
import { NumRange } from '@dzo/com';

export default () => {
  const [value, setValue] = useState(null);
  
  return (
    <NumRange
      value={value}
      style={{ width: 500 }}
      onChange={v => {
        setValue(v);
      }}
    />
  );
};
```