class Player{
	constructor(_img){
		//atributes
		this.hitboxPJ; //hitbox projectiles
		this.hitboxB; //hitbox ball
		this.PJbounds;
		this.Bbounds;
		this.direction = 0; //-1 left 0 no movement 1 right
		this.active_bar = 0; //ball bar activation timer
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
		document.onkeyup = (e) => {this.keys[e.keyCode] = false;};



		//test boolean
		this.dir = true;
	}

	keyPressed(){

		if(this.keys[37])//left key
			if(!this.keys[16])
				this.direction = -2;
			else
				this.direction = -4;

		if(this.keys[39])//right key
			if(!this.keys[16])
				this.direction = 2;
			else
				this.direction = 4;

		if(!this.keys[37] && !this.keys[39]) this.direction = 0;

		if(this.keys[32] && this.active_bar<=0)
			this.active_bar = 50;
	}

	initialPlace(){
		this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
		this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
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
			if(this.active_bar == 0){
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