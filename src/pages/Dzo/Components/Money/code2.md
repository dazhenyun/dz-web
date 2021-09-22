```jsx
import React, { useState } from 'react';
import { message } from 'antd';
import { Money, GForm } from '@dzo/com';

const { MoneyInput } = Money.set(100); // 甚至转化单位

export default () => {
  const [value, setValue] = useState(1);
  const onChange = v => {
    console.log(v);
    setValue(v);
  };

  return (
    <>
      金额输入框： <MoneyInput value={value} onChange={onChange} />
      <br />
      <br />
      <br />
      Form表单结合:
      <GForm
        formSet={[
          {
            label: '金额',
            type: 'custom',
            name: 'amount',
            renderChild: <MoneyInput />,
            props: {
              precision: 4, // 默认两位
            },
          },
          {
            label: '金额',
            type: 'custom',
            name: 'amount2',
            renderChild: <MoneyInput />,
            props: {
              prefix: '$',
              suffix: '元',
            },
          },
          {
            label: '金额',
            type: 'custom',
            name: 'amount3',
            renderChild: <MoneyInput />,
            props: {
              addonBefore: '$',
              addonAfter: '元',
            },
          },
        ]}
      />
    </>
  );
};
```