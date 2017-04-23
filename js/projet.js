//canvas
var canvas;
var cwidth;
var cheight;
var stage;

var player;
var npb;

//var brick = [];
var levels;
var cpt_lvl;

function lost(){
	player.immuned = 100;
	// stage.removeAllChildren();
	// stage.update();
	// iahef.iuaef();
}

//*****************init function**************
function init(){
	//canvas
	canvas = document.getElementById("ProjectCanvas");

	cwidth = 800;
	WorldObject.cwidth = cwidth;
	canvas.width = cwidth;
	cheight = 600; // magic !!!
	WorldObject.cheight = cheight;
	canvas.height = cheight;
	canvas.style.marginLeft = ((window.innerWidth/2) - (cwidth/2)) + "px";
	canvas.style.marginTop = ((window.innerHeight - cheight)/2) + "px";

	stage = new createjs.Stage("ProjectCanvas");
	/////////////

	WorldObject.game_start = true; //0 start : 1 middle-game;

	player = new Player();
	player.draw(stage);

	//création de la NPB (modif)
	npb = new NPB();
	npb.draw(stage);
	
	WorldObject.hud = new HUD();
	WorldObject.hud.draw(stage);

	WorldObject.pjs = [];
	WorldObject.bonus = [];
	cpt_lvl= 1;
	levels= Level.loadLevels(cwidth, cheight, cpt_lvl);
	stage.update();
	document.getElementById("loading").style.visibility= "hidden";
	gameLoop();
}

//***********************************

//**************gameLoop*********************
function gameLoop() {

	if(!WorldObject.game_start){
		for(var i=0; i<WorldObject.pjs.length; ++i){
			WorldObject.pjs[i].move(player);
			if(WorldObject.pjs[i].collision_player(player) && player.immuned == 0)
				lost();
		}

		//déplacement -> collision -> correction
		if(player.Handling(npb, stage) && player.immuned == 0)
			lost();
		npb.move();

		//Collision: Collision Balle-Briques, Balle-Player, Proj-hauteurif->, 

		for(var i=0; i<levels.availableBricks.length; ++i)
			if (levels.availableBricks[i].ball_collision(npb, stage)==true) 
				levels.availableBricks.splice(i,1);

		for(var i=0; i<WorldObject.bonus.length; ++i){
			WorldObject.bonus[i].move(player, stage);
		}
	}
	else{
		player.Handling(npb, stage);
		npb.attachToPlayer(player);
	}

	if (levels.availableBricks.length==0){
		for(var i=0; i<WorldObject.bonus.length; ++i){
			stage.removeChild(WorldObject.bonus[i].bitmap);
			WorldObject.bonus[i].up = false;
		}
		document.getElementById("loading").style.visibility= "";
		npb.speed = 0;
		//player.shock_wave_meter=3;			????
		//player.shock_wave_meter_shot=1;
		player.shockwave();
		console.log("yoyo");
		//player.shock_wave_meter=0;
		endGame();
	}
	else {
		stage.update();
		setTimeout(gameLoop, 10);
	}
}

//************************

function endGame() {
	player.Handling(npb, stage);
	stage.update();
	if (player.shock_wave==-1)
		nextLevel();
	else
		setTimeout(endGame, 10);
}

function nextLevel() {
	npb.speed = 0;
	npb.directionX = 0;
	npb.directionY = (-1);
	npb.initialPlace();
	player.initialPlace();			// en dessous du sol ????

	cpt_lvl++;
	levels= Level.loadLevels(cwidth, cheight, cpt_lvl);
	stage.update();
	npb.speed=3;
	document.getElementById("loading").style.visibility= "hidden";
	gameLoop();	

}

