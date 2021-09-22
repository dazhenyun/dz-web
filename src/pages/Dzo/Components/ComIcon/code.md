```jsx
import React, { useEffect } from 'react';
import { ComIcon } from '@dzo/com';
import { message } from 'antd';

export default () => {
  useEffect(() => {
    // 引入官方iconfont的Symbol的js文件，如果在项目中，可以放在html script标签引入一次即可
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//at.alicdn.com/t/font_1867423_9ry0ntx1gbk.js';
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <ComIcon
        type="syncPeople"
        onClick={() => {
          message.success('你好');
        }}
      />
      <ComIcon type="fuzhi" style={{ marginLeft: 10, color: 'red' }} />
    </>
  );
};
```