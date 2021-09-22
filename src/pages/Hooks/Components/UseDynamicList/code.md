```jsx
import React from 'react';
import { Input } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useDynamicList } from '@tntd/hooks';

export default () => {
  const { list, remove, insert, replace } = useDynamicList(["David", "Jack"]);

  return (
    <div>
        <ul style={{ padding: 0 }}>
            {
                list.map((item, index) => {
                    return (
                        <li key={index} style={{ listStyle: "none", marginBottom: "10px" }}>
                            <Input
                                value={item}
                                style={{ width: 200 }}
                                onChange={(e) => replace(index, e.target.value)}
                            />
                            {
                                list.length > 1 &&
                                <MinusCircleOutlined className="ml10" onClick={() => remove(index)} />
                            }
                            <PlusCircleOutlined className="ml10" onClick={() => insert(index + 1, "")} />
                        </li>
                    );
                })
            }
        </ul>
        <p>{JSON.stringify(list)}</p>
    </div>
  );
};
```