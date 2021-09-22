```jsx
import React from 'react';
import { Button, Row, Col } from 'antd';
import { GForm, GFormItem } from '@dzo/com';
import { basicInfoForm, companyInfoForm, payInfoForm } from './FormGroupsMap';
import './index.less';

const CardForm = ({ title, formSet }) => {
  const formItemProps = {
    column: 3,
    layout: 'vertical',
  };

  return (
    <div className="card-box">
      <h5 className="chapter-title">{title}</h5>
      <Row gutter={30}>
        {formSet.map(itemSet => (
          <Col span={8} key={itemSet.name || Math.random()}>
            <GFormItem {...formItemProps} itemSet={itemSet} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const FormGroups = () => {
  const formProps = {
    layout: 'vertical',
    initialValues: {
      // 初始值
      status: 1,
    },
    submitCall: values => {
      // 提交回调
      const { expirationTime, ...rest } = values;
      values = rest;
      values.startTime = expirationTime[0];
      values.endTime = expirationTime[1];
      merchantSave(values);
    },

    toolBarRender: () => (
      <>
        <Button
          type="link"
          size="large"
          className="mr10"
          onClick={history.goBack}
        >
          返回
        </Button>
      </>
    ),
  };

  return (
    <div className="gray-bg">
      <GForm {...formProps}>
        <CardForm title="基础信息" formSet={basicInfoForm} />
        <CardForm title="公司信息" formSet={companyInfoForm} />
        <CardForm title="付款信息" formSet={payInfoForm} />
      </GForm>
    </div>
  );
};

export default FormGroups;
```

```jsx
/*
* FormGroupsMap
*/
```

```jsx
export const basicInfoForm = [
  {
    type: 'input',
    name: 'merchantName',
    label: '商户名',
    validOptions: {
      rules: [
        {
          required: true,
          message: '不能为空',
        },
        {
          max: 30,
          message: '字数不能超过30',
        },
      ],
    },
  },
  {
    type: 'password',
    name: 'passWord',
    label: '密码',
    validOptions: {
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    },
  },
  {
    type: 'custom',
    renderChild: null, // 空列
  },
  {
    type: 'input',
    name: 'contactName',
    label: '联系人',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
        {
          max: 30,
          message: '字数不能超过30',
        },
      ],
    },
  },
  {
    type: 'input',
    name: 'contactPhone',
    label: '联系人手机号',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    },
  },
  {
    type: 'input',
    name: 'contactEmail',
    label: '联系人邮箱',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    },
  },
];

export const companyInfoForm = [
  {
    type: 'input',
    name: 'companyName',
    label: '公司名称',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
        {
          max: 30,
          message: '字数不能超过30',
        },
      ],
    },
  },
  {
    type: 'input',
    name: 'licenseNo',
    label: '营业执照编码',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
        {
          max: 30,
          message: '字数不能超过60',
        },
      ],
    },
  },
  {
    type: 'rangepicker',
    name: 'expirationTime',
    label: '营业执照有效期',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    },
    props: {
      allowEmpty: [false, true],
    },
  },
  // {
  //   type: 'upload',
  //   name: 'businessUrl',
  //   label: '营业执照图片',
  //   rules: [
  //     {
  //       required: true,
  //       message: '不能为空',
  //     },
  //   ],
  //   props: {
  //     size: 2,
  //     accept: '.jpg,.png',
  //     params: {
  //       type: 'clinic_logo',
  //     },
  //   },
  // },
];

export const payInfoForm = [
  {
    type: 'input',
    name: 'contractNo',
    label: '合同编号',
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
        {
          max: 30,
          message: '字数不能超过30',
        },
      ],
    },
  },

  {
    type: 'radiogroup',
    name: 'payType',
    label: '付款方式',
    optionsData: [
      { label: '预付款', value: 1 },
      { label: '后付费', value: 0 },
    ],
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    },
  },
  {
    type: 'radiogroup',
    name: 'status',
    label: '状态',
    optionsData: [
      { label: '启用', value: 1 },
      { label: '停用', value: 0 },
    ],
    validOptions: {
      // 校验相关配置
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    },
  },
];

```