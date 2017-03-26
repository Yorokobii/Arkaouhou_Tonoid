class Player{
	constructor(_img){
		//atributes
		this.hitboxPJ; //hitbox projectiles
		this.hitboxB; //hitbox ball
		this.PJbounds;
		this.Bbounds;
		//////////

	    //load the bitmap
	    this.hitboxPJ = new createjs.Bitmap("../ressources/player_hitboxPJ.jpg");
	    this.hitboxB = new createjs.Bitmap("../ressources/player_hitboxB.jpg");
	    this.PJbounds = this.hitboxPJ.getBounds();
	    this.Bbounds = this.hitboxB.getBounds();
	    //places the bitmap
	    this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
	    this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));

	    

	    document.onkeydown = this.keyPressed;



	    //test boolean
	    this.dir = true;
	}

	keyPressed(event){
    	switch(event.keyCode) {
			case 37: //left key
				this.hitboxB.x -= 1;
				this.hitboxPJ.x -= 1;
				break;
			case 39: //right key
				this.hitboxB.x += 1; 
				this.hitboxPJ.x += 1;
				break;
		}
    }

	initialPlace(){
		this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
	    this.hitboxB.setTransform(WorldObject.cwidth/2-this.Bbounds.width/2, WorldObject.cheight - (WorldObject.cheight/10));
	}

	draw(_stage){
		_stage.addChild(this.hitboxB);
		_stage.addChild(this.hitboxPJ);
	}

	//test function, makes the obj move horizontally
	testMove(){
		/*if(this.hitboxB.x > (WorldObject.cwidth - this.Bbounds.width) && this.dir) this.dir = !this.dir;
		else if(this.hitboxB.x < 0 && !this.dir) this.dir = !this.dir;

		if(this.dir){
			this.hitboxB.setTransform(this.hitboxB.x+1, this.hitboxB.y); //move ball bar
			this.hitboxPJ.setTransform(this.hitboxPJ.x+1, this.hitboxPJ.y); //move PJ bar
		}
		else{
			this.hitboxB.setTransform(this.hitboxB.x-1, this.hitboxB.y);//move ball bar
			this.hitboxPJ.setTransform(this.hitboxPJ.x-1, this.hitboxPJ.y); //move PJ bar
		}*/
	}

}