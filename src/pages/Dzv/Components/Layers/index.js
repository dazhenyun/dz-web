/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 地图
 */

import "./index.less";
import { PureComponent } from "react";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import IndexMd from "./index.md";
import * as THREE from "three";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { FlyLine, Points, FlyMeshLine, Column, SphereWave } from "@tntv/layers";
import { OrbitControls } from "./orbitControl";
import Title from "@/components/Title";
import flylineMd from "./flyline.md";

class Maps extends PureComponent {

	componentDidMount() {
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 10000);
		var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.lineCanvas });
		renderer.setSize(800, 600);
		var controls = new OrbitControls(camera, renderer.domElement);
		controls.autoRotate = true;
		// controls.enableZoom = false;
		camera.position.set(0, 0, 300);
		controls.update();

		window.controls = controls;

		var geometry = new THREE.SphereGeometry(100, 64, 64);
		var material = new THREE.MeshPhongMaterial({ color: 0xaaaabb, wireframe: true });
		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		geometry = new THREE.PlaneGeometry(1000, 1000, 1);
		material = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xaaaabb });
		var plane = new THREE.Mesh(geometry, material);
		scene.add(plane);
		plane.visible = false;

		scene.background = null;
		var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
		directionalLight.position.set(0, 1, 1);
		scene.add(directionalLight);
		var light = new THREE.AmbientLight(0xffffff); // soft white light
		scene.add(light);
		this.scene = scene;
		this.camera = camera;
		this.controls = controls;
		this.renderer = renderer;
		this.sphere = cube;
		this.plane = plane;
		this.update();
		this.initMesh();
	}

	update = () => {
		if (this.destroyFlag) {
			return;
		}
		requestAnimationFrame(this.update);
		// cube.rotation.x += 0.01;
		// cube.rotation.y += 0.01;
		if (this.activeMesh && this.activeMesh.update) {
			this.activeMesh.update();
		}
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	}

	convertxy(a, b) {
		const x = 100 * Math.sin(b) * Math.cos(a);
		const y = 100 * Math.sin(b) * Math.sin(a);
		const z = 100 * Math.cos(b);
		return new THREE.Vector3(x, y, z);
	}

	convertPlanexy(a, b) {
		const x = 400 - 800 * Math.random();
		const y = 400 - 800 * Math.random();
		const z = 1;
		return new THREE.Vector3(x, y, z);
	}

	initMesh() {
		const texture = new THREE.TextureLoader().load(require("./laser.jpg"));
		var c = document.createElement("canvas");
		c.width = 100; c.height = 100;
		var ctx = c.getContext("2d");
		var grd = ctx.createRadialGradient(50, 50, 2, 50, 50, 50);
		grd.addColorStop(0, "rgba(50,25,222,1)");
		grd.addColorStop(0.5, "rgba(250,20,20,1)");
		grd.addColorStop(1, "rgba(0,25,220,0)");
		// Fill with gradient
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, 100, 100);
		const canvasTexture = new THREE.CanvasTexture(c);

		this.flyline = new FlyLine({
			addLineTimeout: 100,
			curveType: "2bezier",
			length: 50,
			materialConfig: {
				startColor: new THREE.Vector4(0, 1, 1, 0),
				endColor: new THREE.Vector4(0, 0, 1, 1)
			}
		});
		this.scene.add(this.flyline);

		this.planeFlyline = new FlyLine({
			addLineTimeout: 100,
			curveType: "plane",
			length: 200,
			speed: 3,
			smoothNumber: 0.5,
			strightRatio: 0.2,

			materialConfig: {
				startColor: new THREE.Vector4(0, 1, 1, 0),
				endColor: new THREE.Vector4(0, 0, 1, 1)
			}
		});
		this.scene.add(this.planeFlyline);
		this.planeFlyline.visible = false;
		// this.chinaMap.scene.add(this.planeFlyline);

		this.flyMeshLine = new FlyMeshLine({
			addLineTimeout: 100,
			length: 50,
			materialConfig: {
				lineWidth: 5,
				useMap: true,
				map: canvasTexture,
				repeat: new THREE.Vector2(50, 20),
				resolution: new THREE.Vector2(800, 600)
			}
		});
		this.flyMeshLine.visible = false;
		this.scene.add(this.flyMeshLine);

		this.points = new Points({
			materialConfig: {
				scale: 300,
				size: 1,
				map: canvasTexture
			}
		});
		this.points.visible = false;
		this.scene.add(this.points);

		this.column = new Column({
			radius: 1,
			center: new THREE.Vector3(0, 0, 0),
			materialConfig: {
				map: texture
			}
		});
		this.column.visible = false;
		this.scene.add(this.column);

		this.sphereWave = new SphereWave({
			radius: 100,
			speed: 0.05,
			minOpacity: 0.5
		});
		this.sphereWave.visible = false;

		this.scene.add(this.sphereWave);

		const data = [];
		const planeData = [];
		const columnData = [];
		const points = [];
		for (let i = 0; i < 10000; i++) {
			points.push({
				position: this.convertxy(2 * Math.random() * Math.PI, 2 * Math.random() * Math.PI),
				color: new THREE.Color(1, 1, 0)
			});
		}
		for (let i = 0; i < 100; i++) {

			columnData.push({
				position: this.convertxy(2 * Math.random() * Math.PI, 2 * Math.random() * Math.PI),
				height: Math.random() * 50,
				color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
			});
			planeData.push({ start: this.convertPlanexy(), end: this.convertPlanexy() });
			data.push({ start: this.convertxy(2 * Math.random() * Math.PI, 2 * Math.random() * Math.PI), end: this.convertxy(2 * Math.random() * Math.PI, 2 * Math.random() * Math.PI) });
		}

		this.flyMeshLine.setData(data);
		this.flyline.setData(data);
		this.planeFlyline.setData(planeData);
		this.points.setData(points);
		this.column.setData(columnData);
		this.sphereWave.setData(columnData);

		this.flyline.start();
		this.flyMeshLine.start();
		this.planeFlyline.start();

		this.activeMesh = this.flyline;
	}

	onTabChange = (key) => {
		this.activeMesh.visible = false;
		this.activeMesh = this[key];
		if (key === "planeFlyline") {
			this.sphere.visible = false;
			this.plane.visible = true;
			this.controls.autoRotate = false;
			this.camera.position.set(0, -300, 300);
			// document.getElementById("chinaMap").style.display = "block";
			// this.lineCanvas.style.display = "none";
		} else {
			this.sphere.visible = true;
			this.plane.visible = false;
			this.controls.autoRotate = true;
			// document.getElementById("chinaMap").style.display = "none";
			// this.lineCanvas.style.display = "block";
		}
		this.activeMesh.visible = true;

	}

	render() {

		return (
			<div>
				<Title
					title='图层'
					description="该功能库包含常用的3d特效组件，支持球和平面，目前已经实现如下功能。"
				/>
				<MdPreviewer md={IndexMd} />
				<CodePreviewer code={flylineMd} showCode={false}>
					<Tabs defaultActiveKey="flyline" onChange={this.onTabChange}>
						<TabPane tab="飞线" key="flyline" />
						<TabPane tab="飞面" key="flyMeshLine" />
						<TabPane tab="平面飞线" key="planeFlyline" />
						<TabPane tab="高性能点" key="points" />
						<TabPane tab="柱状图层" key="column" />
						<TabPane tab="球波" key="sphereWave" />
					</Tabs>
					<canvas width="800" height="600" ref={(ref) => { this.lineCanvas = ref; }} />
					{/* <div style={{ display: "none" }} id="chinaMap" style={{ width: "100%", height: 700 }}></div> */}
				</CodePreviewer>
			</div>
		);
	}

	componentWillUnmount() {
		this.destroyFlag = true;
		this.flyMeshLine.dispose();
		this.flyline.dispose();
		this.planeFlyline.dispose();
		this.points.dispose();
		this.column.dispose();
		this.scene.dispose();
		this.renderer.dispose();
	}
}

export default Maps;
