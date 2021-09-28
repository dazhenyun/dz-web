/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: Iconfont 列表组件
 */

import "./index.less";
import { useEffect, useState } from "react";
import { ComIcon } from "@dzo/com";
import { DownloadOutlined } from "@ant-design/icons";
import Modal from "./Modal";

export default ({ src, data = [] }) => {
	const [visible, setVisible] = useState(false);
	const [curItem, setCurItem] = useState();

	useEffect(() => {
		// 引入官方iconfont的Symbol的js文件，如果在项目中，可以放在html script标签引入一次即可
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.src = src;
		document.head.appendChild(script);
	}, []);

	const handleModal = (data) => {
		console.log(data);
		setCurItem(data);
		setVisible(true);
	};

	return (
		<>
			<ul className="block-icon-list clearfix">
				{
					data.map((item, index) => (
						<li key={index}>
							<ComIcon
								type={item.font_class}
								style={{ marginTop: 18, fontSize: 36 }}
							/>
							<span className="icon-name" title={item.name}>{item.name}</span>
							<span className="icon-code" title={`icon-${item.name}`}>icon-{item.font_class}</span>
							<div className="icon-cover" onClick={() => handleModal(item)}>
								<DownloadOutlined className="download" />
							</div>
						</li>
					))
				}
			</ul>
			{
				visible &&
				<Modal
					visible={visible}
					data={curItem}
					onCancel={() => setVisible(false)}
				/>
			}
		</>
	);
};
