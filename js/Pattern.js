class Pattern{
	static new(_level, brick_posX, brick_posY, player){
		if(_level == 1){
			
			var VX = ((brick_posX + 32), (player.hitboxPJ.x + (player.PJbounds.width/2)));
			var VY = ((brick_posY + 32), (player.hitboxPJ.y + (player.PJbounds.height/2)));
			console.log(VX);
			console.log(VY);
			console.log((VX*VX + VY*VY));

			var cos = VY/Math.sqrt(VX*VX + VY*VY);
			var angle = Math.acos(cos)/(Math.PI/180);
			console.log(cos);
			console.log(angle);

			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, angle, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 0, 1, 25));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 0, 1, 50));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
				WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 2){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 1, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 3){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 1, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 1, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 1, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 1, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 1, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 1, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 1, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 1, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 1, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 1, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 1, 50));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 4){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 15, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 45, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 75, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 105, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 135, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 165, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 195, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 210, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 225, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 255, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 285, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 300, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 315, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 330, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 345, 2, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 5){
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 15, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 30, 3, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 45, 3, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 60, 3, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 75, 3, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 105, 3, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 3, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 135, 3, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 150, 3, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 165, 3, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 195, 3, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 210, 3, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 225, 3, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 3, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 255, 3, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 285, 3, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 300, 3, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 315, 3, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 330, 3, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 345, 3, 190));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
	}
}