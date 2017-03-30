class Player{
	constructor(){
		//atributes
		this.hitboxPJ; //hitbox projectiles
		this.hitboxB; //hitbox ball
		this.PJbounds;
		this.Bbounds;
		this.direction = 0; //-1 left 0 no movement 1 right
		this.active_bar = -100; //ball bar activation timer
		this.space_raised = true;
		this.keys = [];
		//////////

		//load the bitmap
		this.hitboxPJ = new createjs.Bitmap("../ressources/player_hitboxPJ.jpg");
		this.hitboxB = new createjs.Bitmap("../ressources/player_hitboxB.jpg");

		this.hitboxPJ.image.onload = () => {
			this.PJbounds = this.hitboxPJ.getBounds();
			this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
		}

		this.hitboxB.image.onload = () => {
			this.Bbounds = this.hitboxB.getBounds();
			//places the bitmap
			this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
		}

		document.onkeydown = (e) =>  {this.keys[e.keyCode] = true;};
		document.onkeyup = (e) => {
			this.keys[e.keyCode] = false;
			//to detect that the space bar was raised
			this.space_raised = true;
		};
	}

	keyPressed(){

		if(this.keys[37] && this.hitboxPJ.x > 5)//left key
			if(!this.keys[16])
				this.direction = -2;
			else
				this.direction = -4;

		if(this.keys[39] && this.hitboxPJ.x < WorldObject.cwidth-this.PJbounds.width-5)//right key
			if(!this.keys[16])
				this.direction = 2;
			else
				this.direction = 4;

		if((!this.keys[37] || this.hitboxPJ.x < 5) && (!this.keys[39] || this.hitboxPJ.x > WorldObject.cwidth-this.PJbounds.width-5)) this.direction = 0;

		if(this.keys[32] && this.active_bar<=-100 && this.space_raised){
			this.active_bar = 50;
			this.space_raised = false;
		}
	}

	initialPlace(){
		this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
		this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
	}

	//function that returns true if the player is hit by the ball, else false, if the ball touches the ballHitbox the ball's
	//velocity is changed accordingly
	ball_collision(ball){
		if(ball.y>WorldObject.cheight/9){
			//collision with ball without spacebar
			if(this.active_bar<=0 && ball.bitmap.getBounds().intersects(this.hitboxPJ.getBounds())){
				return true;
			}
			else{
				var rectangle = ball.bitmap.getBounds().intersection(this.hitboxB.getBounds());
				if(rectangle != null){//ball is touched
					var touch_point = rectangle.x + (rectangle.width/2);
					var ratio = (((touch_point - this.Bbounds.x)/this.Bbounds.width)*2)-1;//ratio de -1 a 1
					var rebound_degre = ration*80;


					ball.direction.x = 1*sin(rebound_degre);
					ball.direction.y = 1*cos(rebound_degre);

					var magnitude = sqrt(ball.direction.x*ball.direction.x + ball.direction.y*ball.direction.y);

					//normalized
					ball.direction.x /= magnitude;
					ball.direction.y /= magnitude;

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

	Handling(){
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

	//test function, makes the obj move horizontally
	testMove(){
		this.Handling();
	}
}