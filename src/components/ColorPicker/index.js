/*
 * @Author: chunlong.ni
 * @CreatDate: 2019-07-22 00:00:00
 * @Describe: 颜色选择
 */

import { PureComponent } from "react";
import { Popover } from "antd";
import { SketchPicker } from "react-color";

import "./index.less";

export default class ColorPicker extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, placement = "bottom", trigger = "click", onChange, color } = this.props;
		// color picker预置颜色
		const presetColors = ["#D00210", "#D00219", "#D00320", "#D00999", "#D0034B", "#D0980B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"];

		return (
			<Popover
				placement={placement}
				popupClassName="color-picker-popover-wrap"
				title={null}
				content={
					<SketchPicker
						color={color}
						presetColors={presetColors}
						onChangeComplete={onChange}
					/>
				}
				trigger={trigger}
			>
				{children}
			</Popover>
		);
	}
}

