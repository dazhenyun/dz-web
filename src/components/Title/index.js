/*
 * @CreatDate: 2021-09-15 11:27:23
 * @Describe: title组件
 */

import { useState } from "react";
import "./index.less";

export default ({ title = "", description = "" }) => {

	return (
		<div className="components-title">
			{title}
			{
				description &&
				<div>{description}</div>
			}
		</div>
	);
};
