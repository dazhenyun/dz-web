/*
 * @CreatDate: 2021-09-27 19:57:35
 * @Describe: 下载图片
 */

import { useEffect, useState } from "react";
import { Modal, Input, Select, Button } from "antd";
import { ComIcon } from "@dzo/com";
import ColorPicker from "@/components/ColorPicker";
import saveSvgAsPng from "save-svg-as-png";

const { Option } = Select;

const sizeMap = {
	16: 0.015625,
	32: 0.03125,
	48: 0.046875,
	64: 0.0625,
	128: 0.125,
	200: 0.1953125
};

export default ({ visible = false, onCancel, data }) => {
	const { name, font_class, icon_id } = data || {};
	const [color, setColor] = useState("#000000");
	const [inputVal, setInputVal] = useState("000000");
	const [fontSize, setFontSize] = useState(200);

	useEffect(() => {
		if (visible) {
			changeSvg();
		}
	}, [visible]);

	const changeSvg = () => {
		const pEl = document.getElementById(icon_id);
		const el = document.getElementById(`icon-${font_class}`);
		const wrapEl = document.getElementById("wrapImg");
		const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svgEl.innerHTML = el.innerHTML;
		svgEl.setAttribute("viewBox", "0 0 1024 1024");
		svgEl.setAttribute("id", icon_id);
		svgEl.childNodes.forEach(item => {
			if (item.tagName === "path") {
				item.setAttribute("fill", "");
			}
		});
		setSvgSizeAndColor(svgEl);
		pEl.remove();
		wrapEl.appendChild(svgEl);
	};

	const setSvgSizeAndColor = (el, size, fill) => {
		const newEl = el || document.getElementById(icon_id);
		newEl.setAttribute("width", size || fontSize);
		newEl.setAttribute("height", size || fontSize);
		newEl.setAttribute("fill", fill || color);
	};

	const download = (type) => {
		const el = document.getElementById(icon_id);
		if (type === "png") {
			saveSvgAsPng.saveSvgAsPng(el, `${name}.png`, {
				scale: sizeMap[fontSize]
			});
		} else if (type === "svg") {
			saveSvgAsPng.saveSvg(el, `${name}.svg`, {
				scale: sizeMap[fontSize],
				excludeUnusedCss: true,
				excludeCss: true
			});
		}
	};

	return (
		<Modal
			wrapClassName="m-wrap-icon"
			title={`"${name}"icon`}
			width={600}
			visible={visible}
			onCancel={onCancel}
			footer={null}
		>
			<div className="wrap-img" id="wrapImg">
				<ComIcon
					id={icon_id}
					type={font_class}
					style={{ fontSize: fontSize, color: color }}
				/>
			</div>
			<div style={{ position: "relative", display: "inline-block" }}>
				<Input
					style={{ width: 150 }}
					addonBefore="#"
					value={inputVal}
					onChange={(e) => {
						const val = e.target.value;
						setInputVal(val);
						if (val.length === 6) {
							setColor(`#${val}`);
							setSvgSizeAndColor(null, null, `#${val}`);
						}
					}}
				/>
				<ColorPicker
					color={color}
					onChange={(e) => {
						const val = e.hex;
						setColor(val);
						setInputVal(val.slice(1, val.length));
						setSvgSizeAndColor(null, null, val);
					}}
				>
					<div className="u-color-picker" style={{ background: color }}></div>
				</ColorPicker>
			</div>
			<Select
				allowClear={false}
				className="u-select"
				value={fontSize}
				onChange={(e) => {
					setFontSize(e);
					setSvgSizeAndColor(null, e);
				}}
			>
				<Option value={16}>16</Option>
				<Option value={32}>32</Option>
				<Option value={48}>48</Option>
				<Option value={64}>64</Option>
				<Option value={128}>128</Option>
				<Option value={200}>200</Option>
			</Select>
			<Button className="u-png" onClick={() => download("png")}>png下载</Button>
			<Button className="u-png" onClick={() => download("svg")}>svg下载</Button>
		</Modal>
	);
};
