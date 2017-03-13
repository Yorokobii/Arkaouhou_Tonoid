class Object{
	constructor(_img){
		//atributes
		this.bitmap;
		this.width;
		this.height;
		//////////

	    //load the bitmap
	    this.bitmap = new createjs.Bitmap(_img);

	    var bounds = this.bitmap.getBounds();
	    this.width = bounds.width;
	    this.height = bounds.height;
	}

	draw(_stage){
		_stage.addChild(this.player_bitmap);
	}

	test(){
		console.log(this.width);
		console.log(this.height);
	}
}