class HUD extends Object{
	constructor(posX, posY, _rand){
		//atributes
		super("ressources/HUD.png");

		this.ball_speed = new createjs.Shape();
		this.ball_speed.graphics.beginFill("green").drawRect(400, 5, 400, 40);

		this.power_meter = new createjs.Shape();
		this.power_meter.graphics.beginFill("white").drawRect(10, 10, 99, 30);

		this.power_meter_count = new createjs.Shape();

		this.lifes = [
			{first: new createjs.Bitmap("ressources/5h.png"), second: new createjs.Bitmap("ressources/3-4h.png"), third: new createjs.Bitmap("ressources/1-2h.png")},
			{first: new createjs.Bitmap("ressources/5h.png"), second: new createjs.Bitmap("ressources/3-4h.png"), third: new createjs.Bitmap("ressources/1-2h.png")},
			{first: new createjs.Bitmap("ressources/5h.png"), second: new createjs.Bitmap("ressources/3-4h.png"), third: null},
			{first: new createjs.Bitmap("ressources/5h.png"), second: new createjs.Bitmap("ressources/3-4h.png"), third: null},
			{first: new createjs.Bitmap("ressources/5h.png"), second: null, third: null}
		]

		this.lifes.forEach(function(life){
			life.first.visible = true;
			if(life.second)
				life.second.visible = false;
			if(life.third)
				life.third.visible = false;
		});

		this.lifes[0].first.setTransform(150, 0, 0.1, 0.1);
		this.lifes[0].second.setTransform(150, 0, 0.09, 0.09);
		this.lifes[0].third.setTransform(150, 0, 0.09, 0.09);

		this.lifes[1].first.setTransform(210, 0, 0.1, 0.1);
		this.lifes[1].second.setTransform(210, 0, 0.09, 0.09);
		this.lifes[1].third.setTransform(210, 0, 0.09, 0.09);

		this.lifes[2].first.setTransform(270, 0, 0.1, 0.1);
		this.lifes[2].second.setTransform(270, 0, 0.09, 0.09);

		this.lifes[3].first.setTransform(330, 0, 0.1, 0.1);
		this.lifes[3].second.setTransform(330, 0, 0.09, 0.09);

		this.lifes[4].first.setTransform(390, 0, 0.1, 0.1);

		this.current_lives = 5;
	}

	draw(_stage){
		_stage.addChild(this.ball_speed);
		_stage.addChild(this.bitmap);
		_stage.addChild(this.power_meter);
		_stage.addChild(this.power_meter_count);

		this.lifes.forEach(function(life){
			_stage.addChild(life.first);
			if(life.second)
				_stage.addChild(life.second);
			if(life.third)
				_stage.addChild(life.third);
		});
	}

	refresh(player, ball){
		if(player != null){
			//vie du joueur
			if(player.life != this.current_lives){
				this.current_lives = player.life;

				//all hidden
				this.lifes.forEach(function(life){
					life.first.visible = false;
					if(life.second)
						life.second.visible = false;
					if(life.third)
						life.third.visible = false;
				});

				//show les bons bitmaps
				for(var i=0; i<player.life; ++i){
					if(player.life > 4)
						this.lifes[i].first.visible = true;
					else if(player.life > 2){
						if(this.lifes[i].second)
							this.lifes[i].second.visible = true;
					}
					else{
						if(this.lifes[i].third)
							this.lifes[i].third.visible = true;
					}
				}
			}

			//power
			this.power_meter_count.graphics.clear();
			this.power_meter_count.graphics.beginFill("red").drawRect(10, 10, player.shock_wave_meter*33, 30);
		}

		if(ball != null){
			//vitesse de la balle
			if(ball.speed <= 2){
				this.ball_speed.graphics.clear();
				this.ball_speed.graphics.beginFill("#FF0000").drawRect(400, 5, 400, 40);
			}
			else if(ball.speed <= 2.5){
				this.ball_speed.graphics.clear();
				this.ball_speed.graphics.beginFill("#FF8000").drawRect(400, 5, 400, 40);
			}
			else if(ball.speed <= 3){
				this.ball_speed.graphics.clear();
				this.ball_speed.graphics.beginFill("#FFFF00").drawRect(400, 5, 400, 40);
			}
			else if(ball.speed > 3){
				this.ball_speed.graphics.clear();
				this.ball_speed.graphics.beginFill("green").drawRect(400, 5, 400, 40);
			}
		}

	}

	reset(){
		this.lifes.forEach(function(life){
			life.first.visible = true;
			if(life.second)
				life.second.visible = false;
			if(life.third)
				life.third.visible = false;
		});

		this.ball_speed.graphics.clear();
		this.ball_speed.graphics.beginFill("green").drawRect(400, 5, 400, 40);

		this.power_meter_count = 0;
	}
}