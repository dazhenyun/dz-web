/*
 * @CreatDate: 2021-09-16 14:14:17
 * @Describe: 文字头像
 */

import { CodePreviewer, MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import TextAvatar from "@dzc/text-avatar";
import { message, Popover } from "antd";
import BaseMd from "./base.md";
import CodeMd from "./code.md";
import ApiMd from "./api.md";

export default () => {
	const userList = [
		{
			id: 410,
			account: "mufeng",
			empStatus: 1,
			nickname: "沐风"
		},
		{
			id: 415,
			account: "nuoke",
			empStatus: 1,
			nickname: "诺克"
		},
		{
			id: 420,
			account: "dilu",
			empStatus: 1,
			nickname: "狄路"
		},
		{
			id: 425,
			account: "kaka",
			empStatus: 1,
			nickname: "卡卡"
		},
		{
			id: 430,
			account: "mulan",
			empStatus: 1,
			nickname: "木兰"
		},
		{
			id: 435,
			account: "titi",
			empStatus: 1,
			nickname: "瑅瑅"
		},
		{
			id: 440,
			account: "paqi",
			empStatus: 1,
			nickname: "帕奇"
		},
		{
			id: 440,
			account: "fuyun",
			empStatus: 2,
			nickname: "浮云"
		}
	];

	return (
		<div>
			<Title
				account="mufeng"
				title='文字头像'
				description="一个小而美的文字头像卡片组件，内置色彩、支持单色和渐变，简单配置即可应用于业务中。"
			/>
			<MdPreviewer md={BaseMd}></MdPreviewer>
			<br />
			<Popover></Popover>
			<CodePreviewer code={CodeMd} showCode={false}>
				<div
					style={{
						width: "100%",
						display: "inline-block",
						margin: "40px"
					}}
				>
					<p>单色-默认主题</p>
					<div>
						{
							userList.map(item => {
								let cardConfig = [
									{
										label: "部门",
										value: "智能产品与技术开发事业部-产品商业化组-用户体验组"
									},
									{
										label: "邮箱",
										value: `${item.account}@dingtalk.com`
									}
								];
								return (
									<TextAvatar
										key={item.id}
										{...item}
										cardConfig={cardConfig}
										style={{
											marginRight: "10px"
										}}
										onClick={() => {
											message.info("跳转链接到...");
										}}
									/>
								);
							})
						}
					</div>
					<p style={{ marginTop: "30px" }}>多色-plant主题</p>
					<div>
						{
							userList.map(item => {
								let cardConfig = [
									{
										label: "部门",
										value: "智能产品与技术开发事业部-产品商业化组"
									},
									{
										label: "邮箱",
										value: `${item.account}@dingtalk.com`
									}
								];
								return (
									<TextAvatar
										key={item.id}
										{...item}
										cardConfig={cardConfig}
										style={{
											marginRight: "10px"
										}}
										onClick={() => {
											message.info("跳转链接到...");
										}}
										linearGradient
										theme='plant'
									/>
								);
							})
						}
					</div>
				</div>
			</CodePreviewer>
			<MdPreviewer md={ApiMd}></MdPreviewer>
		</div>
	);
};
