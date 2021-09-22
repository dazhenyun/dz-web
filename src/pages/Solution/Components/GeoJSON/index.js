/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 简介
 */

import { PureComponent } from "react";
import { MdPreviewer } from "react-markdown-previewer";
import Title from "@/components/Title";
import BaseMd from "./base.md";
import Intro from "./intro.md";
import "./index.less";

class Introduce extends PureComponent {

	render() {
		return (
			<div >
				<Title
					title='地图 GeoJson'
					description="本方案提供常用地图的GeoJSON资源，地图数据格式通用标准：https://geojson.org/"
				/>
				<MdPreviewer md={Intro}></MdPreviewer>
				<ul className="map-data-page">
					<li>
						<a href="http://datav.aliyun.com/tools/atlas/#" target="_blank">
							<img src={require("./img/datav.png")} />
							<p>DATAV中国地图数据</p>
						</a>
					</li>
					<li>
						<a href="https://zhfw.tianditu.gov.cn" target="_blank">
							<img src={require("./img/td.png")} />
							<p>天地图中国地图数据</p>
						</a>
					</li>
				</ul>
				<br />
				<MdPreviewer md={BaseMd}></MdPreviewer>
			</div>
		);
	}
}

export default Introduce;
