//players
let cubes = [];
let geometry = new THREE.BoxGeometry(1,1,1);

function playersToScene(players) {
    for (name in players) {
        player = players[name];
        if (cubes[player.name] == undefined) {
            let material = new THREE.MeshBasicMaterial({color: player.color});
            cubes[player.name] = new THREE.Mesh( geometry, shaderMaterial );
            scene.add(cubes[player.name]);
        }
        cubes[player.name].rotation.y = player.angle;
        cubes[player.name].position.x = player.x;
        cubes[player.name].position.z = player.y;
    }

    if(Object.keys(players).length < Object.keys(cubes).length) {
        for (name in cubes) {
            if(players[name] == undefined){
                scene.remove(cubes[name]);
                delete cubes[name];
            }
        }
    }
}