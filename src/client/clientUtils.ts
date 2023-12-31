import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module';

export function makeCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
        color: 'red',
        wireframe: true,
    });
    return new THREE.Mesh(geometry, material);
}

export function makeBall(color: string) {
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({color, wireframe: true});
    return new THREE.Mesh(geometry, material);
}

export function makeRGBBalls() {
    const [greenBall, blueBall, redBall] = ['green', 'blue', 'red'].map(makeBall);
    greenBall.add(blueBall);
    redBall.add(greenBall)

    greenBall.position.x = 5;
    blueBall.position.x = 5;
    return {
        "Green" : greenBall, "Blue" :  blueBall, "Red" : redBall 
    }
}

export const ratio = () => window.innerWidth / window.innerHeight;

export function makeCamera(){
    const camera = new THREE.PerspectiveCamera(75, ratio(), 0.1, 1000);
    camera.position.z = 2;
    return camera;
}

export function makeRenderer(){
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

export function addPerformanceStats(){
    const stats = new Stats();
    document.body.appendChild(stats.dom);
    return stats;
}

export function setup(){
    return {
        cube: makeCube(),
        scene: new THREE.Scene(),
        camera: makeCamera(),
        renderer: makeRenderer(),
        stats: addPerformanceStats(),
        rgbBalls: makeRGBBalls(),
    }
}