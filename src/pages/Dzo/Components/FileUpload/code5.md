```jsx
import React, { useState } from 'react';
import { message, Switch } from 'antd';
import { FileUpload } from '@dzo/com';

export default () => {
  const [value, setValue] = useState('XXXX.csv');
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
        acceptSuffix=".csv,.xlsx"
        value={value}
        onChange={onChange}
        templateUrl={'http://xxx'}
        disabled={disabled}
        isNRT
      />
    </>
  );
};
```