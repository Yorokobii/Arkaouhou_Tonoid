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
	    	this.bounds = this.bitmap.getTransformedBounds();
	    	this.loaded = true;
	    }
	}

	draw(_stage){
		_stage.addChild(this.bitmap);
	}
}