class PJ extends Object{
	constructor(Xpos, Ypos, _angle, _speed, _create_time){ //angle from the vector (0,1)
		//atributes
		super("./ressources/pj.png");
		this.speed = _speed;

		/////////direction
		this.directionX = Math.sin(_angle*(Math.PI/180));
		this.directionY = -Math.cos(_angle*(Math.PI/180));

		var magnitude = Math.sqrt(this.directionX*this.directionX + this.directionY*this.directionY);
		//normalized
		this.directionX /= magnitude;
		this.directionY /= magnitude;
		/////////

		this.create_time = _create_time;
		this.time_alive = 0;

		this.bitmap.visible = false;

		this.bitmap.setTransform(Xpos, Ypos);
	}

	move(){
		console.log(this.bitmap.x + " " + this.bitmap.y + " : " + this.time_alive + " : " + this.bitmap.visible);
		if(this.time_alive >= this.create_time){
			this.bitmap.visible = true;
			this.bitmap.setTransform(this.bitmap.x+(this.directionX*this.speed),this.bitmap.y+(this.directionY*this.speed));
		}
		else
			this.time_alive++;
	}
}