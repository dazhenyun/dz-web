```jsx
import TextAvatar from "@dzc/text-avatar";
import { message } from "antd";

export default () => {
	const cardConfig = [
		{
			label: "部门",
			value: "智能产品与技术开发事业部-产品商业化组"
		},
		{
			label: "邮箱",
			value: "mufeng@dingtalk.com"
		}
	];

	return (
		<TextAvatar
			nickname='沐风'
			account='mufeng'
			cardConfig={cardConfig}
			onClick={() => {
				message.info("跳转链接");
			}}
		/>
	);
};
```
