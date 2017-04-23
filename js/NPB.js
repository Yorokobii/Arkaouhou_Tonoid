class NPB extends Object{
	constructor(){
		//atributes
		super("../ressources/npb.png");
		this.speed = 3.5;
		this.maxSpeed = 7;
		this.minSpeed = 2;
		this.directionX = 0;
		this.directionY = (-1);

		this.bitmap.setTransform(WorldObject.cwidth/2 - 24/2,
								(WorldObject.cheight - 36));
	}

	initialPlace(){
		this.bitmap.setTransform(WorldObject.cwidth/2 - 24/2,
								(WorldObject.cheight - 36));
	}

	wallCollision(){
			if(this.loaded){

				//vertical
				if(this.bitmap.y < 50 && this.directionY < 0){
					this.directionY = (-this.directionY);
				}

				else if(this.bitmap.y > (WorldObject.cheight - this.bounds.height) && this.directionY > 0){
					this.directionY = (-this.directionY);
					this.speed-=0.5;
					WorldObject.hud.refresh(null, this);
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

	attachToPlayer(player){
		if(this.loaded){
			this.bitmap.x = (player.hitboxB.x + player.hitboxB.getBounds().width/2) - this.bounds.width/2;
			this.bitmap.y = player.hitboxB.y - (this.bounds.height + 1);
		}
	}

	//returns true if the player lost
	move(){
		this.wallCollision();
		this.bitmap.setTransform(this.bitmap.x+(this.directionX*this.speed),this.bitmap.y+(this.directionY*this.speed), this.bitmap.scaleX, this.bitmap.scaleY);
		return this.speed < this.minSpeed;
	}


}