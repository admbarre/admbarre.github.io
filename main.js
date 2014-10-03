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
	document.body.appendChild(canvas);

	//	Initialize actors
	//	SHOULD BE KEPT INSIDE A DATA STRUCTURE
	s = new Square(16, 16, TILE_S, TILE_S);
	applyDraw(s);
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
	//	GET RID OF THIS LINE, ONLY FOR TESTING NEED TO ADD PROPER METHOD
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
