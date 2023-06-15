import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { makeCube, ratio, makeCamera, makeRenderer, addPerformanceStats } from './clientUtils';
import { addRotationGUI, addPositionGUI, addGuiToObject } from './guiUtils';

const scene = new THREE.Scene();
const camera = makeCamera();
const renderer = makeRenderer()
const cube = makeCube();
scene.add(cube);
const stats = addPerformanceStats();
new OrbitControls(camera, renderer.domElement);

function render() {
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = ratio();
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

window.addEventListener('resize', onWindowResize, false);


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    stats.update();
    render();
}

addGuiToObject("Cube", cube, [addRotationGUI, addPositionGUI]);
addGuiToObject("Camera", camera, [addPositionGUI]);

animate();