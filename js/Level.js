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
		level.bricks.push(new Brick(6, 0, 4));
		level.bricks.push(new Brick(6, 1, 4));
		level.bricks.push(new Brick(6, 2, 4));
		level.bricks.push(new Brick(6, 3, 4));
		level.bricks.push(new Brick(6, 4, 4));
		level.bricks.push(new Brick(6, 5, 4));
		level.bricks.push(new Brick(6, 6, 4));
		level.bricks.push(new Brick(6, 7, 4));
		level.bricks.push(new Brick(6, 8, 4));
		level.bricks.push(new Brick(6, 9, 4));
		level.bricks.push(new Brick(6, 10, 4));
		level.bricks.push(new Brick(6, 11, 4));
		for(var i=0; i<level.bricks.length; ++i){
			level.bricks[i].draw(stage);
			level.availableBricks.push(level.bricks[i]);
		}


		stage.update();
		return level;
	}

	static level2(cwidth, cheight){

		var level = new Level();

		return level;
		
	}

	static level3(cwidth, cheight){

		var level = new Level();

		return level;
		
	}

	///////////////////////////////////
}