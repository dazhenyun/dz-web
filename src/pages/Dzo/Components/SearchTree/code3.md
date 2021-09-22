```jsx
import React, { useState } from 'react';
import { FolderOutlined, FileTextOutlined } from '@ant-design/icons';
import { SearchTree } from '@dzo/com';
import { Button } from 'antd';

const treeData = [
  {
    key: '1',
    title: '父文件1',
    children: [
      { key: '1-1', title: '子文件1' },
      { key: '1-2', title: '子文件2' },
    ],
  },
  {
    key: '2',
    title: '父文件2',
    children: [
      {
        key: '2-1',
        title: '子文件3',
        folder: true,
        children: [{ key: '2-1-1', title: '子文件5' }],
      },
      {
        key: '2-2',
        title: '子文件4',
      },
    ],
  },
];

export default () => {
  const [checkedKeys, setCheckedKeys] = useState([]);

  return (
    <>
      <SearchTree
        treeData={treeData}
        toolBarRender={({ clearCheckedKeys }) => (
          <SearchTree.TreeBreadCrumb
            title={`已选 ${checkedKeys?.length || ''}`}
            rightRender={() => (
              <a
                onClick={() => {
                  clearCheckedKeys();
                }}
              >
                清除
              </a>
            )}
          />
        )}
        checkedKeys={checkedKeys}
        onCheck={keys => {
          setCheckedKeys(keys);
        }}
        checkable
      />
      <Button
        type="primary"
        onClick={() => {
          console.log(checkedKeys);
        }}
      >
        保存
      </Button>
    </>
  );
};
```