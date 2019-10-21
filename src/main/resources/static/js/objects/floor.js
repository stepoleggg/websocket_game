//floor
const floorGeometry = new THREE.PlaneBufferGeometry(30, 30);
let floor = new THREE.Mesh(floorGeometry, new THREE.MeshBasicMaterial({color: 0xffff00}));
floor.position.y = -0.5;
floor.rotation.x = -Math.PI/2;
