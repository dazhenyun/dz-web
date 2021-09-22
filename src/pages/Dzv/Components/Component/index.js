/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 组件
 */

import "./index.less";
import { PureComponent } from "react";
import { Select } from "antd";
import Line from "./Line";
import Bar from "./Bar";
import LineBar from "./LineBar";
import Pie from "./Pie";
import Tmap from "./Tmap";
import Radar from "./Radar";
import Funnel from "./Funnel";
import Gauge from "./Gauge";
import WordCloud from "./WordCloud";
import Liquidfill from "./Liquidfill";
import "@dzv/charts/lib/Theme/dark";
import "@dzv/charts/lib/Theme/infographic";
import "@dzv/charts/lib/Theme/macarons";
import "@dzv/charts/lib/Theme/roma";
import "@dzv/charts/lib/Theme/shine";
import "@dzv/charts/lib/Theme/vintage";

const { Option } = Select;

const chartList = [
	{ name: "折线图", code: "Line", component: Line },
	{ name: "柱状图", code: "Bar", component: Bar },
	{ name: "折柱图", code: "LineBar", component: LineBar },
	{ name: "饼状图", code: "Pie", component: Pie },
	{ name: "雷达图", code: "Radar", component: Radar },
	{ name: "漏斗图", code: "Funnel", component: Funnel },
	{ name: "仪表盘", code: "Gauge", component: Gauge },
	{ name: "词云", code: "WordCloud", component: WordCloud },
	{ name: "水球图", code: "Liquidfill", component: Liquidfill },
	{ name: "地图", code: "Tmap", component: Tmap }
];

class Component extends PureComponent {

	state = {
		themeList: ["default", "macarons", "dark", "infographic", "roma", "shine", "vintage"],
		theme: "default"
	}

	render() {
		const { themeList, theme } = this.state;

		return (
			<div className="chart-2d">
				<div className="nav">
					{/* <span className="s1">
						<Icon type="double-right" />
					</span> */}
					{
						chartList.map(item => {
							return (
								<a key={item.code} href={`#${item.code}`}>{item.name}</a>
							);
						})
					}
				</div>
				主题切换：
				<Select
					value={theme || undefined}
					style={{ width: 120 }}
					onChange={(e) => {
						this.setState({ theme: e });
					}}
				>
					{
						themeList.map((item, index) => {
							return (
								<Option value={item} key={index}>{item}</Option>
							);
						})
					}
				</Select>
				{
					chartList.map((item, index) => {
						return (
							<div key={index}>
								<h2 id={item.code}>{item.name}</h2>
								<item.component theme={theme} />
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Component;
