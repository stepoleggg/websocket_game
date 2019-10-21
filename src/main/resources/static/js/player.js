class Player {
    constructor(name){
        this.name = name;
        this.size = 30;
        this.speed = 10;
        this.rotationSpeed = Math.PI;
        this.x = Math.random()*20;
        this.y = Math.random()*20;
        this.color = getRandomColor();
        this.angle = 0;
        this.bullets = [];
    }

    //moving
    moveUp(delta){
        let k = delta/1000;
        this.y -= Math.cos(this.angle)*this.speed*k;
        this.x -= Math.sin(this.angle)*this.speed*k;
    }

    moveDown(delta){
        let k = delta/1000;
        this.y += Math.cos(this.angle)*this.speed*k;
        this.x += Math.sin(this.angle)*this.speed*k;
    }

    moveLeft(delta){
        let k = delta/1000;
        this.angle += this.rotationSpeed*k;
    }

    moveRight(delta){
        let k = delta/1000;
        this.angle -= this.rotationSpeed*k;
    }

    move(delta){
        
        if(keys[65]){
            this.moveLeft(delta);
        }
        if(keys[68]){
            this.moveRight(delta);
        }

        if(keys[87]){
            this.moveUp(delta);
        }
        if(keys[83]){
            this.moveDown(delta);
        }

        for(let b = 0; b < this.bullets.length; b++){
            this.bullets[b].move();
            if(this.bullets[b].power < 0){
                this.bullets.splice(b, 1);
            }
        }

        state[p.name] = p;
    }
}

