class Bonus extends Object{
	constructor(posX, posY){
		//atributes
		super("../ressources/test_bonus.png");

		this.bitmap.setTransform(posX, posY);

		this.rand;
	}

	static new_bonus(posX, posY){
		// this.rand = Math.random()*10;
		this.rand = 10;
		if(this.rand >= 5)
			WorldObject.bonus.push(new Bonus(posX, posY));
	}

	move(player, stage){
		this.bitmap.y+=5;
		if(this.loaded && this.bitmap.y > WorldObject.cheight - WorldObject.cheight/10)
			if(this.bounds.intersects(player.PJBounds)){
				bonus();
				stage.removeChild(this.bitmap);
			}
	}

	bonus(){
		if(this.rand >= 5){

		}
		//else if()
	}
}