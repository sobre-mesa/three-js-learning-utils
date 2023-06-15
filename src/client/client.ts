import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {makeCube, ratio} from './clientUtils';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, ratio(), 0.1, 1000);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = makeCube();
scene.add(cube);

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
new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    render();
}

animate();