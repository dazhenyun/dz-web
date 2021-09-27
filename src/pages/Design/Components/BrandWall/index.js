/*
 * @CreatDate: 2021-09-15 17:05:17
 * @Describe: 品牌墙
 */

import "./index.less";
import { useState } from "react";
import Title from "@/components/Title";
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

	const downloadFile = (url, fileName) => {
		var x = new XMLHttpRequest();
		x.open("GET", url, true);
		x.responseType = "blob";
		x.onload = function (e) {
			// 会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
			var url = window.URL.createObjectURL(x.response);
			var a = document.createElement("a");
			a.href = url;
			a.download = fileName;
			a.click();
		};
		x.send();
	};

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
						<ul className="clearfix">
							{
								item.list.map((sItem, sIndex) => (
									<li key={sIndex}>
										<p className={sItem.isWhite ? "p1 white" : "p1"}><img src={sItem.url} /></p>
										<p className="p2">
											<span onClick={() => downloadFile(sItem.url, sItem.name)}>下载</span>
											<span onClick={() => previewImg(sItem.url, sItem.isWhite)}>预览</span>
										</p>
									</li>
								))
							}
						</ul>
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

