/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: 品牌墙
 */

import "./index.less";
import { useState } from "react";
import { Title, ImageView } from "@/components";
import PreviewImgModal from "./PreviewImgModal";

const list = [
	{
		name: "大箴",
		list: [
			{ name: "大箴白", url: require("./img/dz-logo/logo1.png"), isWhite: true },
			{ name: "大箴蓝", url: require("./img/dz-logo/logo2.png") },
			{ name: "描边-白", url: require("./img/dz-logo/logo3.png"), isWhite: true },
			{ name: "描边-蓝", url: require("./img/dz-logo/logo4.png") },
			{ name: "填充-蓝", url: require("./img/dz-logo/logo5.png") }
		]
	},
	{
		name: "阿达云",
		list: [
			{ name: "阿达云计算上下有英文白", url: require("./img/ada-logo/logo1.png"), isWhite: true },
			{ name: "阿达云计算上下有英文蓝", url: require("./img/ada-logo/logo2.png") },
			{ name: "阿达云计算上下中文白", url: require("./img/ada-logo/logo3.png"), isWhite: true },
			{ name: "阿达云计算上下中文蓝", url: require("./img/ada-logo/logo4.png") },
			{ name: "纯logo白", url: require("./img/ada-logo/logo5.png"), isWhite: true },
			{ name: "纯logo蓝", url: require("./img/ada-logo/logo6.png") },
			{ name: "阿达云计算左右白", url: require("./img/ada-logo/logo7.png"), isWhite: true },
			{ name: "阿达云计算左右蓝", url: require("./img/ada-logo/logo8.png") }
		]
	},
	{
		name: "其他",
		list: [
			{ name: "阿达壁纸", url: require("./img/other/ada-bg.png") }
		]
	}
];

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
			{
				list.map((item, index) => (
					<div key={index} className="g-brandwall-box">
						<Title title={item.name} />
						<div className="clearfix">
							{
								item.list.map(({ url, name, isWhite }, sIndex) => {
									return (<ImageView
										title={name}
										path={url}
										previewImg={() => previewImg(url, isWhite)}
										className={isWhite ? "brand-white brand" : "brand"}>
										<img src={url} />
									</ImageView>);
								})
							}

						</div>
					</div>
				))
			}
			<PreviewImgModal
				url={url}
				isWhiteLogo={isWhiteLogo}
				visible={visible}
				onCancel={() => setVisible(false)}
			/>
		</>
	);
};

