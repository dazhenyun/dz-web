```jsx
import React, { useState } from 'react';
import { message, Switch } from 'antd';
import { FileUpload } from '@dzo/com';

export default () => {
  const [value, setValue] = useState(
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png;https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png;http://www.baidu.com/xxx.csv;http:xxx1.png;http:xxx1.png',
  );
  const [disabled, setDisabled] = useState(false);

  const onChange = v => {
    setValue(v);
  };

  return (
    <>
      <div>
        disabled:
        <Switch value={disabled} onChange={checked => setDisabled(checked)} />
      </div>
      <br />
      <FileUpload
        value={value}
        maxLength={5}
        showUploadList={{ showDownloadIcon: true }}
        onChange={onChange}
        templateUrl={'111'}
        disabled={disabled}
      />
    </>
  );
};
```