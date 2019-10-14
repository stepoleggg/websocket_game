let name = prompt('Введите ваше имя', "Анон");
let p = new Player(name);
let delay = 20;
let keys = [];
var state = new Array();
state[p.name] = p;

connect();

window.setInterval(refresh, delay);

function refresh(){
    let players = state;
    repaint(players);
    p.move();
    sendState(p);
}



