```jsx
import React from 'react';
import { Button } from 'antd';
import { GForm } from '@dzo/com';

export default () => {
  const noEmpty = [{ required: true }];
  const patternPhone = /^((13[0-9])|(14[1]|[4-9])|(15([0-3]|[5-9]))|(16[2]|[5-7])|(17[0-3]|[5-8])|(18[0-9])|(19[1|8|9]))\d{8}$/;

  const props = {
    formSet: [
      {
        type: 'input',
        dataIndex: 'id',
        title: 'id',
        column: 0, // 占比列数为0，即可隐藏
      },
      {
        type: 'input',
        label: '用户名',
        name: 'username',
        validOptions: {
          rules: noEmpty,
        },
      },
      {
        type: 'input',
        label: '手机号',
        name: 'mobile',
        validOptions: {
          rules: [
            ...noEmpty,
            { pattern: patternPhone, message: '请输入正确的手机号' },
          ],
        },
      },
      {
        type: 'input',
        label: '登录名称',
        name: 'loginName',
        validOptions: {
          rules: noEmpty,
        },
      },
      {
        type: 'password',
        label: '登录密码',
        name: 'password',
        validOptions: {
          rules: [
            ...noEmpty,
            { message: '请输入密码(6-20位)', min: 6, max: 20 },
          ],
        },
      },
      {
        type: 'radiogroup',
        label: '用户性别',
        name: 'sex',
        optionsData: [
          { label: '男', value: '1' },
          { label: '女', value: '2' },
        ],
        validOptions: {
          rules: noEmpty,
        },
      },
      {
        type: 'checkboxgroup',
        label: '角色',
        name: 'role',
        optionsData: [
          { label: '商户', value: '1' },
          { label: '财务', value: '2' },
          { label: '管理员', value: '3' },
        ],
        validOptions: {
          rules: noEmpty,
        },
      },
    ],
    column: 1,
    style: { width: 500 },
    submitCall: values => {
      console.log(values);
    },
  };
  return <GForm {...props} />;
};
```