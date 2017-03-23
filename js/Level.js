class Level{

	constructor(cwidth, cheight){
		//atributes
		this.bricks = []; //array of bricks
		for(var i=0; i<this.bricks.length; ++i){
			this.brikcs[i] = null;
		}
		this.availableBricks = []; //array of bool for wich brick can be hit
		this.bricks_on_width = 10;
		this.bricks_on_height = 10;

		//////////
	}

	//returns an array of levels
	static loadLevels(cwidth, cheight){
		var levels = [];
		levels.append(level1(cwidth, cheight));
		levels.append(level2(cwidth, cheight));
		levels.append(level3(cwidth, cheight));
		return levels
	}


	


	

	




	

	//returns true if the level is over
	isOver(){
		return this.bricks.length == 0;
	}

	/////////////////////////////LEVELS
	//returns a Level

	static level1(cwidth, cheight){

		var level = new Level();

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