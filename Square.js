function Square(x, y, width, height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.vx =  4;
	this.vy = 2;

	this.update = function()
	{
		//	Apply velocity to position
		this.x += this.vx;
		this.y += this.vy;

		//	Bounds Checking(bouncing off the walls)
		if((this.x + this.width) >= canvas.width || this.x <= 0)
		{
			this.vx *= -1;
		}
		if((this.y + this.height) >= canvas.height || this.y <= 0)
		{
			this.vy *= -1;
		}
	}

	this.draw = function()
	{
		console.log("No context has been defined");
	}
}
