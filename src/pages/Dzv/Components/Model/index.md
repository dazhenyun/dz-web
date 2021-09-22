```javascript

import {OBJLoader, MTLLoader} from "@tntv/layers";
import { OrbitControls } from "../Layers/orbitControl";

let scene = new THREE.Scene();

const materials = new MTLLoader().parse(require("./test.mtl").default);
materials.preload();
const object = new OBJLoader().setMaterials(materials).parse(require("./test.obj").default);
scene.add(object);

var camera = new THREE.PerspectiveCamera(90, 800 / 600, 0.1, 10000);
camera.position.set(30, 30, 50);

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
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

var animate = ()=> {
    if (!this.ref) return;
    requestAnimationFrame(animate);
    controls.update();
    // directionalLight.position.copy(camera.position)
    renderer.render(scene, camera);
};
animate();
this.dispose = ()=>{
    scene.dispose();
    renderer.dispose();
};

```