//canvas
var canvas;
var cwidth;
var cheight;
var stage;

var obj;

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

	obj = new Object("../ressources/test.jpg");

	stage.update();
	gameLoop();
}

//***********************************

//**************gameLoop*********************
function gameLoop() {

	

	stage.update();
	setTimeout(gameLoop, 10);
}
//************************