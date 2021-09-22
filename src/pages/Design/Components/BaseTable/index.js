/*
 * @CreatDate: 2021-09-15 17:50:07
 * @Describe: 基础表格
 */

import { Fragment } from "react";
import Title from "@/components/Title";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import "./index.less";

export default () => {
	return (
		<div className="base-table-page">
			<Title
				title='基础表格'
				description="基础表格涵盖了我们业务系统常见的表单与表格等元素的编排，无论是简单还是复杂都有详细的设计细节。"
			/>
			<Section1 />
			<Section2 />
			<Section3 />
		</div>
	);
};
