class Bonus extends Object{
	constructor(posX, posY, _rand){
		//atributes
		super("ressources/bonus.png");

		this.bitmap.setTransform(posX, posY);

		this.rand = _rand;
		this.up = true;
	}

	static new_bonus(posX, posY, stage){
		var rand = Math.random()*100;
		if(rand >= 90){
			var size = WorldObject.bonus.length;
			WorldObject.bonus.push(new Bonus(posX, posY, rand));
			WorldObject.bonus[size].draw(stage);
		}
	}

	move(player, stage){
		this.bitmap.y+=3;
		if(this.loaded && this.up && this.bitmap.y > WorldObject.cheight - WorldObject.cheight/10)
			if(this.bitmap.getTransformedBounds().intersects(player.hitboxPJ.getTransformedBounds())){
				if(player.shock_wave_meter < player.shock_wave_meter_max){
					player.shock_wave_meter += 1;
					WorldObject.score_change(20);
					WorldObject.hud.refresh(player, null);
				}
				stage.removeChild(this.bitmap);
				this.up = false;
			}
	}
}