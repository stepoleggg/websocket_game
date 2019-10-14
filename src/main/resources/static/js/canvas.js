let canvas = document.getElementById('canvas');
let width = canvas.width;
let height = canvas.height;
let c = canvas.getContext('2d');

function clean(){
    c.clearRect(0,0,width,height);
}

function paintPlayer(player){
    c.fillStyle = "#000";
    c.font = "20px Arial";
    c.fillText(player.name, player.x-player.size/2, player.y+player.size/2+20);

    c.save();
    c.translate(player.x, player.y);
    c.rotate(player.angle);

    c.fillStyle = player.color;
    c.fillRect(0-player.size/2, 0-player.size/2, player.size, player.size);

    c.restore();

    for(bullet of player.bullets){
        paintBullet(bullet);
    }
}

function paintBullet(bullet){
    c.save();
    c.translate(bullet.x, bullet.y);
    c.rotate(bullet.angle);

    c.fillStyle = bullet.color;
    c.fillRect(0-bullet.size/2, 0-bullet.size/2, bullet.size, bullet.size);

    c.restore();
}

function repaint(players){
    clean();
    //console.log(state);
    for(const [name, player] of Object.entries(state)){
        paintPlayer(player);
    }
}