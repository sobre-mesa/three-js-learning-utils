import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ratio, setup} from './clientUtils';
import { addRotationGUI, addPositionGUI, addGuiToObject, addScaleGUI } from './guiUtils';

const { cube, scene, camera, renderer, stats } = setup();

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

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    stats.update();
    render();
}

addWindowsResizeListener();
new OrbitControls(camera, renderer.domElement);

//Tools
addGuiToObject("Cube", cube, [addRotationGUI, addPositionGUI, addScaleGUI]);
addGuiToObject("Camera", camera, [addPositionGUI]);
scene.add(new THREE.AxesHelper(5));

//Objects
scene.add(cube);
animate();