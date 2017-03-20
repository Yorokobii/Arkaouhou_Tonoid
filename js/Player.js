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

	    this.dir = true;
	}

	draw(_stage){
		_stage.addChild(this.hitboxPJ);
	}

	//test function, makes the player move vertically
	testMove(cheight){
		if(this.hitboxPJ.y > (cheight - this.PJbounds.height) && this.dir) this.dir = !this.dir;
		else if(this.hitboxPJ.y < 0 && !this.dir) this.dir = !this.dir;

		if(this.dir) this.hitboxPJ.setTransform(0, this.hitboxPJ.y+1);
		else this.hitboxPJ.setTransform(0, this.hitboxPJ.y-1);
	}

}