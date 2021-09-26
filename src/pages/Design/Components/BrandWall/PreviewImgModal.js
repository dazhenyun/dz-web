/*
 * @CreatDate: 2021-09-26 20:53:06
 * @Describe: 图片预览
 */

import { useState } from "react";
import { Modal } from "antd";

export default ({ url = "", isWhiteLogo = false, visible = false, onCancel }) => {

	return (
		<Modal
			title="预览"
			wrapClassName={isWhiteLogo ? "g-brandwall-preview-modal-iswhitelogo" : "g-brandwall-preview-modal"}
			visible={visible}
			onCancel={onCancel}
			footer={null}
		>
			<img src={url} />
		</Modal>
	);
};
