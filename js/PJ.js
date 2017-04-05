class PJ extends Object{
	constructor(Xpos, Ypos, _direction, _speed, _create_time){
		//atributes
		super("./ressources/pj.png");
		this.speed = 3;
		this.maxSpeed = 100;
		this.directionX = 1;
		this.directionY = (-1);

		this.bitmap.setTransform(WorldObject.cwidth/2 - 12,  
				                (WorldObject.cheight - (WorldObject.cheight/10)) - 24);
	}

	initialPlace(){
		this.bitmap.setTransform(WorldObject.cwidth/2 - 12,  
				                (WorldObject.cheight - (WorldObject.cheight/10)) - 24);
	}

	move(){
		this.wallCollision();
		this.bitmap.setTransform(this.bitmap.x+(this.directionX*this.speed),this.bitmap.y+(this.directionY*this.speed));
	}


}