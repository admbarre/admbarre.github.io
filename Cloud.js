function Cloud(x, y, width, height) {
    this.width = width;
    this.height = height;

    this.x = x;
    this.y = y;

    this.makeItRain()
    {
    }

    this.getRandX()
    {
        return (Math.random() * this.width) + this.x;
    }
    ;
}
