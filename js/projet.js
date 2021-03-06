//canvas
var canvas;
var cwidth;
var cheight;
var stage;

var player;
var npb;

var pause_screen;

//var brick = [];
var levels;
var cpt_lvl;

function lost(){
	player.immuned = 100;
	WorldObject.score_change(-150);
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
	WorldObject.pause = false;
	WorldObject.end = false;
	WorldObject.skip = 0;
	pause_screen = new createjs.Bitmap("ressources/pause.png");
	pause_screen.visible = false;
	stage.addChild(pause_screen);

	player = new Player();
	player.draw(stage);

	//création de la NPB (modif)
	npb = new NPB();
	npb.draw(stage);
	
	WorldObject.mult = 1;
	WorldObject.score = 0;
	WorldObject.score_txt = new createjs.Text("score : "+WorldObject.score, "20px Comic Sans MS", "#000000");
	WorldObject.score_txt.x = 2;
	WorldObject.score_txt.y = 52;

	WorldObject.score_change = function(points){
		if(points < -1)
			WorldObject.mult = 1;
		if(points > 0)
			WorldObject.score += points*WorldObject.mult;
		else
			WorldObject.score += points;
		WorldObject.score_txt.text = "score : "+Math.floor(WorldObject.score);
	};

	stage.addChild(WorldObject.score_txt);

	WorldObject.hud = new HUD();
	WorldObject.hud.draw(stage);

	WorldObject.pjs = [];
	WorldObject.bonus = [];
	cpt_lvl= 1;
	levels = Level.loadLevels(cwidth, cheight, cpt_lvl);
	levels.audio.pause();
	stage.update();
	document.getElementById("loading").style.visibility= "hidden";
	document.getElementById("rules").style.visibility= "";
	rules();
}

//***********************************
function rules() {
	if(WorldObject.skip>0)
		if(WorldObject.skip==1)
			document.getElementById("rules_img").src = "ressources/rules_2.png";
		else if(WorldObject.skip==2)
			document.getElementById("rules_img").src = "ressources/rules_3.png";
		else if(WorldObject.skip==3)
			document.getElementById("rules_img").src = "ressources/rules_4.png";
		else if(WorldObject.skip==4)
			document.getElementById("rules_img").src = "ressources/rules_5.png";
		else if(WorldObject.skip==5)
			document.getElementById("rules_img").src = "ressources/rules_6.png";
		else if(WorldObject.skip==6)
			document.getElementById("rules_img").src = "ressources/rules_7.png";
		else if(WorldObject.skip==7)
			document.getElementById("rules_img").src = "ressources/rules_8.png";
		else if(WorldObject.skip==8){
			document.getElementById("rules").style.visibility= "hidden";
		}
		if(WorldObject.skip<8)
			setTimeout(rules, 10);
		else{
			levels.audio.play();
			setTimeout(gameLoop, 200);
		}
}
//**************gameLoop*********************
function gameLoop() {
	if(!WorldObject.end){
		if(!WorldObject.pause){
			if(levels.audio.paused) levels.audio.play();
			pause_screen.visible = false;
			if(!WorldObject.game_start){
				for(var i=0; i<WorldObject.pjs.length; ++i){
					WorldObject.pjs[i].move(player);
					if(WorldObject.pjs[i] != null && WorldObject.pjs[i].collision_player(player) && player.immuned == 0)
						lost();
				}

				//déplacement -> collision -> correction
				if(player.Handling(npb, stage) && player.immuned == 0)
					lost();
				
				if(npb.move() || player.life<1) {
					setTimeout(endGame(false), 10000);	
				}

				//Collision: Collision Balle-Briques, Balle-Player, Proj-hauteurif->, 

				for(var i=0; i<levels.availableBricks.length; ++i)
					if (levels.availableBricks[i].ball_collision(npb, stage)) 
						levels.availableBricks.splice(i,1);

				for(var i=0; i<WorldObject.bonus.length; ++i){
					WorldObject.bonus[i].move(player, stage);
				}
				WorldObject.score_change(-0.01);
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
				nextLevel();
			}
			stage.update();
		}
		else{
			if(!levels.audio.paused) levels.audio.pause();
			pause_screen.visible = true;
			stage.update();
		}
		setTimeout(gameLoop, 10);
	}
}

//************************

function WriteScore(){
	
}

function endGame(victory) {
	levels.audio.pause();
	if (victory){
		document.getElementById("victory").style.visibility= "";
		var audio = new Audio("ressources/won.mp3");
		audio.play();
	}
	else{
		document.getElementById("defeat").style.visibility= "";
		var audio = new Audio("ressources/lost.mp3");
		audio.play();
	}

	WriteScore();

	WorldObject.end = true;
}

function nextLevel() {
	player.Handling(npb, stage);
	for (var i=0; i < WorldObject.pjs.length; ++i) {
		stage.removeChild(WorldObject.pjs[i].bitmap);
		WorldObject.score_change(1);
	}
	WorldObject.pjs=[];
	stage.update();
	npb.speed = 0;
	npb.directionX = 0;
	npb.directionY = (-1);
	npb.initialPlace();
	player.initialPlace();
	WorldObject.game_start = 1;
	cpt_lvl++;
	player.life=5;
	WorldObject.hud.refresh(player, null);
	if (cpt_lvl>=6) {
		endGame(true);
	}
	levels.audio.pause();
	levels= Level.loadLevels(cwidth, cheight, cpt_lvl);
	stage.update();
	npb.speed=3;
	while(1){
		var loaded = true;
		for (var i=0; i < levels.availableBricks.length; ++i) 
			loaded &= levels.availableBricks[i].loaded;
		if(loaded)
			break;
	}
	document.getElementById("loading").style.visibility= "hidden";

}

