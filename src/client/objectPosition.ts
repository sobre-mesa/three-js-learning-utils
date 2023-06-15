import * as THREE from 'three';
function getObjectPosition(object: THREE.Object3D) {
  const objectWorldPosition = new THREE.Vector3()
  object.getWorldPosition(objectWorldPosition);
  return { 
    world : {
        x: objectWorldPosition.x.toFixed(2),
        y: objectWorldPosition.y.toFixed(2),
    }, 
    local: {
        x: object.position.x.toFixed(2),
        y: object.position.y.toFixed(2),
    }
  }
}

function getWorldPositions(objects: THREE.Object3D[]) {
  return objects.map((object) => {
    return getObjectPosition(object);
  })
}

export function getObjectPositionDebugText(objects: Record<string, THREE.Object3D>){
    const worldPositions = getWorldPositions(Object.values(objects));
    const debugText = worldPositions.reduce((acc, worldPosition, index) => {
        return acc + 
        Object.keys(objects)[index] + '\n' +
        'Local Pos X : ' + worldPosition.local.x + '\n' +
        'Local Pos Y : ' + worldPosition.local.y + '\n' +
        'World Pos X : ' + worldPosition.world.x + '\n' +
        'World Pos Y : ' + worldPosition.world.y + '\n' +
        '\n'
    }, '')
    return debugText;
}

export function initObjectPositionDebug(){
    const debug = document.body.appendChild(document.createElement('div'));
    debug.id = 'debug';
    return debug;
}