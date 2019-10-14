class Player {
    constructor(name){
        this.name = name;
        this.size = 30;
        this.speed = 10;
        this.x = Math.random()*width;
        this.y = Math.random()*height;
        this.color = "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
        this.angle = 0;
        this.bullets = [];
    }

    //moving


    
    moveUp(){
        //this.y -= this.speed;
        this.x += this.speed*Math.cos(this.angle);
        this.y += this.speed*Math.sin(this.angle);
    }

    moveDown(){
        //this.y += this.speed;
    }
    /*
    moveLeft(){
        this.x -= this.speed;
    }

    moveRight(){
        this.x += this.speed;
    }
    */
    move(){
        /*
        if(keys[65]){
            this.moveLeft();
        }
        if(keys[68]){
            this.moveRight();
        }
        */
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