/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 简介
 */

import "./index.less";
import { useEffect, useState } from "react";
import { Input, Select, message, Modal } from "antd";
import Author from "@/components/Author";
import IndexMd from "./index.md";
import { MdPreviewer } from "react-markdown-previewer";

export default props => {
	return (
		<div className="m-introduce" >
			<Author
				title="React Hooks快速上手"
				account="bo.liu"
				description="@tntd/hooks 是一个 React Hooks 库，致力提供常用且高质量的 Hooks。"
			/>
			<MdPreviewer md={IndexMd}></MdPreviewer>
		</div >
	);
};
