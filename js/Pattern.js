class Pattern{
	static new(_level, brick_posX, brick_posY){
		if(_level == 1){ // trois projectiles vers le joueur

			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 3, 25));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, null, 0, 3, 50));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
				WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 2){ // trois projectiles /|\
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, -160, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 0));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 3){ // vagues de deux projectiles autoue du joueur
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
		else if(_level == 4){ // onde en rond
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
		else if(_level == 5){ //spirale
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
		else if(_level == 6){ // zigzag + deux vagues autour du joueur
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
		else if(_level == 7){ // barres de projectiles dans 4 angles
			var pjs_count = WorldObject.pjs.length;

			//barre interieur gauche
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 190));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 2, 200));

			//barre interieur droite
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 190));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 2, 200));

			//barre milieu
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 50));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 110));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 170));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 190));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 2, 200));

			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
		else if(_level == 8){ //spirale de barres
			var pjs_count = WorldObject.pjs.length;

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 0));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 10));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 20));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 30));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 40));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 240, 0, 3, 50));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 3, 60));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 3, 70));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 3, 80));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 3, 90));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 3, 100));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 220, 0, 3, 110));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 3, 120));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 3, 130));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 3, 140));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 3, 150));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 3, 160));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 200, 0, 3, 170));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 180));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 190));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 200));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 210));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 220));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 180, 0, 3, 230));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 240));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 250));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 260));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 270));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 280));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 160, 0, 3, 290));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 3, 300));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 3, 310));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 3, 320));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 3, 330));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 3, 340));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 140, 0, 3, 350));

			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 360));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 370));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 380));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 390));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 400));
			WorldObject.pjs.push(new PJ(brick_posX+24, brick_posY, 120, 0, 3, 410));


			for(var i=pjs_count; i<WorldObject.pjs.length; ++i){
	 			WorldObject.pjs[i].draw(stage);
			}
		}
	}
}