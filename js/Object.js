class Object{
	constructor(_img){
		//atributes
		this.bitmap;
		this.bounds;
		this.loaded = false;
		//////////

	    //load the bitmap
	    this.bitmap = new createjs.Bitmap(_img);
	    this.bitmap.image.onload = () => {
	    	this.bounds = this.bitmap.getBounds();
	    	this.loaded = true;
	    }

	    //test bool
	    this.dir = true;
	}

	draw(_stage){
		_stage.addChild(this.bitmap);
	}

	//test function, makes the obj move horizontally
	testMove() {
		if(this.loaded){
			if(this.bitmap.x > (cwidth - this.bounds.width) && this.dir) this.dir = !this.dir;
			else if(this.bitmap.x < 0 && !this.dir) this.dir = !this.dir;

			if(this.dir) this.bitmap.setTransform(this.bitmap.x+1);
			else this.bitmap.setTransform(this.bitmap.x-1);
		}
	}

}