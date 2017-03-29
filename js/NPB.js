class NPB extends Object{
	constructor(_img){
		//atributes
		super();
		this.speed;

		this.bitmap = new createjs.Bitmap(_img);

	    this.bounds = this.bitmap.getBounds();

	    this.dir = false;
	}

	draw(_stage){
		_stage.addChild(this.bitmap);
	}
}