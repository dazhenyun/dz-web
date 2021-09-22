/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 地球
 */

import "./index.less";
import { PureComponent } from "react";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import { Tabs, Spin } from "antd";
import { worldGeoJson } from "./world";
import Title from "@/components/Title";
const { TabPane } = Tabs;

import ThreeSphere from "three-sphere";
import IndexMd from "./index.md";
import ApiMd from "./api.md";
import EarthTransparent from "./earthTransparent.md";
import EarthFly from "./earthFly.md";

import worldJpg from "./images/world.jpg";
import worldTransparent from "./images/world_transparent.jpg";
const pointsData = [{
	position: [116.23128, 40.22077],
	title: "北京",
	color: 0xff0000
}, {
	position: [120.537920625, 28.8927100976322],
	title: "浙江",
	color: 0x36a721
}, {
	position: [101.28987375, 24.497074847353325],
	title: "云南",
	color: 0x1200ff
}, {
	position: [85.205889375, 40.68890948118624],
	title: "新疆",
	color: 0xf3970e
}];
const lineData = [[[116.2, 39.55], [69.11, 34.28]], [[116.2, 39.55], [19.49, 41.18]], [[116.2, 39.55], [3.08, 36.42]], [[116.2, 39.55], [16.22, 48.12]], [[116.2, 39.55], [49.56, 40.29]], [[116.2, 39.55], [-77.2, 25.05]], [[116.2, 39.55], [50.3, 26.1]], [[116.2, 39.55], [90.26, 23.43]], [[116.2, 39.55], [-59.3, 13.05]], [[116.2, 39.55], [27.3, 53.52]], [[116.2, 39.55], [4.21, 50.51]], [[116.2, 39.55], [-88.3, 17.18]]];
let [threeSphereInstance1, threeSphereInstance2] = [null, null];
class Earth extends PureComponent {
	state = {
		loading1: true,
		loading2: true
	}
	componentDidMount() {
		setTimeout(() => {
			const container = document.getElementById("earth1");
			threeSphereInstance1 = new ThreeSphere(worldGeoJson, {
				radius: 142,
				mapImg: worldTransparent,
				transparent: true,
				needHelp: false,
				container: container,
				width: container.clientWidth,
				height: 420,
				countryEdge: {
					drawLine: true
				},
				point: {
					pointsData,
					wave: true
				},
				flyLine: {
					lineData: lineData
				},
				control: {
					autoRotate: true,
					enableDamping: true,
					autoRotateSpeed: 0.4
				}
			});
			threeSphereInstance1.init();
			this.setState({
				loading1: false
			});
		}, 1000);
	}
	onTabChange = (key) => {
		const { loading2 } = this.state;
		if (key === "earth2" && loading2) {
			this.loadEarth();
		}
	}
	loadEarth() {
		setTimeout(() => {
			const container = document.getElementById("earth2");
			threeSphereInstance2 = new ThreeSphere(worldGeoJson, {
				radius: 142,
				mapImg: worldTransparent,
				transparent: false,
				needHelp: false,
				container: container,
				width: container.clientWidth,
				height: 420,
				countryEdge: {
					drawLine: true
				},
				// 点
				point: {
					pointsData,
					wave: true,
					column: true
				},

				// 飞线
				flyLine: {
					lineData: [[[116.2, 39.55], [69.11, 34.28]], [[116.2, 39.55], [19.49, 41.18]], [[116.2, 39.55], [3.08, 36.42]], [[116.2, 39.55], [16.22, 48.12]], [[116.2, 39.55], [49.56, 40.29]], [[116.2, 39.55], [-77.2, 25.05]], [[116.2, 39.55], [50.3, 26.1]], [[116.2, 39.55], [90.26, 23.43]], [[116.2, 39.55], [-59.3, 13.05]], [[116.2, 39.55], [27.3, 53.52]], [[116.2, 39.55], [4.21, 50.51]], [[116.2, 39.55], [-88.3, 17.18]]]
				},
				// 面
				countryShape: {
					drawShape: true
				}
			});
			threeSphereInstance2.init();
			this.setState({
				loading2: false
			});
		}, 1000);
	}
	componentWillUnmount() {
		threeSphereInstance1 && threeSphereInstance1.dispose();
		threeSphereInstance2 && threeSphereInstance2.dispose();
	}
	render() {
		const { loading1, loading2 } = this.state;
		return (
			<div>
				<Title
					title='3D地球类'
					description="基于geojson的3D地球类"
				/>
				<MdPreviewer md={IndexMd} />
				<Tabs defaultActiveKey="earth1" onChange={this.onTabChange} animated={false}>
					<TabPane tab="地球自转" key="earth1" showCode={false}>
						<CodePreviewer code={EarthTransparent} showCode={false}>
							<Spin spinning={loading1} tip="地球实例加载中...">
								<div id="earth1" style={{ width: "100%", minHeight: "420px" }}></div>
							</Spin>
						</CodePreviewer>
					</TabPane>
					<TabPane tab="球面Hover" key="earth2">
						<CodePreviewer code={EarthFly} showCode={false}>
							<Spin spinning={loading2} tip="地球实例加载中...">
								<div id="earth2" style={{ width: "100%", minHeight: "420px" }}></div>
							</Spin>
						</CodePreviewer>
					</TabPane>
				</Tabs>
				<MdPreviewer md={ApiMd} />
			</div>
		);
	}
}

export default Earth;
