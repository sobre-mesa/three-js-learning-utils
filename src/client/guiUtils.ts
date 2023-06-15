import { GUI } from 'dat.gui';
const gui = new GUI();

type GuiAdder = (parentFolder: GUI, parentFolderName: string, object: THREE.Object3D) => void;
type EulerAxis = keyof THREE.Euler;
type Vector3Axis = keyof THREE.Vector3;

const [ ROT_MIN, ROT_MAX, ROTATION_STEP ] = [0, Math.PI * 2, 1];
const [ POS_MIN, POS_MAX, POS_STEP] = [-10, 10, 0.1];
const [ SCALE_MIN, SCALE_MAX, SCALE_STEP ] = [0, 10, 1];

export function addRotationGUI<GuiAdder>(parentFolder: GUI, parentFolderName: string, object: THREE.Object3D){
    const rotationFolder = parentFolder.addFolder(`${parentFolderName} Rotation`);
    let axises = ['x', 'y', 'z'] as EulerAxis[];
    axises.forEach((axis: EulerAxis) => rotationFolder.add(object.rotation, axis, ROT_MIN, ROT_MAX, ROTATION_STEP));;
}

export function addPositionGUI<GuiAdder>(parentFolder: GUI, parentFolderName: string, object: THREE.Object3D){
    const positionFolder = parentFolder.addFolder(`${parentFolderName} Position`);
    let axises = ['x', 'y', 'z'] as Vector3Axis[];
    axises.forEach((axis: Vector3Axis) => positionFolder.add(object.position, axis, POS_MIN, POS_MAX, POS_STEP));;
}
export function addScaleGUI<GuiAdder>(parentFolder: GUI, parentFolderName: string, object: THREE.Object3D){
    const scaleFolder = parentFolder.addFolder(`${parentFolderName} Scale`);
    let axises = ['x', 'y', 'z'] as Vector3Axis[];
    axises.forEach((axis: Vector3Axis) => scaleFolder.add(object.scale, axis, SCALE_MIN, SCALE_MAX, SCALE_STEP));;
}

export function addGuiToObject(parentFolderName: string, object: any, guisToAdd: GuiAdder[]){
    const cubeFolder = gui.addFolder(parentFolderName);
    guisToAdd.forEach((guiToAdd: GuiAdder) => guiToAdd(cubeFolder, parentFolderName, object));
    cubeFolder.open();
}

