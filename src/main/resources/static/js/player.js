class Player {
    constructor(name){
        this.name = name;
        this.size = 30;
        this.speed = 10;
        this.x = Math.random()*width;
        this.y = Math.random()*height;
        this.color = "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
    }

    moveUp(){
        this.y -= this.speed;
    }

    moveDown(){
        this.y += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    moveRight(){
        this.x += this.speed;
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
    }
}