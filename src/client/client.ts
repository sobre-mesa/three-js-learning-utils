import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { makeCube, ratio, makeCamera, makeRenderer, addPerformanceStats } from './clientUtils';
import { GUI } from 'dat.gui';

const scene = new THREE.Scene();
const camera = makeCamera();
const renderer = makeRenderer()
const cube = makeCube();
scene.add(cube);
const stats = addPerformanceStats();
new OrbitControls(camera, renderer.domElement);

export function addGUI(){
    const gui = new GUI();

    const cubeFolder = gui.addFolder("Cube Position");
    cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
    cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
    cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2);

    const cameraFolder = gui.addFolder("Camera Position");
    cameraFolder.add(camera.position, 'x', 0, 10);
    cameraFolder.add(camera.position, 'y', 0, 10);
    cameraFolder.add(camera.position, 'z', 0, 10);
}


addGUI();

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

animate();