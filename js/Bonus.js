class Bonus extends Object{
	constructor(posX, posY, _rand){
		//atributes
		super("../ressources/test_bonus.png");

		this.bitmap.setTransform(posX, posY);

		this.rand = _rand;
		this.up = true;
	}

	static new_bonus(posX, posY, stage){
		var rand = 100;//Math.random()*100;
		if(rand >= 95){
			var size = WorldObject.bonus.length;
			WorldObject.bonus.push(new Bonus(posX, posY, rand));
			WorldObject.bonus[size].draw(stage);
		}
	}

	move(player, stage){
		this.bitmap.y+=3;
		if(this.loaded && this.up && this.bitmap.y > WorldObject.cheight - WorldObject.cheight/10)
			if(this.bitmap.getTransformedBounds().intersects(player.hitboxPJ.getTransformedBounds())){
				if(player.shock_wave_meter < player.shock_wave_meter_max)
					player.shock_wave_meter += 1;
				stage.removeChild(this.bitmap);
				this.up = false;
			}
	}

	bonus(){
		if(this.rand >= 95){
			
		}
		//else if()
	}
}