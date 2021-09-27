```jsx
import React from 'react';
import { Ellipsis } from '@dzo/com';

export default props => {
  return (
    <>
      <h2>父级带宽度</h2>
      <div style={{ width: 100 }}>
        <Ellipsis placement="topLeft" title="你看我有省略号吗？" />
      </div>

      <h2>Tooltip和复制</h2>
      <Ellipsis copyable widthLimit={100} title="你看我有省略号吗？" />

      <h2>Popover和复制</h2>
      <Ellipsis
        Popover
        copyable
        widthLimit={100}
        content="你看我有省略号吗？"
      />

      <h2>多行省略</h2>
      <div style={{ width: 100 }}>
        <Ellipsis
          lines={2}
          title="你看我有省略号吗？你看我有省略号吗？你看我有省略号吗？"
        />
      </div>
    </>
  );
};
```