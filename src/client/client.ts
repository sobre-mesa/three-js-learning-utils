import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ratio, setup} from './clientUtils';
import { addRotationGUI, addPositionGUI, addGuiToObject, addScaleGUI } from './guiUtils';
import {initObjectPositionDebug, getObjectPositionDebugText} from './objectPosition';
const { cube,
        scene,
        camera,
        renderer,
        stats, 
        rgbBalls } = setup();

function render() {
    renderer.render(scene, camera);
}

function addWindowsResizeListener() {
    window.addEventListener('resize', () => {
        camera.aspect = ratio();
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }, false);
}

const positionDebug = initObjectPositionDebug();
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    stats.update();
    positionDebug.innerText = getObjectPositionDebugText(rgbBalls);
    render();
}

addWindowsResizeListener();
new OrbitControls(camera, renderer.domElement);


//Tools
scene.add(new THREE.AxesHelper(5));
addGuiToObject("Red Ball", rgbBalls.Red, [addPositionGUI, addScaleGUI]);
addGuiToObject("Blue Ball", rgbBalls.Blue, [addPositionGUI, addScaleGUI]);
addGuiToObject("Gren Ball", rgbBalls.Green, [addPositionGUI, addScaleGUI]);

//Objects
scene.add(rgbBalls.Red);
animate();