/*
 * @CreatDate: 2021-09-16 15:31:28
 * @Describe: 前端规范
 */

import "./index.less";
import { useState } from "react";
import Title from "@/components/Title";
import { standardList } from "./constant";

export default () => {

	const handleClick = (url) => {
		window.open(url);
	};

	return (
		<div className="g-dzo-standard">
			<Title title="前端基础规范指南" />
			<ul className="m-ul">
				{
					standardList.map(item => (
						<li key={item.title} onClick={() => handleClick(item.url)}>
							<img src={item.src} />
							<p className="title">{item.title}</p>
						</li>
					))
				}
			</ul>
		</div>
	);
};

