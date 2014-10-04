function Square(x, y, width, height)
{
	//	Size variables
	this.width = width;
	this.height = height;

	//	Position
	this.x = x;
	this.y = y;

	//	Velocity
	this.vx = 0;
	this.vy = 0;

	//	Acceleration
	this.ax = 0;
	this.ay = 0;

	//	"World" Variables
	this.gravity = 1;

	this.onGround = function()
	{
		if(this.y + this.height >= canvas.height)
		{
			return true;
		}
	};

	this.update = function()
	{
		//	Apply gravity
		//	THIS IS NOT PROPER PHYSICS, FIX IT LATER
		this.ay = this.gravity;

		//	Apply velocity to position
		this.x += this.vx;
		this.y += this.vy;

		//	Apply acceleration to velocity
		this.vx += this.ax;
		this.vy += this.ay;

		//	BOUNDS CHECKING
		if((this.x + this.width) >= canvas.width)	//	RIGHT BOUND
		{
			this.x = canvas.width - this.width;
		}
		else if(this.x <= 0)	//	LEFT BOUND
		{
			this.x = 0;
		}
		else if(this.onGround())	//	ON THE GROUND
		{
			this.y = canvas.height - this.height;
		}
	};

	//	Default function, to give drawing capabilities must apply draw from main
	this.draw = function()
	{
		console.log("No context has been defined");
	};
}
