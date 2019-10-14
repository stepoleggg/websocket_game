window.onkeydown = function(e){
    //console.log(e.keyCode);
    if(!keys[e.keyCode]){
        keys[e.keyCode] = true;
    }
}

window.onkeyup = function(e){
    if(keys[e.keyCode]){
        keys[e.keyCode] = false;
    }
}

window.onmousedown = function(e){
    p.shot();
}

window.onmousemove = function(e){
    let y = e.clientY-canvas.getBoundingClientRect().top;
    let x = e.clientX-canvas.getBoundingClientRect().left;
    p.angle = Math.atan2(y - p.y, x - p.x);
}