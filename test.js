var canvas,
	ctx,
	s;

var TILE_S = 16,
	COLS = 32,
	ROWS = 32;

function main()
{
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = TILE_S * COLS;
	canvas.height = TILE_S * ROWS;
	document.body.appendChild(canvas);

	init();
	loop();
}

function Square(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.vx = 3;
	this.vy = 2;

	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	};

	this.update = function()
	{
		if((this.x + this.width) >= canvas.width || this.x <= 0)
		{
			this.vx *= -1;
		}

		if((this.y + this.height) >= canvas.height || this.y <= 0)
		{
			this.vy *= -1;
		}
	};
}

function init()
{
	s = new Square(16, 16, TILE_S, TILE_S);
}

function loop()
{
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "white";
	ctx.fillRect(s.x, s.y, s.width, s.height);

	s.move();
	s.update();

	window.requestAnimationFrame(loop);
}

main();
