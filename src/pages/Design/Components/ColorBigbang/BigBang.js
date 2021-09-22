import { useEffect, useState } from "react";
import { Form, message, Input } from "antd";
import tinycolor from "tinycolor2";
import copy from "copy-to-clipboard";
import { MdPreviewer } from "react-markdown-previewer";

export default () => {
	const [colorInput, setColorInput] = useState();
	const [gradaList, setGradaList] = useState([]);
	const sColor = tinycolor(colorInput);

	const refresh = () => {
		let newGradaList = [];
		for (let i = 10; i >= 1; i--) {
			newGradaList.push(sColor
				.setAlpha(i * 0.1)
				.toHex8String());
		};
		setGradaList(newGradaList);
	};

	const refreshDefault = () => {
		setGradaList(["#5b8ff9ff", "#5b8ff9e6", "#5b8ff9cc", "#5b8ff9b3", "#5b8ff999", "#5b8ff980", "#5b8ff966", "#5b8ff94d", "#5b8ff933", "#5b8ff91a"]);
	};

	useEffect(() => {
		colorInput
			? (!!sColor._format && refresh())
			: refreshDefault();
	}, [colorInput]);

	return (
		<div
			className='color-box-item'
			style={{
				background: colorInput || "#5B8FF9",
				width: "100%",
				height: "calc(100vh - 220px)",
				color: "#126BFB"
			}}
		>
			{/* 转换器🎨 */}
			<Form
				className='bigbang-card bigbang-card-conver'
				labelCol={{ span: 5 }}
				wrapperCol={{ span: 17 }}
				layout="horizontal"
			>
				<MdPreviewer md="## 转换器🎨"></MdPreviewer>
				<Form.Item label="Input">
					<Input
						value={colorInput}
						placeholder="输入HEX、RGB、RGBA、HSL.."
						onChange={(e) => {
							setColorInput(e.target.value);
						}}
						onPressEnter={() => {
							setColorInput(
								sColor.toName() || colorInput
							);
							console.log(colorInput);
						}}
					/>
				</Form.Item>
				<Form.Item label="HEX">
					<Input
						value={sColor
							.toHexString()}
						onChange={(e) => {
							setColorInput(e.target.value);
						}}
					/>
				</Form.Item>
				<Form.Item label="RGB">
					<Input
						value={sColor
							.toRgbString()}
					/>
				</Form.Item>
				<Form.Item label="RGBA">
					<Input
						value={sColor
							.setAlpha(0.5)
							.toRgbString()}
					/>
				</Form.Item>
				<Form.Item label="HSL">
					<Input
						value={sColor
							.toHslString()}
					/>
				</Form.Item>
				<Form.Item label="HSV">
					<Input
						value={sColor
							.toHsvString()}
					/>
				</Form.Item>
			</Form>

			{/* 色阶 */}
			<div className="bigbang-card bigbang-card-gradation">
				<MdPreviewer md="## 色彩梯度"></MdPreviewer>
				<ul className='color-sub-list'>
					{
						gradaList && gradaList.map((color, index, arr) => {
							return (
								<li
									className='color-sub-item primary-color'
									key={color}
									style={{
										background: color,
										width: (1 / arr.length) * 100 + "%"
									}}
									onClick={(e) => {
										e.stopPropagation();
										copy(color);
										message.success(`颜色 ${color} 已复制到剪贴板`);
									}}
								></li>
							);
						})
					}
				</ul>
			</div>
		</div>
	);
};
