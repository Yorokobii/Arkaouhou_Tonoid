//canvas
var canvas;
var cwidth;
var cheight;
var stage;

var player;
var npb;

//*****************init function**************
function init(){
	//canvas
	canvas = document.getElementById("ProjectCanvas");

	cwidth = window.innerWidth/3;
	WorldObject.cwidth = cwidth;
	canvas.width = cwidth;
	cheight = window.innerHeight-4; // magic !!!
	WorldObject.cheight = cheight;
	canvas.height = cheight;
	canvas.style.marginLeft = ((window.innerWidth/2) - (cwidth/2)) + "px";

	stage = new createjs.Stage("ProjectCanvas");
	/////////////

	player = new Player();
	player.draw(stage);

	//création de la NPB (modif)
	npb = new NPB("../ressources/npb2.png");
	npb.draw(stage);

	stage.update();
	gameLoop();
}

//***********************************

//**************gameLoop*********************
function gameLoop() {



	//déplacement -> collision -> correction
	player.Handling(npb);
	npb.move();


	//Collision: Collision Balle-Briques, Balle-Player, Proj-hauteurif->, 
	

	//Correction: Briques.lvl -1/remove, Player.life -1/Game OVer, clean proj outside map, Balle direction and position
	
	stage.update();
	setTimeout(gameLoop, 10);
}
//************************