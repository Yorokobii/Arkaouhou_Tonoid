class NPB extends Object{
	constructor(){
		//atributes
		super("../ressources/npb.png", (24/(WorldObject.cwidth/27)), (24/(WorldObject.cwidth/27)));
		this.speed = 3;
		this.maxSpeed = 100;
		this.directionX = 0;
		this.directionY = (-1);

		this.bitmap.setTransform(WorldObject.cwidth/2 - WorldObject.cwidth/27/2,
				                (WorldObject.cheight - (WorldObject.cheight/949)) - WorldObject.cheight/27, this.bitmap.scaleX, this.bitmap.scaleY);
	}

	initialPlace(){
		this.bitmap.setTransform(WorldObject.cwidth/2 - WorldObject.cwidth/27/2,
				                (WorldObject.cheight - (WorldObject.cheight/949)) - WorldObject.cheight/27, this.bitmap.scaleX, this.bitmap.scaleY);
	}

	wallCollision(){
			if(this.loaded){

				//vertical
				if(this.bitmap.y < 0 && this.directionY < 0){
					this.directionY = (-this.directionY);
				}

				else if(this.bitmap.y > (WorldObject.cheight - this.bounds.height) && this.directionY > 0){
					this.directionY = (-this.directionY);
					this.speed-=0.5;
				}

				//horizontal
				else if(this.bitmap.x < 0 && this.directionX < 0){
					this.directionX = (-this.directionX);
				}

				else if(this.bitmap.x > (WorldObject.cwidth - this.bounds.width) && this.directionX > 0){
					this.directionX = (-this.directionX);
				}
			}
	}

	move(){
		this.wallCollision();
		this.bitmap.setTransform(this.bitmap.x+(this.directionX*this.speed),this.bitmap.y+(this.directionY*this.speed), this.bitmap.scaleX, this.bitmap.scaleY);
	}


}0