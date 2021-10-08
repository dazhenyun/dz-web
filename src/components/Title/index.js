/*
 * @CreatDate: 2021-09-15 11:27:23
 * @Describe: title组件
 */

import "./index.less";
import { useState } from "react";
import TextAvatar from "@dzc/text-avatar";
import { Popover } from "antd";
import { userMap } from "./constants";

export default ({ title = "", description = "", account = "" }) => {

	return (
		<div className="components-title">
			{
				userMap[account] &&
				<TextAvatar
					nickname={userMap[account].nickname}
					account={account}
					cardConfig={userMap[account].cardConfig}
					linearGradient
					theme='plant'
				/>
			}
			<span className="u-title">{title}</span>
			{
				description &&
				<div className="u-p1">{description}</div>
			}
			<Popover></Popover>
		</div>
	);
};
