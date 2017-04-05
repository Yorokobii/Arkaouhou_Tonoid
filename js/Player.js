class Player{
	constructor(){
		//atributes
		this.hitboxPJ; //hitbox projectiles
		this.hitboxB; //hitbox ball
		this.PJbounds;
		this.Bbounds;
		this.direction = 0; //-1 left 0 no movement 1 right
		this.active_bar = -50; //ball bar activation timer
		this.space_raised = true;
		this.keys = [];
		//////////

		//load the bitmap
		this.hitboxPJ = new createjs.Bitmap("../ressources/core.png");
		this.hitboxB = new createjs.Bitmap("../ressources/bar.png");

		this.hitboxPJ.image.onload = () => {
			this.PJbounds = this.hitboxPJ.getBounds();
			this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - this.PJbounds.height);
		}

		this.hitboxB.image.onload = () => {
			this.Bbounds = this.hitboxB.getBounds();
			//places the bitmap
			this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - this.Bbounds.height);
		}

		document.onkeydown = (e) =>  {this.keys[e.keyCode] = true;};
		document.onkeyup = (e) => {
			this.keys[e.keyCode] = false;
			//to detect that the space bar was raised
			this.space_raised = true;
		};
	}

	keyPressed(){

		if(this.keys[37] && !this.keys[39] && this.hitboxPJ.x > 5)//left key
			if(!this.keys[16])
				this.direction = -2;
			else
				this.direction = -4;

		if(this.keys[39] && !this.keys[37] && this.hitboxPJ.x < WorldObject.cwidth-this.PJbounds.width-5)//right key
			if(!this.keys[16])
				this.direction = 2;
			else
				this.direction = 4;

		if((!this.keys[37] || this.hitboxPJ.x < 5) && (!this.keys[39] || this.hitboxPJ.x > WorldObject.cwidth-this.PJbounds.width-5)) this.direction = 0;

		if(this.keys[32] && this.active_bar<=-50 && this.space_raised){
			this.active_bar = 50;
			this.space_raised = false;
		}
	}

	initialPlace(){
		this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - this.PJbounds.height);
		this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - this.Bbounds.height);
	}

	//function that returns true if the player is hit by the ball, else false, if the ball touches the ballHitbox the ball's
	//velocity is changed accordingly
	ball_collision(ball){
		if(ball.loaded && ball.bitmap.y+ball.bounds.width>=WorldObject.cheight - WorldObject.cheight/9){
			//collision with ball without spacebar
			if(this.active_bar<=0){
				if(ball.bitmap.getTransformedBounds().intersects(this.hitboxPJ.getTransformedBounds())){
					ball.speed = 0;
					return true;
				}
				else
					return false;
			}
			else{
				var rectangle = ball.bitmap.getTransformedBounds().intersection(this.hitboxB.getTransformedBounds());
				if(rectangle != null){//ball is touched
					if(ball.directionY > 0){

						var touch_point = ball.bitmap.x + (ball.bounds.width/2);
						var ratio = touch_point<this.hitboxB.x ? -1 : (touch_point>this.hitboxB.x+this.Bbounds.width ? 1 : ((((touch_point - this.hitboxB.x) / this.Bbounds.width)*2)-1 ));//ratio de -1 a 1
						var rebound_degre = ratio*45;

						ball.directionX = Math.sin(rebound_degre*(Math.PI/180));
						ball.directionY = -Math.cos(rebound_degre*(Math.PI/180));

						var magnitude = Math.sqrt(ball.directionX*ball.directionX + ball.directionY*ball.directionY);

						//normalized
						ball.directionX /= magnitude;
						ball.directionY /= magnitude;

						if(ball.speed < ball.maxSpeed)
							if(++ball.speed > ball.maxSpeed) ball.speed = ball.maxSpeed;

					}
				}
			}
		}
		else{
			return false;
		}
	}

	draw(_stage){
		_stage.addChild(this.hitboxB);
		_stage.addChild(this.hitboxPJ);
	}

	Handling(ball){
		//ball collision
		this.ball_collision(ball);

		//move
		this.keyPressed();
		this.hitboxB.x += this.direction;
		this.hitboxPJ.x += this.direction;

		//display ball bar
		if(this.active_bar > 0){
			this.hitboxB.visible = true;
			this.active_bar -= 1;
		}
		else{
			if(this.active_bar <= 0){
				this.active_bar-=1;
				this.hitboxB.visible = false;
			}
		}
	}
}