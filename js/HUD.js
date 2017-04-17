class HUD extends Object{
	constructor(posX, posY, _rand){
		//atributes
		super("../ressources/HUD.jpg");

		this.power_meter = new createjs.Shape();
		this.power_meter.graphics.beginFill("white").drawRect(10, 10, 99, 30);

		this.power_meter_count = new createjs.Shape();

		this.life1 = new createjs.Bitmap("../ressources/1-2h.png");
		this.life1.setTransform(150, 0, 0.09, 0.09);
		this.life2 = new createjs.Bitmap("../ressources/1-2h.png");
		this.life2.setTransform(190, 0, 0.09, 0.09);
		this.life3 = new createjs.Bitmap("../ressources/3-4h.png");
		this.life3.setTransform(230, 0, 0.09, 0.09);
		this.life4 = new createjs.Bitmap("../ressources/3-4h.png");
		this.life4.setTransform(280, 0, 0.09, 0.09);
		this.life5 = new createjs.Bitmap("../ressources/5h.png");
		this.life5.setTransform(330, 0, 0.1, 0.1);
	}

	draw(_stage){
		_stage.addChild(this.bitmap);
		_stage.addChild(this.power_meter);
		_stage.addChild(this.power_meter_count);
		_stage.addChild(this.life1);
		_stage.addChild(this.life2);
		_stage.addChild(this.life3);
		_stage.addChild(this.life4);
		_stage.addChild(this.life5);
	}

	refresh(player){
		//vie du joueur

		//power
		this.power_meter_count.graphics.clear();
		this.power_meter_count.graphics.beginFill("red").drawRect(10, 10, player.shock_wave_meter*33, 30);
	}

	reset(){
		this.life1.visible = true;
		this.life2.visible = true;
		this.life3.visible = true;
		this.life4.visible = true;
		this.life5.visible = true;

		this.power_meter_count = 0;
	}
}