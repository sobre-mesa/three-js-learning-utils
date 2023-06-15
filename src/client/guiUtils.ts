import { GUI } from 'dat.gui';
const gui = new GUI();

type GuiAdder = (parentFolder: GUI, parentFolderName: string, object: THREE.Object3D) => void;
type EulerAxis = keyof THREE.Euler;
type Vector3Axis = keyof THREE.Vector3;

export function addRotationGUI<GuiAdder>(parentFolder: GUI, parentFolderName: string, object: THREE.Object3D){
    let [rotationMin, rotationMax] = [0, Math.PI * 2 ];
    const rotationFolder = parentFolder.addFolder(`${parentFolderName} Rotation`);
    let axises = ['x', 'y', 'z'] as EulerAxis[];
    axises.forEach((axis: EulerAxis) => rotationFolder.add(object.rotation, axis, rotationMin, rotationMax));;
}

export function addPositionGUI<GuiAdder>(parentFolder: GUI, parentFolderName: string, object: THREE.Object3D){
    let [positionMin, positionMax] = [-10, 10];
    const positionFolder = parentFolder.addFolder(`${parentFolderName} Position`);
    let axises = ['x', 'y', 'z'] as Vector3Axis[];
    axises.forEach((axis: Vector3Axis) => positionFolder.add(object.position, axis, positionMin, positionMax));;
}

export function addGuiToObject(parentFolderName: string, object: any, guisToAdd: GuiAdder[]){
    const cubeFolder = gui.addFolder(parentFolderName);
    guisToAdd.forEach((guiToAdd: GuiAdder) => guiToAdd(cubeFolder, parentFolderName, object));
    cubeFolder.open();
}

