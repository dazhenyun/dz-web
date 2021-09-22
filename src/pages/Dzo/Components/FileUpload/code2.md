```jsx
import React, { useState } from 'react';
import { message, Switch } from 'antd';
import { FileUpload } from '@dzo/com';

export default () => {
  const [value, setValue] = useState(
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
        acceptSuffix="jpeg,jpg,png"
        listType="picture-card"
        value={value}
        maxLength={5}
        showUploadList={{ showDownloadIcon: false }}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};
```