```javascript

import {OBJLoader, MTLLoader} from "@tntv/layers";
import { OrbitControls } from "../Layers/orbitControl";

let scene = new THREE.Scene();

const materials = new MTLLoader().parse(require("./test.mtl").default);
materials.materials.default = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color().setHSL(0.5, 0.5, 0.25),
    metalness: 0.9,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    reflectivity: 0.7
});
materials.preload();
const object = new OBJLoader().setMaterials(materials).parse(require("./test.obj").default);
object.children.map(item=>{
    item.receiveShadow = true;
    item.castShadow = true;
});
scene.add(object);

var camera = new THREE.PerspectiveCamera(90, 800 / 600, 0.1, 10000);

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
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
camera.position.set(50, 40, 50);
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
l2.position.set(10, 50, -50);
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

var animate = ()=>{
    if (!this.ref1) return;
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};
animate();
this.dispose1 = ()=>{
    scene.dispose();
    renderer.dispose();
};

```