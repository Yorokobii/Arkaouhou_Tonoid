class PJ extends Object{
	constructor(Xpos, Ypos, _angle, _angle_from_player, _speed, _create_time){ //angle from the vector (0,1)
		//atributes
		super("ressources/pj.png");
		this.speed = _speed;

		this.angle_from_player = _angle_from_player;

		if(_angle != null){
			/////////direction
			this.directionX = Math.sin(_angle*(Math.PI/180));
			this.directionY = -Math.cos(_angle*(Math.PI/180));

			var magnitude = Math.sqrt(this.directionX*this.directionX + this.directionY*this.directionY);
			//normalized
			this.directionX /= magnitude;
			this.directionY /= magnitude;
			/////////
		}
		else{
			this.directionX = null;
			this.directionY = null;
		}

		this.create_time = _create_time;
		this.time_alive = 0;

		this.bitmap.visible = false;

		this.bitmap.setTransform(Xpos, Ypos, WorldObject.scaleX, WorldObject.scaleY);
	}

	move(player){
		if(this.loaded){
			if((this.time_alive == this.create_time) && this.directionX == null){
				var VX = ((player.hitboxPJ.x + (player.PJbounds.width/2)) - (this.bitmap.x));
				var VY = -((player.hitboxPJ.y + (player.PJbounds.height/2)) - (this.bitmap.y));

				var cos = VY/Math.sqrt(VX*VX + VY*VY);
				var angle;
				if(VX > 0)
					angle = Math.acos(cos)/(Math.PI/180);
				else
					angle = -Math.acos(cos)/(Math.PI/180);

				angle += this.angle_from_player;

				/////////direction
				this.directionX = Math.sin(angle*(Math.PI/180));
				this.directionY = -Math.cos(angle*(Math.PI/180));

				var magnitude = Math.sqrt(this.directionX*this.directionX + this.directionY*this.directionY);
				//normalized
				this.directionX /= magnitude;
				this.directionY /= magnitude;
				/////////
			}
			if(this.time_alive >= this.create_time){
				this.bitmap.visible = true;
				this.bitmap.setTransform(this.bitmap.x+(this.directionX*this.speed),this.bitmap.y+(this.directionY*this.speed), WorldObject.scaleX, WorldObject.scaleY);

				//collisions

				if(this.bitmap.x < 0 || this.bitmap.x > WorldObject.cwidth - this.bounds.width){//left || right
					this.directionX = -this.directionX;
				}
				if(this.bitmap.y < 50){//up
					this.directionY = -this.directionY;
				}
				else if(this.bitmap.y > WorldObject.cheight){
					WorldObject.score_change(1);
					WorldObject.pjs.splice(WorldObject.pjs.indexOf(this),1);
				}
				//////
			}
			else
				this.time_alive++;
		}
	}

	collision_player(player){
		if(this.bitmap.y > WorldObject.cheight - WorldObject.cheight/10){
			var pbounds = player.hitboxPJ.getTransformedBounds();
			if(this.bitmap.getTransformedBounds().intersects(player.hitboxPJ.getTransformedBounds().setValues(pbounds.x + ((pbounds.width - 2)/2), pbounds.y + ((pbounds.height - 2)/2), 2, 2)) && player.immuned <= 0){
				player.life--;
				WorldObject.hud.refresh(player);
				return true;
			}
			else return false;
		}
		else return false;
	}
}