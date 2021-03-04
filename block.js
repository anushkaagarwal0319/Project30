class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':0.1,
        'density':0.0001
    }

    this.visibility = 225;
    this.body = Bodies.rectangle(x,y,width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

  }
  display(){
    if(this.body.speed<9.5){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightblue");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
      pop();
    }
  }
};
