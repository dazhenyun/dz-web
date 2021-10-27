/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: 品牌墙
 */

import "./index.less";
import { useState } from "react";
import { Title, ImageView } from "@/components";
import { downloadFile, staticFile } from "@/utils/utils";
import PreviewImgModal from "./PreviewImgModal";


export default () => {
	const [visible, setVisible] = useState(false);
	const [url, setUrl] = useState();
	const [isWhiteLogo, setIsWhiteLogo] = useState(false);

	const previewImg = (url, isWhite) => {
		setUrl(url);
		setVisible(true);
		setIsWhiteLogo(isWhite);
	};

	return (
		<>

			<div>
				<Title account="titi" title="结果页" description="用于反馈一系列操作任务的处理结果。" />
				<div>
					{
						["404", "403", "500", "empty"].map((sItem, sIndex) => {
							const path = staticFile + `design/empty/images/${sItem}.png`;
							return (<ImageView path={path} previewImg={previewImg} title={sItem} headerRender={() => `${sItem}`} />);
						})
					}
				</div>
			</div>

			<PreviewImgModal
				url={url}
				isWhiteLogo={isWhiteLogo}
				visible={visible}
				onCancel={() => setVisible(false)}
			/>
		</>
	);
};

