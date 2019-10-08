let name = prompt('Введите ваше имя', "Анон");
let p = new Player(name);
let delay = 40;
let keys = [];
var state = new Array();
state[p.name] = p;

paintPlayer(p);
connect();

window.setInterval(refresh, delay);

function refresh(){
    let players = state;
    repaint(players);
    p.move();
    sendState(p);
}



window.onkeydown = function(e){
    console.log(e.keyCode);
    if(!keys[e.keyCode]){
        keys[e.keyCode] = true;
    }
}

window.onkeyup = function(e){
    if(keys[e.keyCode]){
        keys[e.keyCode] = false;
    }
}
