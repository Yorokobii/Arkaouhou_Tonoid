class Brick extends Object{
	constructor(_level, _x, _y){
		//atributes
		super();

		this.bitmap;
		this.bounds;

		this.level = _level;
		
		this.level_img = "brick_level_" + this.level;

		this.bitmap = new createjs.Bitmap(this.level_img);

		this.bitmap.image.onload = () => {
			this.bounds = this.bitmap.getBounds();
			//places the bitmap
			this.bitmap.setTransform(_x, _y);
		}

	}

	draw(_stage){
		_stage.addChild(this.bitmap);
	}

	new_brick(_level){
		this.level_img = "brick_level_" + this.level;

		this.bitmap = new createjs.Bitmap(this.level_img);

		this.bitmap.image.onload = () => {
			this.bounds = this.bitmap.getBounds();
			//places the bitmap
			this.bitmap.setTransform(_x, _y);
		}
	}

	// collision
	ball_collision(ball){
		if(ball.bitmap.getBounds().intersects(this.ball.getBounds())){//intersection
			var pattern = new Pattern(this.level);
			this.level--;
			if(this.level == 0){
				var _x = this.bitmap.x;
				var _y = this.bitmap.y;

				this.new_brick(this.level);
			}
		}
	}
}