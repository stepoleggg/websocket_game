const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 3;

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//texture loader
const loader = new THREE.TextureLoader();

//floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const texture = loader.load('textures/floor1.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
let floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -0.5;
floor.rotation.x = Math.PI/2;
scene.add(floor);

//players
let cubes = [];
let geometry = new THREE.BoxGeometry(1,1,1);



animate();

function animate() {
    requestAnimationFrame( animate );
    update();
	renderer.render( scene, camera );
}


function update() {
    toScene(state);
    cameraLook();
}

function cameraLook() {
    let relativeCameraOffset = new THREE.Vector3(0,4,10);
    let cameraOffset = relativeCameraOffset.applyMatrix4(cubes[p.name].matrixWorld);
	camera.position.x = cameraOffset.x;
	//camera.position.y = cameraOffset.y;
	camera.position.z = cameraOffset.z;
	camera.lookAt(cubes[p.name].position);
}

function toScene(players) {
    for (i in players) {
        player = players[i];
        if (cubes[player.name] == undefined) {
            let material = new THREE.MeshBasicMaterial({color: player.color});
            cubes[player.name] = new THREE.Mesh( geometry, material );
            scene.add(cubes[player.name]);
        }
        cubes[player.name].rotation.y = player.angle;
        cubes[player.name].position.x = player.x;
        cubes[player.name].position.z = player.y;
    }
}

