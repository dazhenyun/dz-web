/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: 品牌墙
 */

import { useState } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import { Button } from "antd";
import Title from "@/components/Title";
import BaseMd from "./base.md";

export default () => {

	return (
		<div>
			<Title title='LOGO 品牌墙' />
			<MdPreviewer md={BaseMd}></MdPreviewer>
		</div>
	);
};

