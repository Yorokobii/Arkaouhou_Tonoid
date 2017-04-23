class Level{

	constructor(cwidth, cheight){
		//atributes
		this.bricks = []; //array of bricks
		this.availableBricks = []; //array of bool for which brick can be hit
		this.bricks_on_width = 10;
		this.bricks_on_height = 10;

		//liste/tableau de projectiles
		//////////
	}

	//returns the level created
	static loadLevels(cwidth, cheight, cpt_lvl){
		if (cpt_lvl==1)
			return Level.level1(cwidth, cheight);
		else if (cpt_lvl==2)
			return Level.level2(cwidth, cheight);
		else if (cpt_lvl==3)
			return Level.level3(cwidth, cheight);


	}


	


	

	




	

	//returns true if the level is over
	isOver(){
		return this.bricks.length == 0;
	}

	/////////////////////////////LEVELS
	//returns a Level

	static level1(cwidth, cheight){

		var level = new Level();
		level.bricks.push(new Brick(1, 0, 4));
		level.bricks.push(new Brick(2, 1, 4));
		level.bricks.push(new Brick(3, 2, 4));
		level.bricks.push(new Brick(4, 3, 4));
		level.bricks.push(new Brick(5, 4, 4));
		level.bricks.push(new Brick(6, 5, 4));
		level.bricks.push(new Brick(6, 6, 4));
		level.bricks.push(new Brick(5, 7, 4));
		level.bricks.push(new Brick(4, 8, 4));
		level.bricks.push(new Brick(3, 9, 4));
		level.bricks.push(new Brick(2, 10, 4));
		level.bricks.push(new Brick(1, 11, 4));
		for(var i=0; i<level.bricks.length; ++i){
			level.bricks[i].draw(stage);
			level.availableBricks.push(level.bricks[i]);
		}


		stage.update();
		return level;
	}

	static level2(cwidth, cheight){

		var level = new Level();
		level.bricks.push(new Brick(3, 5, 4));
		level.bricks.push(new Brick(3, 6, 4));
		level.bricks.push(new Brick(3, 4, 5));
		level.bricks.push(new Brick(3, 7, 5));
		level.bricks.push(new Brick(3, 4, 6));
		level.bricks.push(new Brick(3, 7, 6));
		level.bricks.push(new Brick(3, 3, 7));
		level.bricks.push(new Brick(3, 8, 7));
		level.bricks.push(new Brick(3, 3, 8));
		level.bricks.push(new Brick(3, 8, 8));
		level.bricks.push(new Brick(3, 4, 9));
		level.bricks.push(new Brick(3, 7, 9));
		level.bricks.push(new Brick(3, 4, 10));
		level.bricks.push(new Brick(3, 7, 10));
		level.bricks.push(new Brick(2, 5, 11));
		level.bricks.push(new Brick(2, 6, 11));
		level.bricks.push(new Brick(6, 0, 7));
		level.bricks.push(new Brick(6, 11, 7));
		level.bricks.push(new Brick(4, 5, 5));
		level.bricks.push(new Brick(4, 6, 5));
		level.bricks.push(new Brick(4, 5, 6));
		level.bricks.push(new Brick(4, 6, 6));
		level.bricks.push(new Brick(4, 5, 9));
		level.bricks.push(new Brick(4, 6, 9));
		level.bricks.push(new Brick(4, 5, 10));
		level.bricks.push(new Brick(4, 6, 10));
		level.bricks.push(new Brick(4, 4, 7));
		level.bricks.push(new Brick(4, 7, 7));
		level.bricks.push(new Brick(4, 4, 8));
		level.bricks.push(new Brick(4, 7, 8));
		level.bricks.push(new Brick(5, 5, 8));
		level.bricks.push(new Brick(5, 6, 8));
		level.bricks.push(new Brick(6, 5, 7));
		level.bricks.push(new Brick(6, 6, 7));
		for(var i=0; i<level.bricks.length; ++i){
			level.bricks[i].draw(stage);
			level.availableBricks.push(level.bricks[i]);
		}
		return level;
		
	}

	static level3(cwidth, cheight){

		var level = new Level();

		return level;
		
	}

	///////////////////////////////////
}