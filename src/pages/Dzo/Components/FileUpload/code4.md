```jsx
import React, { useState } from 'react';
import { message, Switch } from 'antd';
import { FileUpload } from '@dzo/com';

export default () => {
  const [value, setValue] = useState([
    {
      fileId: 1,
      fileName: 'text1.csv',
      fileUrl: '/*',
      recordCount: 100,
    },
    {
      fileId: 2,
      fileName: 'text2.csv',
      fileUrl: '/*',
      recordCount: 1000,
    },
  ]);
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
        isArrayType
        acceptSuffix="csv,xlsx"
        value={value}
        maxLength={5}
        showUploadList={{ showDownloadIcon: true }}
        onChange={onChange}
        templateUrl={'http://xxx'}
        disabled={disabled}
        modelKeys={{
          urlKey: 'fileUrl',
          idKey: 'fileId',
          nameKey: 'fileName',
        }}
        nameRender={file => (
          <span>
            {file.fileName}&nbsp;&nbsp;记录数：{file.recordCount}
          </span>
        )}
        onDownload={file => {
          console.log(file);
          message.success('下载成功');
        }}
        multiple
      />
    </>
  );
};
```