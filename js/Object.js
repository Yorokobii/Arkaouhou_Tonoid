class Object{
	constructor(_img, scaleX, scaleY){
		//atributes
		this.bitmap;
		this.bounds;
		this.loaded = false;
		//////////

	    //load the bitmap

	    this.bitmap = new createjs.Bitmap(_img);

	    this.bitmap.image.onload = () => {
	    	// this.bitmap.scaleX = scaleX;
	    	// this.bitmap.scaleY = scaleY;
	    	this.bounds = this.bitmap.getTransformedBounds();
	    	this.loaded = true;
	    }
	}

	draw(_stage){
		_stage.addChild(this.bitmap);
	}
}