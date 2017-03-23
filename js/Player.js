class Player{
	constructor(_img){
		//atributes
		this.hitboxPJ; //hitbox projectiles
		this.hitboxB; //hitbox ball
		this.PJbounds;
		this.Bbounds;
		//////////

	    //load the bitmap
	    this.hitboxPJ = new createjs.Bitmap(_img);
	    this.PJbounds = this.hitboxPJ.getBounds();
	    //places the bitmap
	    this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2);
		this.hitboxPJ.setTransform(WorldObject.cheight-this.PJbounds.height);





	    //test boolean
	    this.dir = true;
	}

	initialPlace(){
		this.hitboxPJ.setTransform(WorldObject.cwidth/2-this.PJbounds.width/2);
		this.hitboxPJ.setTransform(WorldObject.cheight-this.PJbounds.height);
	}

	draw(_stage){
		_stage.addChild(this.hitboxPJ);
	}

	//test function, makes the obj move horizontally
	testMove(cwidth){
		if(this.hitboxPJ.x > (cwidth - this.PJbounds.width) && this.dir) this.dir = !this.dir;
		else if(this.hitboxPJ.x < 0 && !this.dir) this.dir = !this.dir;

		if(this.dir) this.hitboxPJ.setTransform(this.hitboxPJ.x+1);
		else this.hitboxPJ.setTransform(this.hitboxPJ.x-1);
	}

}