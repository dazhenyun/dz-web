/*
 * @CreatDate: 2021-09-15 17:54:13
 * @Describe: Color色彩
 */

import { Fragment } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import ColorCard from "./ColorCard";
import Title from "@/components/Title";
import { primaryColorMap, subColorList, middleColorList, applyColorList } from "./constant";
import "./index.less";

export default props => {

	return (
		<div className="color-page">
			<Title
				title='Color 色彩'
				description="我们为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。"
			/>
			<MdPreviewer md="## 主色"></MdPreviewer>
			<MdPreviewer md="大箴主要品牌颜色是鲜艳、友好的蓝色。"></MdPreviewer>
			<ul className='color-box-list'>
				<ColorCard
					width={410}
					mapData={primaryColorMap}
				/>
			</ul>
			<MdPreviewer md="## 辅助色"></MdPreviewer>
			<MdPreviewer md="除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。"></MdPreviewer>
			<ul className='color-box-list'>
				{
					subColorList.map(subColorMap => {
						return (
							<ColorCard
								key={subColorMap.name}
								width={200}
								mapData={subColorMap}
							/>
						);
					})
				}
			</ul>
			<MdPreviewer md="其他辅助色，用于各个模块、柱状图饼图、图表等。"></MdPreviewer>
			<ul className='color-box-list'>
				{
					applyColorList.map(subColorMap => {
						return (
							<ColorCard
								key={subColorMap.name}
								width={200}
								mapData={subColorMap}
							/>
						);
					})
				}
			</ul>
			<MdPreviewer md="## 中性色"></MdPreviewer>
			<MdPreviewer md="中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。"></MdPreviewer>
			<ul className='color-box-list'>
				{
					middleColorList.map(colorItem => {
						return (
							<ColorCard
								key={colorItem.name}
								width={200}
								height={90}
								mapData={colorItem}
							/>
						);
					})
				}
			</ul>
		</div>
	);
};
