/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: ppt 模板
 */

import "./index.less";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Title, ImageView } from "@/components";
import { staticFile, downloadFile } from "@/utils/utils";

export default () => {

	return (
		<div>
			<Title
				account="mulan"
				title='PPT 模板'
				description="用户体验部推出的非常实用、高效的PPT模板"
			/>
			<div className="clearfix">
				{
					Array.from({ length: 3 }).map((item, index) => {
						const tplName = `PPT模板${index + 1}`;
						const tplUrl = staticFile + "design/ppt/tpl/ppt1.pptx";
						return (<ImageView
							title={name}
							path={tplUrl}
							className={"g-ppt"}
							footerRender={() => tplName}
						>
							<img src={require("./img/ppt1.png")} />
							<div className="u-download" onClick={() => downloadFile(tplUrl, tplName)}>
								<DownloadOutlined className="download" />
							</div>
						</ImageView>);
					})
				}
			</div>

		</div>
	);
};

