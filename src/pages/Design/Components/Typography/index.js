/*
 * @CreatDate: 2021-09-15 17:51:34
 * @Describe: 字体规范
 */

import { Fragment } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import HeaderTitle from "@/components/Title";
import { useList, usePaasList } from "./constant";
import { Title } from "tntd";
import BaseMd from "./base.md";

import "./index.less";

export default () => {
	return (
		<div className="typography-page">
			<HeaderTitle
				title='字体规范'
				description="字体优先使用系统默认的界面字体，同时提供一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。"
			/>
			<MdPreviewer md="## 字体预览" />
			<div className='typography-preview'>
				<Title
					title='中文字体'
					number={1}
				/>
				<img src={require("./images/cn.svg")} />
				<Title
					title='英文字体'
					number={2}
				/>
				<img src={require("./images/en.svg")} />
				<p>字体代码：</p>
				<MdPreviewer md={BaseMd}></MdPreviewer>
				<br />
				<MdPreviewer md="## 字体使用规范" />
				<Title
					className='mb10'
					title='业务系统专用'
					number={1}
				/>
				<table className='typography-use-table'>
					<thead>
						<th style={{ width: "200px" }}>名称</th>
						<th>示例</th>
						<th>粗细</th>
						<th>颜色</th>
						<th style={{ width: "400px" }}>使用场景</th>
					</thead>
					<tbody>
						{
							useList.map((item, index) => {
								return (
									<tr
										key={index}
										style={{
											fontWeight: item.fontWeight,
											color: item.color,
											fontSize: item.fontSize
										}}
									>
										<td>
											{item.name}
										</td>
										<td>{item.fontWeight === "normal" ? "默认" : "加粗"}</td>
										<td>{item.fontSize}</td>
										<td>
											<span className='color-square' style={{ background: item.color }}></span>
											<span className='color-value'>{item.color}</span>
										</td>
										<td>{item.useScene}</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
				<Title
					className='mb10'
					title='中台系统专用'
					number={2}
					style={{ marginTop: "20px" }}
				/>
				<table className='typography-use-table'>
					<thead>
						<th style={{ width: "200px" }}>名称</th>
						<th>示例</th>
						<th>粗细</th>
						<th>颜色</th>
						<th style={{ width: "400px" }}>使用场景</th>
					</thead>
					<tbody>
						{
							usePaasList.map((item, index) => {
								return (
									<tr
										key={index}
										style={{
											fontWeight: item.fontWeight,
											color: item.color,
											fontSize: item.fontSize
										}}
									>
										<td>
											{item.name}
										</td>
										<td>{item.fontWeight === "normal" ? "默认" : "加粗"}</td>
										<td>{item.fontSize}</td>
										<td>
											<span className='color-square' style={{ background: item.color }}></span>
											<span className='color-value'>{item.color}</span>
										</td>
										<td>{item.useScene}</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};
