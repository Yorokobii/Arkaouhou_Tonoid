class Pattern{
	static new(_level, brick_posX, brick_posY){
		if(_level == 1){

			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 1, 25));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 1, 50));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
				WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 2){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 0, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 1, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 3){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 0, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 1, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 0, 1, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 1, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 0, 1, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 1, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 1, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 50));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 4){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 15, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 45, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 75, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 105, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 135, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 165, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 195, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 210, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 225, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 255, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 285, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 300, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 315, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 330, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 345, 0, 2, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 5){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 15, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 0, 3, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 45, 0, 3, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 0, 3, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 75, 0, 3, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 105, 0, 3, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 135, 0, 3, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 0, 3, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 165, 0, 3, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 195, 0, 3, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 210, 0, 3, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 225, 0, 3, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 255, 0, 3, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 285, 0, 3, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 300, 0, 3, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 315, 0, 3, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 330, 0, 3, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 345, 0, 3, 190));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
	}
}