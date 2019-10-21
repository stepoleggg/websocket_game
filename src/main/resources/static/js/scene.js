//scene
const scene = new THREE.Scene();

scene.add(floor);

//models
var loader2 = new THREE.GLTFLoader();
loader2.load( 'models/basic.glb', function ( gltf ) {
    gltf.scene.position.y = 0;
    console.log(gltf.scene.children[2].children[0]);
    gltf.scene.children[2].children[0].children[0].rotation.z = Math.PI/4;
    scene.add( gltf.scene );
    
    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

}, undefined, function ( error ) {
	console.error( error );
} );

//renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.shadowMap.enabled = true;
//renderer.shadowMapSort = true;
document.body.appendChild( renderer.domElement );

playersToScene(state);
animate();

function animate() {
    requestAnimationFrame( animate );
    updateUniforms();
    update();
    renderer.render( scene, camera );
}


function update() {
    cameraLook();
    p.move(getDelta());
    playersToScene(state);
    
}