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

	player = new Player();
	player.draw(stage);

	//création de la NPB (modif)
	npb = new NPB();
	npb.draw(stage);

	WorldObject.pjs = [];
	WorldObject.bonus = [];
	cpt_lvl= 2;
	levels= Level.loadLevels(cwidth, cheight, cpt_lvl);
	stage.update();
	document.getElementById("loading").style.visibility= "hidden";
	gameLoop();
}

//***********************************

//**************gameLoop*********************
function gameLoop() {

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

	
	stage.update();
	setTimeout(gameLoop, 10);
}
//************************
