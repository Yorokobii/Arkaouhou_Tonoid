class Brick extends Object{
	constructor(_level, _x, _y){
		//atributes
		super("../ressources/brick_level_" + _level + ".jpg");

		this.bitmap.setTransform(_x, _y);

		this.level = _level;
	}

	new_brick(_level, _x, _y){
		this.level_img = "../ressources/brick_level_" + this.level + ".jpg";

		this.bitmap = new createjs.Bitmap(this.level_img);

		this.bitmap.image.onload = () => {
			this.bounds = this.bitmap.getBounds();
			//places the bitmap
			this.bitmap.setTransform(_x, _y);
		}
	}

	// takes the ball as argument and returns true if the brick is a level 0, else false
	ball_collision(ball){
		var rect = ball.bitmap.getBounds().intersection(this.ball.getBounds());
		if(rect != null){//intersection
			//deviate the ball
			if(rect.width >= rect.height){ //hit from top
				ball.direction.y = -ball.direction.y;
			}
			else{//hit from side
				ball.direction.x = -ball.direction.x;
			}			
			//throw pattern
			Pattern.new(this.level);
			this.level--;
			if(this.level == 0){
				return true;
			}
			else{
				var _x = this.bitmap.x;
				var _y = this.bitmap.y;

				this.new_brick(this.level, _x, _y); //loads the bitmap for the corresponding level
				return false;		
			}
		}
		else{
			return false;
		}
	}
}