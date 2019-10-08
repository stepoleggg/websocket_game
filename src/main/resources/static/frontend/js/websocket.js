let connected = false;

function connect() {
	ws = new WebSocket('ws://localhost:8080/name');
	ws.onmessage = function(data){
	    state = JSON.parse(data.data);
	    console.log(data.data);
	}
	ws.onopen = function(){
        connected = true;
	}
}

function disconnect() {
    if (ws != null) {
        ws.close();
        connected = false;
    }
    console.log("Disconnected");
}

function sendState(player){
    let state = JSON.stringify(player);
    if(connected){
        console.log(state);
        ws.send(state);
    }
}

function getPlayersState(){
    let arr = new Array();
    arr.push(p);
    return arr;
}