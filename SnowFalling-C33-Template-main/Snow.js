class Snowflake {
    constructor(x,y,width,height) {
        var options = {
            'density': .5,
            'restitution': .1,
            'isStatic' : false 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.trajectory =[];
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        //this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
    }
    display(){
        imageMode (CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70);

    }
}