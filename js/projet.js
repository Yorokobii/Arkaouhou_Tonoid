//canvas
var canvas;
var cwidth;
var cheight;
var stage;

var player;
var npb;

var brick = [];

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
	npb = new NPB();
	npb.draw(stage);

	WorldObject.pjs = [];

	brick.push(new Brick(2, 200, 200));
	for(var i=0; i<brick.length; ++i)
		brick[i].draw(stage);

	stage.update();
	gameLoop();
}

//***********************************

//**************gameLoop*********************
function gameLoop() {

	for(var i=0; i<WorldObject.pjs.length; ++i){
		WorldObject.pjs[i].move();
		if(WorldObject.pjs[i].collision_player(player)){
			stage.removeAllChildren();
			stage.update();
			iahef.iuaef();
		}		
	}

	for(var i=0; i<brick.length; ++i)
		brick[i].ball_collision(npb, player, stage);

	//déplacement -> collision -> correction
	if(player.Handling(npb)){
		stage.removeAllChildren();
		stage.update();
		iahef.iuaef();
	}
	npb.move();

	//Collision: Collision Balle-Briques, Balle-Player, Proj-hauteurif->, 
	

	//Correction: Briques.lvl -1/remove, Player.life -1/Game OVer, clean proj outside map, Balle direction and position
	
	stage.update();
	setTimeout(gameLoop, 10);
}
//************************