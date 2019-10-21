//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

function cameraLook() {
    if(cubes[p.name]){
        let relativeCameraOffset = new THREE.Vector3(0,1,2);
        let cameraOffset = relativeCameraOffset.applyMatrix4(cubes[p.name].matrixWorld);
        camera.position.x = cameraOffset.x;
        camera.position.y = cameraOffset.y;
        camera.position.z = cameraOffset.z;
        camera.lookAt(cubes[p.name].position);
    }

}