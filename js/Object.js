class Object{
	constructor(_img){
		//atributes
		this.bitmap;
		this.bounds;
		//////////

	    //load the bitmap
	    this.bitmap = new createjs.Bitmap(_img);

	    this.bounds = this.bitmap.getBounds();

	    this.dir = true;
	}

	draw(_stage){
		_stage.addChild(this.bitmap);
	}

	//hides or displays the bitmap 
	hide(bool){
		this.bitmap.visible = bool;
	}

	//return true if hidden else false 
	hidden(){
		return this.bitmap.visible;
	}

	//test function, makes the obj move horizontally
	testMove(cwidth){
		if(this.hidden()){
			if(this.bitmap.x > (cwidth - this.bounds.width) && this.dir) this.dir = !this.dir;
			else if(this.bitmap.x < 0 && !this.dir) this.dir = !this.dir;
	
			if(this.dir) this.bitmap.setTransform(this.bitmap.x+1);
			else this.bitmap.setTransform(this.bitmap.x-1);
		}
	}

}