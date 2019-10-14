class Bullet {
    constructor(x, y, angle, speed, power, size){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.power = power;
        this.angle = angle;
        this.size = size;
        this.color = "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
    }

    move(){
        this.x += this.speed*Math.cos(this.angle);
        this.y += this.speed*Math.sin(this.angle);
        this.power -= 0.01;
    }
}