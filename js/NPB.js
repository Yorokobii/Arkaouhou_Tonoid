class NPB extends Object{
	constructor(_img){
		//atributes
		super(_img);
		this.speed = 1;
		this.maxSpeed = 5;
		this.directionX = 0;
		this.directionY = (-1);

		this.bitmap.setTransform(WorldObject.cwidth/2 - 12,  
				                (WorldObject.cheight - (WorldObject.cheight/10)) - 24);
	}

	initialPlace(){
		this.bitmap.setTransform(WorldObject.cwidth/2 - 12,  
				                (WorldObject.cheight - (WorldObject.cheight/10)) - 24);
	}

	wallCollision(){
			//vertical
			if(this.bitmap.y < 0 && this.directionY < 0){
				this.directionY = (-this.directionY);
			}
			else if(this.bitmap.y > WorldObject.cheight && this.directionY > 0){
				console.log("yes");//this.directionY = (-this.directionY);
			}

			//horizontal

			
	}

	move(){
		if(this.bitmap.y < 0) this.directionY = 1;
		this.bitmap.setTransform(this.bitmap.x+(this.directionX*this.speed),this.bitmap.y+(this.directionY*this.speed));
	}


}