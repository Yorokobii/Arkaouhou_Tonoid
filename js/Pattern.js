class Pattern{
	static new(_level, brick_posX, brick_posY, player){
		if(_level == 1){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -180, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 2, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
				WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 2){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -10, 2, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -20, 2, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -30, 2, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -40, 2, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -50, 2, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -60, 2, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -70, 2, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -80, 2, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -100, 2, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -110, 2, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -120, 2, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -130, 2, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -140, 2, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -150, 2, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 2, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -170, 2, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -180, 2, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 10, 2, 190));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 20, 2, 200));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 2, 210));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 40, 2, 220));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 50, 2, 230));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 2, 240));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 70, 2, 250));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 80, 2, 260));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 100, 2, 280));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 110, 2, 290));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 2, 300));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 130, 2, 310));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 2, 320));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 2, 330));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 2, 340));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 170, 2, 350));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 3){
			
		}
		else if(_level == 4){
			
		}
		else if(_level == 5){
			
		}
	}
}