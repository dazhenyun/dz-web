/*
 * @CreatDate: 2021-09-26 20:53:06
 * @Describe: 图片预览
 */

import { useState } from "react";
import { Modal } from "antd";
import "./index.less";
export default ({ url = "", visible = false, onCancel }) => {

	return (
		<Modal
			title="预览"
			wrapClassName={"g-brandwall-preview-modal"}
			visible={visible}
			onCancel={onCancel}
			footer={null}
		>
			<img src={url} />
		</Modal>
	);
};
