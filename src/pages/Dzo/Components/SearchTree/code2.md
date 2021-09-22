```jsx
import React, { useState, useRef } from 'react';
import {
  FolderOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Tooltip, Menu, Modal, message } from 'antd';
import { SearchTree } from '@dzo/com';

const { TreeBreadCrumb } = SearchTree;

const treeData = [
  {
    key: '1',
    title: '文件夹1',
    folder: true, // 这个数据需要在传入之前组装好
    children: [
      { key: '1-1', title: '子文件1' },
      { key: '1-2', title: '子文件2' },
      { key: '1-3', title: '子文件3' },
      { key: '1-4', title: '子文件4' },
      { key: '1-5', title: '子文件5' },
    ],
  },
  {
    key: '2',
    title: '文件夹2',
    folder: true,
    children: [
      {
        key: '2-1',
        title: '子文件夹',
        folder: true,
        children: [{ key: '2-1-1', title: '子文件1' }],
      },
      {
        key: '2-2',
        title: '子文件2',
      },
    ],
  },
  {
    key: '3',
    title: '文件夹333333333333333',
    folder: true,
    children: [],
  },
];

export default () => {
  const [selectedKeys, setSelectedKeys] = useState(['2-1-1']);
  return (
    <SearchTree
        toolBarRender={() => (
          <TreeBreadCrumb
            title="我是标题"
            rightRender={() => (
              <Tooltip title="新建文件夹">
                <PlusCircleOutlined />
              </Tooltip>
            )}
          />
        )}
        selectedKeys={selectedKeys}
        treeData={treeData}
        iconRender={(item, isExpand) =>
          item.folder ? (
            isExpand ? (
              <FolderOpenOutlined />
            ) : (
              <FolderOutlined />
            )
          ) : (
            <FileTextOutlined />
          )
        }
        onSelect={(keys, item) => {
          if (!item.folder) {
            setSelectedKeys([item.key]);
          }
        }}
        onRightClickRender={({ item, clearRightClickRender, setRenameKey }) => {
          return [
            {
              key: 'add',
              name: '新增',
              onClick: () => {
                Modal.confirm({
                  content: `新增`,
                });
              },
            },
            {
              key: 'del',
              name: '删除',
              onClick: () => {
                Modal.confirm({
                  content: `确认删除${item?.title}？`,
                });
              },
            },
            {
              key: 'rename',
              name: '重命名',
              onClick: () => {
                setRenameKey(item.key);
              },
            },
          ];
        }}
        onRename={(v, item, clearRename) => {
          message.success('重命名修改成功');
          clearRename();
        }}
      />
  );
};
```