/*
 * @CreatDate: 2020-02-26 17:48:52
 * @Describe: 模型
 */

import "./index.less";
import { PureComponent } from "react";
import * as THREE from "three";
import { MdPreviewer, CodePreviewer } from "react-markdown-previewer";
import IndexMd from "./index.md";
import { OBJLoader, MTLLoader } from "@tntv/layers";
import { OrbitControls } from "../Layers/orbitControl";
import Title from "@/components/Title";

import readme from "./read.md";
let mtl = require("./test.mtl").default;
class Model extends PureComponent {

	render1() {
		let scene = new THREE.Scene();

		const materials = new MTLLoader().parse(mtl);
		materials.preload();
		new OBJLoader().setMaterials(materials).load("https://threejs.org/examples/models/obj/male02/male02.obj", (object) => {
			scene.add(object);
			object.children.forEach(item => (item.material = materials.materials.default));
		});

		var camera = new THREE.PerspectiveCamera(90, 800 / 600, 0.1, 10000);
		camera.position.set(100, 200, 100);

		var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		this.ref.appendChild(renderer.domElement);
		renderer.setSize(800, 600);

		var controls = new OrbitControls(camera, renderer.domElement);
		controls.update();
		controls.autoRotate = true;

		var directionalLight = new THREE.DirectionalLight(0xfafefa, 0.6);
		directionalLight.position.set(50, 50, 50);
		scene.add(directionalLight);

		var light = new THREE.AmbientLight(0xffffff, 1); // soft white light
		scene.add(light);

		var animate = () => {
			if (!this.ref) return;
			requestAnimationFrame(animate);
			controls.update();
			// directionalLight.position.copy(camera.position)
			renderer.render(scene, camera);
		};
		animate();
		this.dispose = () => {
			scene.dispose();
			renderer.dispose();
		};
	}
	render2() {
		let scene = new THREE.Scene();

		const materials = new MTLLoader().parse(mtl);
		materials.materials.default = new THREE.MeshPhysicalMaterial({
			color: new THREE.Color().setHSL(0.5, 0.5, 0.25),
			metalness: 0.9,
			roughness: 0.5,
			clearcoat: 1,
			clearcoatRoughness: 0.1,
			reflectivity: 0.7
		});
		materials.preload();
		new OBJLoader().setMaterials(materials).load("https://threejs.org/examples/models/obj/male02/male02.obj", (object) => {
			object.children.map(item => {
				item.receiveShadow = true;
				item.castShadow = true;
				item.material = materials.materials.default;
			});
			scene.add(object);
		});

		var camera = new THREE.PerspectiveCamera(90, 800 / 600, 0.1, 10000);

		var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		this.ref1.appendChild(renderer.domElement);
		renderer.setSize(800, 600);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.25;

		var controls = new OrbitControls(camera, renderer.domElement);
		controls.minDistance = 1;
		controls.maxPolarAngle = Math.PI * 0.95 / 2;
		camera.position.set(50, 200, 50);
		controls.update();
		controls.autoRotate = true;

		var directionalLight = new THREE.DirectionalLight(0xfafefa, 0.6);
		directionalLight.position.set(50, 50, 50);
		directionalLight.castShadow = true;
		directionalLight.shadow.camera.far = 2000;
		var d = 50;
		directionalLight.shadow.mapSize.width = 2048;
		directionalLight.shadow.mapSize.height = 2048;
		directionalLight.shadow.camera.left = -d;
		directionalLight.shadow.camera.right = d;
		directionalLight.shadow.camera.top = d;
		directionalLight.shadow.camera.bottom = -d;

		var l2 = directionalLight.clone();
		l2.position.set(-100, 50, -50);
		l2.castShadow = true;
		l2.shadow.camera.far = 1000;
		l2.shadow.mapSize.width = 512;
		l2.shadow.mapSize.height = 512;
		l2.shadow.camera.left = -d;
		l2.shadow.camera.right = d;
		l2.shadow.camera.top = d;
		l2.shadow.camera.bottom = -d;
		scene.add(directionalLight);
		scene.add(l2);

		var light = new THREE.AmbientLight(0xffffff, 1); // soft white light
		scene.add(light);

		var animate = () => {
			if (!this.ref1) return;
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();
		this.dispose1 = () => {
			scene.dispose();
			renderer.dispose();
		};
	}

	componentDidMount() {
		this.render1();
		this.render2();
	}
	componentWillUnmount() {
		this.dispose();
		this.dispose1();
	}
	render() {

		return (
			<div>
				<Title
					title='模型加载器'
					description="快速接入模型，简单，易上手"
				/>
				<MdPreviewer md={readme} />
				<CodePreviewer code={IndexMd} showCode={false}>
					<div ref={(ref) => { this.ref = ref; }} style={{ width: 800, height: 400 }}>

					</div>
				</CodePreviewer>
				<MdPreviewer md={"## 个性化定制"} />
				<CodePreviewer code={IndexMd} showCode={false}>
					<div ref={(ref) => { this.ref1 = ref; }} style={{ width: 800, height: 400 }}>

					</div>
				</CodePreviewer>
			</div>
		);
	}
}

export default Model;
