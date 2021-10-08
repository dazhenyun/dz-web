/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 地图
 */

import "./index.less";
import { PureComponent } from "react";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import IndexMd from "./index.md";
import ChinaMd from "./china.md";
import ZhejiangMd from "./zhejiang.md";
import MutiMd from "./muti.md";
import ApiMd from "./api.md";
import { Tabs, Spin } from "antd";
const { TabPane } = Tabs;
import ThreeMap from "@dzv/three-map";
import encoder from "geojson-decoder";
import chinaData from "@dzv/three-map/lib/mapData/china.json";
import zjData from "@dzv/three-map/lib/mapData/zhejiang.json";
import Bar from "@dzv/three-map/lib/components/Bar";
import Line from "@dzv/three-map/lib/components/Line";
import HaloPoint from "@dzv/three-map/lib/components/HaloPoint";
import Title from "@/components/Title";

class Layers extends PureComponent {

	state = {
		loading: false,
		loading2: false
	}

	componentDidMount() {
		setTimeout(() => { this.addZJMap(); }, 0);
	}

	componentWillUnmount() {
		if (this.map) this.map.destroy();
		if (this.zjMap) this.zjMap.destroy();
		if (this.multiComponentsMap) this.multiComponentsMap.destroy();
		if (this.haloPointInstance) this.haloPointInstance.destroy();
		if (this.barInstance) this.barInstance.destroy();
		if (this.lineInstance) this.lineInstance.destroy();
	}

	changeTab = (activeKey) => {
		if (activeKey === "2" && !this.map) { // 加载中国地图
			this.addChinaMap();
		} else if (activeKey === "3" && !this.multiComponentsMap) { // 多组件集成
			this.addMutiMap();
		}
	}

	addZJMap = () => {
		// 浙江省地图
		const zjGeojson = encoder.decode(zjData);
		const config = {
			center: [120.149506, 29.089524],
			depth: 0.5, // 地图深度
			camera: {
				position: [80, 5, 120],
				fov: 3
			},
			text: {
				show: true
			}
		};
		const zjDom = document.getElementById("zhejiangMap");
		this.zjMap = new ThreeMap(config, zjGeojson);
		this.zjMap.init(zjDom);
	}

	addChinaMap = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			// 中国地图
			const chinaGeojson = encoder.decode(chinaData);
			const dom = document.getElementById("chinaMap");
			this.map = new ThreeMap({}, chinaGeojson);
			this.map.init(dom);
			this.setState({ loading: false });
		}, 1000);
	}

	addMutiMap = () => {
		this.setState({ loading2: true });
		setTimeout(() => {
			// 多组件集成
			const chinaGeojson = encoder.decode(chinaData);
			const multiComponentsDom = document.getElementById("multiComponents");
			const multiConfig = {
				area: {
					upHover: true // 悬浮凸起
				}
			};
			this.multiComponentsMap = new ThreeMap(multiConfig, chinaGeojson);
			this.multiComponentsMap.init(multiComponentsDom);

			let barData = [
				{ name: "浙江省", value: 60, center: [120.153576, 30.287459] },
				{ name: "湖北省", value: 80, center: [114.298572, 30.584355] },
				{ name: "青海省", value: 80, center: [101.778916, 36.623178] },
				{ name: "黑龙江省", value: 90, center: [126.642464, 45.756967] },
				{ name: "内蒙古自治区", value: 100, center: [111.670801, 40.818311] },
				{ name: "台湾省", value: 60, center: [121.509062, 25.044332] }
			];

			let lineData = [
				{
					source: { name: "青海省", center: [101.778916, 36.623178] },
					target: { name: "浙江省", center: [120.153576, 30.287459] }
				},
				{
					source: { name: "青海省", center: [101.778916, 36.623178] },
					target: { name: "湖北省", center: [114.298572, 30.584355] }
				},
				{
					source: { name: "青海省", center: [101.778916, 36.623178] },
					target: { name: "黑龙江省", center: [126.642464, 45.756967] }
				},
				{
					source: { name: "青海省", center: [101.778916, 36.623178] },
					target: { name: "内蒙古自治区", center: [111.670801, 40.818311] }
				},
				{
					source: { name: "青海省", center: [101.778916, 36.623178] },
					target: { name: "台湾省", center: [121.509062, 25.044332] }
				}
			];

			// 转换地图3维坐标
			barData.forEach(item => {
				item.center = this.multiComponentsMap.lnglatToVector3(item.center);
			});
			lineData.forEach(item => {
				item.source.center = this.multiComponentsMap.lnglatToVector3(item.source.center);
				item.target.center = this.multiComponentsMap.lnglatToVector3(item.target.center);
			});

			// 加光晕点
			this.haloPointInstance = new HaloPoint({}, barData);
			this.multiComponentsMap.scene.add(this.haloPointInstance.group);

			// 加光柱
			this.barInstance = new Bar({}, barData);
			this.multiComponentsMap.scene.add(this.barInstance.group);

			// 加飞线
			this.lineInstance = new Line({}, lineData);
			this.multiComponentsMap.scene.add(this.lineInstance.group);

			this.setState({ loading2: false });
		}, 1000);
	}

	render() {
		const { loading, loading2 } = this.state;

		return (
			<div className="three-map">
				<Title
					account="mufeng"
					title='3D地图类'
					description="基于geojson的3D地图类"
				/>
				<MdPreviewer md={IndexMd} />
				<Tabs defaultActiveKey="1" animated={false} onChange={this.changeTab}>
					<TabPane tab="浙江省" key="1" forceRender={true}>
						<CodePreviewer code={ZhejiangMd} showCode={false}>
							<div id="zhejiangMap" style={{ width: "100%", height: 700 }}></div>
						</CodePreviewer>
					</TabPane>
					<TabPane tab="中国地图" key="2" forceRender={true}>
						<CodePreviewer code={ChinaMd} showCode={false}>
							<Spin spinning={loading} tip="地图实例加载中...">
								<div id="chinaMap" style={{ width: "100%", height: 700 }}></div>
							</Spin>
						</CodePreviewer>
					</TabPane>
					<TabPane tab="多组件集成" key="3" forceRender={true}>
						<CodePreviewer code={MutiMd} showCode={false}>
							<Spin spinning={loading2} tip="地图实例加载中...">
								<div id="multiComponents" style={{ width: "100%", height: 700 }}></div>
							</Spin>
						</CodePreviewer>
					</TabPane>
				</Tabs>
				<MdPreviewer md={ApiMd} />
			</div>
		);
	}
}

export default Layers;
