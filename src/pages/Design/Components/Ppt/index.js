/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: ppt 模板
 */

import "./index.less";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import Title from "@/components/Title";
import { downloadFile } from "@/utils/utils";

const list = [
	{ name: "PPT模板1", thumbnail: require("./img/ppt1.png"), url: "../../assets/ppt/ppt1.pptx" },
	{ name: "PPT模板2", thumbnail: require("./img/ppt1.png"), url: "../../assets/ppt/ppt1.pptx" },
	{ name: "PPT模板3", thumbnail: require("./img/ppt1.png"), url: "../../assets/ppt/ppt1.pptx" }
];

export default () => {

	return (
		<div className="g-ppt">
			<Title
				account="mulan"
				title='PPT 模板'
				description="用户体验部推出的非常实用、高效的PPT模板"
			/>
			<ul className="clearfix">
				{
					list.map((item, index) => (
						<li key={index}>
							<p className="p1"><img src={item.thumbnail} /></p>
							<p className="p2">{item.name}</p>
							<div className="u-download" onClick={() => downloadFile(item.url, item.name)}>
								<DownloadOutlined className="download" />
							</div>
						</li>
					))
				}
			</ul>
		</div>
	);
};

