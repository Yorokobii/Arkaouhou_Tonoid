class Pattern{
	static new(_level, brick_posX, brick_posY){
		if(_level == 1){

			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 3, 25));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 3, 50));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
				WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 2){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 3){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 120));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 4){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 0, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 15, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 45, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 135, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 165, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 195, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 210, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 225, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 2, 0));
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

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 15, 0, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 0, 1, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 45, 0, 1, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 0, 1, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 1, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 135, 0, 1, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 0, 1, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 165, 0, 1, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 1, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 195, 0, 1, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 210, 0, 1, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 225, 0, 1, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 1, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 300, 0, 1, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 315, 0, 1, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 330, 0, 1, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 345, 0, 1, 190));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 6){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 5, 3, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, -5, 3, 30));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 2, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 2, 140));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 7){
			var pjs_count = WorldObject.pjs.length;

			

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 8){
			var pjs_count = WorldObject.pjs.length;

			

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
	}
}