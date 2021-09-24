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
				title='色彩规范'
				description="我们为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。"
			/>
			<MdPreviewer md="## 品牌色（蓝）"></MdPreviewer>
			<MdPreviewer md="大箴产品主色调，包容、友好、科技、普惠——蓝"></MdPreviewer>
			<ul className='color-box-list'>
				<ColorCard
					width={410}
					mapData={primaryColorMap}
				/>
			</ul>
			<MdPreviewer md="## 辅助色"></MdPreviewer>
			<MdPreviewer md="除主色外的功能色——用于链接、成功、警告、错误场景"></MdPreviewer>
			<ul className='color-box-list'>
				{
					subColorList.map(subColorMap => {
						return (
							<ColorCard
								key={subColorMap.name}
								width={200}
								height={90}
								mapData={subColorMap}
							/>
						);
					})
				}
			</ul>
			<MdPreviewer md="## 多色"></MdPreviewer>
			<MdPreviewer md="用于可视化图表的多维度色值"></MdPreviewer>
			<ul className='color-box-list'>
				{
					applyColorList.map(subColorMap => {
						return (
							<ColorCard
								key={subColorMap.name}
								width={200}
								height={90}
								mapData={subColorMap}
							/>
						);
					})
				}
			</ul>
			<MdPreviewer md="## 中性色"></MdPreviewer>
			<MdPreviewer md="平稳的中性色多用于文本、背景、边框，通过运用中性色，来丰富页面层次结构"></MdPreviewer>
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
