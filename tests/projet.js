//canvas
var canvas;
var cwidth;
var cheight;
var stage;
///////
/*
//player bitmap
var player_bitmap;
var player_width;
var player_height;
///////
*/
var player;

class Player{
	constructor(_img, _width){
		this.player_width = 64;
		this.player_height = 64;

	    this.player_bitmap = new createjs.Bitmap(_img);

	    this.bool = true;
	}

	draw(_stage){
		_stage.addChild(this.player_bitmap);
	}

	move(){
		if(this.player_bitmap.x > (cwidth - this.player_width) && this.bool) this.bool = !this.bool;
		else if(this.player_bitmap.x < 0 && !this.bool) this.bool = !this.bool;

		if(this.bool) this.player_bitmap.setTransform(this.player_bitmap.x+1);
		else this.player_bitmap.setTransform(this.player_bitmap.x-1);
	}
}

//*****************init function**************
function init(){
	//canvas
	canvas = document.getElementById("ProjectCanvas");

	cwidth = window.innerWidth/5;
	canvas.width = cwidth;
	cheight = window.innerHeight;
	canvas.height = cheight;
	canvas.style.marginLeft = ((window.innerWidth/2) - (cwidth/2)) + "px";

	stage = new createjs.Stage("ProjectCanvas");
	/////////////

	//player bitmap
/*
	//gets image bounds
	var img = new Image()
    img.onload = function() {
        player_width = img.width;
        player_height = img.height;
    };
    img.src = "test.jpg";
	//////
	player_bitmap = new createjs.Bitmap("test.jpg");
	stage.addChild(player_bitmap);
	///////////
*/

	player = new Player("test.jpg");
	player.draw(stage);

	stage.update();
	gameLoop();
}

//***********************************

//var bool = true;

//**************gameLoop*********************
function gameLoop() {

	player.move();
/*
	if(player_bitmap.x > (cwidth - player_width) && bool) bool = !bool;
	else if(player_bitmap.x < 0 && !bool) bool = !bool;

	if(bool) player_bitmap.setTransform(player_bitmap.x+1);
	else player_bitmap.setTransform(player_bitmap.x-1);

	console.log(player_bitmap.x);
*/

	stage.update();
	setTimeout(gameLoop, 10);
}
//************************