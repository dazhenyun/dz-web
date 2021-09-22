```jsx
import React from 'react';
import { Button } from "antd";
import { useTitle } from '@tntd/hooks';

export default () => {
  useTitle("hello world", { restoreOnUnmount: true });

  return (
    <div>
        设置页面标题为：hello world
    </div>
  );
};
```