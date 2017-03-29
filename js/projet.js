//canvas
var canvas;
var cwidth;
var cheight;
var stage;

var obj;
var player;

//*****************init function**************
function init(){
	//canvas
	canvas = document.getElementById("ProjectCanvas");

	cwidth = window.innerWidth/5;
	WorldObject.cwidth = window.innerWidth/5;
	canvas.width = cwidth;
	cheight = window.innerHeight;
	WorldObject.cheight = window.innerHeight;
	canvas.height = cheight;
	canvas.style.marginLeft = ((window.innerWidth/2) - (cwidth/2)) + "px";

	stage = new createjs.Stage("ProjectCanvas");
	/////////////

	obj = new Object("../ressources/test.jpg");
	obj.draw(stage);
	player = new Player("../ressources/test2.jpg");
	player.draw(stage);

	stage.update();
	gameLoop();
}

//***********************************

//**************gameLoop*********************
function gameLoop() {

	obj.testMove(cwidth);
	player.testMove(cheight);

	//déplacement -> collision -> correction
	//Déplacement: Move d'un frame pour tous les NPB + input joueur


	//Collision: Collision Balle-Briques, Balle-Player, Proj-hauteurif->Player/map, 

	//Correction: Briques.lvl -1/remove, Player.life -1/Game OVer, clean proj outside map, Balle direction and position

	stage.update();
	setTimeout(gameLoop, 10);
}
//************************