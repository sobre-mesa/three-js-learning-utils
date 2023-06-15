import * as THREE from 'three'

export function makeCube() {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    });
    return new THREE.Mesh(geometry, material);
}

export function ratio(){
    return window.innerWidth / window.innerHeight;
} 