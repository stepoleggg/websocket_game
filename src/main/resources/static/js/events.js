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
    
}

window.onmousemove = function(e){
    //let y = e.clientY-renderer.domElement.getBoundingClientRect().top;
    //let x = e.clientX-renderer.domElement.getBoundingClientRect().left;
}