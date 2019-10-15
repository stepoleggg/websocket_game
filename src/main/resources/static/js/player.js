class Player {
    constructor(name){
        this.name = name;
        this.size = 30;
        this.speed = 0.1;
        this.rotationSpeed = Math.PI/100;
        this.x = Math.random()*20;
        this.y = Math.random()*20;
        this.color = getRandomColor();
        this.angle = 0;
        this.bullets = [];
    }

    //moving
    moveUp(){
        this.y -= Math.cos(this.angle)*this.speed;
        this.x -= Math.sin(this.angle)*this.speed;
    }

    moveDown(){
        this.y += Math.cos(this.angle)*this.speed;
        this.x += Math.sin(this.angle)*this.speed;
    }

    moveLeft(){
        this.angle += this.rotationSpeed;
    }

    moveRight(){
        this.angle -= this.rotationSpeed;
    }

    move(){

        if(keys[65]){
            this.moveLeft();
        }
        if(keys[68]){
            this.moveRight();
        }

        if(keys[87]){
            this.moveUp();
        }
        if(keys[83]){
            this.moveDown();
        }

        for(let b = 0; b < this.bullets.length; b++){
            this.bullets[b].move();
            if(this.bullets[b].power < 0){
                this.bullets.splice(b, 1);
            }
        }
    }

    //shot
    shot(){
        this.bullets.push(new Bullet(this.x, this.y, this.angle, 30, 2, Math.random()*50));
    }
}