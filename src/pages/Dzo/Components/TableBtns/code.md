```jsx
import React from 'react';
import { message } from 'antd';
import { TableBtns } from '@dzo/com';

const buttons = [
  {
    name: '编辑',
    method: () => {
      message.success('设置点击事件');
    },
  },
  {
    type: 'confirm',
    name: '删除',
    method: () => {
      message.success('删除点击事件');
    },
  },
  {
    type: 'download',
    name: '下载',
    fileName: 'test.csv',
    pathname: 'http://www.baidu.com',
  },
  {
    type: 'link',
    name: '链接',
    pathname: 'http://www.baidu.com',
  },
  {
    type: 'status',
    status: 1, // 默认0 1 切换
    textEnum: { 1: '授权', 0: '取消授权' },
    method: v => {
      console.log(v);
    },
  },
  {
    type: 'more',
    children: [
      {
        name: '编辑1',
        method: () => {
          message.success('设置点击事件');
        },
      },
      {
        type: 'confirm',
        name: '删除1',
        method: () => {
          message.success('删除点击事件');
        },
      },
      {
        type: 'download',
        name: '下载1',
        auth: false,
        fileName: 'test.csv',
        pathname: 'http://www.baidu.com',
      },
      {
        type: 'link',
        name: '链接1',
        pathname: 'http://www.baidu.com',
      },
      {
        type: 'status',
        status: 1, // 默认0 1 切换
        method: v => {
          console.log(v);
        },
      },
    ],
  },
];
export default () => <TableBtns buttons={buttons} />;
```