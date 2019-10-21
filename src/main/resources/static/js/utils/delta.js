let now = performance.now();

function getDelta() {
    let delta = performance.now()-now;
    now = performance.now();
    return delta;
}

