let width = document.getElementById('canvas').width;
let height = document.getElementById('canvas').height;
let c = document.getElementById('canvas').getContext('2d');

function clean(){
    c.clearRect(0,0,width,height);
}

function paintPlayer(player){
    c.fillStyle = player.color;
    c.fillRect(player.x-player.size/2, player.y-player.size/2, player.size, player.size);
}

function repaint(players){
    clean();
    console.log(state);
    for(const [name, player] of Object.entries(state)){
        paintPlayer(player);
    }
}