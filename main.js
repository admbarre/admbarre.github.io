//	Objects
var canvas,
	ctx,
	s;

//	Grid variables
var TILE_S = 16,
	COLS = 32,
	ROWS = 32;

//	Starting point for program
function main()
{
	init();
	loop();
}

//	Initializes canvas and actors
function init()
{
	//	Initialize the canvas and context
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = TILE_S * COLS;
	canvas.height = TILE_S * ROWS;
	canvas.setAttribute("tabIndex", "0");
	canvas.focus();

	//	Adding keyboard listeners to canvas
	canvas.addEventListener("keydown",keyDownHandler);
	canvas.addEventListener("keyup",keyUpHandler);

	//	Adding canvas to DOM
	document.body.appendChild(canvas);

	//	Initialize actors
	//	SHOULD BE KEPT INSIDE A DATA STRUCTURE
	s = new Square(16, 16, TILE_S, TILE_S);
	applyDraw(s);
}

function keyDownHandler(event)
{
	var key = String.fromCharCode(event.keyCode);

	switch(key)
	{
		case "W":
			s.vy = -12;
			break;
		case "S":
			break;
		case "A":
			s.vx = -4;
			break;
		case "D":
			s.vx = 4;
			break;
	}
}

function keyUpHandler(event)
{
	var key = String.fromCharCode(event.keyCode);

	switch(key)
	{
		case "W":
			break;
		case "S":
			break;
		case "A":
			s.vx = 0;
			break;
		case "D":
			s.vx = 0;
			break;
	}
}


//	Main game loop
function loop()
{
	update();
	drawAll();
	window.requestAnimationFrame(loop);
}

//	Updates all actors on screen
function update()
{
	//	Update actors
	//	SHOULD BE KEPT INSIDE A DATA STRUCTURE AND LOOPED
	s.update();
}

//	Draws background and all actors on screen
function drawAll()
{	
	//	Draw background
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//	Call actors' draw methods
	//	SHOULD BE KEPT INSIDE A DATA STRUCTURE AND LOOPED
	s.draw();
}

//	Applies the draw function to the actor
function applyDraw(actor)
{
	actor.draw = function()
	{
		ctx.fillStyle = "white";
		ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
	};
}

main();
