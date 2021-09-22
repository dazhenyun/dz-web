```jsx
import React from 'react';
import { Input } from "antd";
import { useSessionStorage } from '@tntd/hooks';

export default () => {
  const [user, setUser] = useSessionStorage("user", {
		id: 9234634791,
		name: "Zhangsan",
		age: 33
	});

  return (
    <div>
		<Input
			style={{ width: 200 }}
			defaultValue={user.name}
			placeholder="input user name"
			onChange={(e) => {
				setUser({ ...user, name: e.target.value });
			}}
		/>
	</div>
  );
};
```