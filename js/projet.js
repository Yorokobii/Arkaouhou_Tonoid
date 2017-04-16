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
	cpt_lvl= 1;
	levels= Level.loadLevels(cwidth, cheight, cpt_lvl);
	//levels[cpt_lvl];
	/*brick.push(new Brick(6, 0, 4));
	brick.push(new Brick(6, 1, 4));
	brick.push(new Brick(6, 2, 4));
	brick.push(new Brick(6, 3, 4));
	brick.push(new Brick(6, 4, 4));
	brick.push(new Brick(6, 5, 4));
	brick.push(new Brick(6, 6, 4));
	brick.push(new Brick(6, 7, 4));
	brick.push(new Brick(6, 8, 4));
	brick.push(new Brick(6, 9, 4));
	brick.push(new Brick(6, 10, 4));
	brick.push(new Brick(6, 11, 4));
	for(var i=0; i<brick.length; ++i)
		brick[i].draw(stage);

	stage.update();*/
	console.log(levels.availableBricks.length);
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
	if(player.Handling(npb) && player.immuned == 0)
		lost();
	npb.move();

	//Collision: Collision Balle-Briques, Balle-Player, Proj-hauteurif->, 

	for(var i=0; i<levels.availableBricks.length; ++i)
		if (levels.availableBricks[i].ball_collision(npb, player, stage)==true) {
			levels.availableBricks.splice(i,1);
			console.log(levels.availableBricks.length);
		}

	

	//Correction: Briques.lvl -1/remove, Player.life -1/Game OVer, clean proj outside map, Balle direction and position
	
	stage.update();
	setTimeout(gameLoop, 10);
}
//************************
