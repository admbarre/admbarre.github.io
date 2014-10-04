//	Objects
var canvas,
    ctx,
    hero;

//	Grid variables
var TILE_S = 16,
    COLS = 32,
    ROWS = 32;

//	"World" variables
var GRAVITY = 1;

function keyDownHandler(event) {
    var key = String.fromCharCode(event.keyCode);
    console.log(key);
    switch (key) {
        case "W":
        case "&":
            hero.vy = -12;
            break;
        case "S" :
        case "(":
            break;
        case "A":
        case "%":
            hero.vx = -4;
            break;
        case "D":
        case "'":
            hero.vx = 4;
            break;

    }
}

function keyUpHandler(event) {
    var key = String.fromCharCode(event.keyCode);

    switch (key) {
        case "W":
            break;
        case "S":
            break;
        case "A":
        case "%":
            hero.vx = 0;
            break;
        case "D":
        case "'":
            hero.vx = 0;
            break;
    }
}

//	Initializes canvas and actors
function init() {
    //	Initialize the canvas and context
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = TILE_S * COLS;
    canvas.height = TILE_S * ROWS;
    canvas.setAttribute("tabIndex", "0");
    canvas.focus();

    //	Adding keyboard listeners to canvas
    canvas.addEventListener("keydown", keyDownHandler);
    canvas.addEventListener("keyup", keyUpHandler);

    //	Adding canvas to DOM
    document.body.appendChild(canvas);

    //	Initialize actors
    //	SHOULD BE KEPT INSIDE A DATA STRUCTURE
    hero = new Square(16, 16, TILE_S, TILE_S);
    applyDraw(hero);
    applyGravity(hero, GRAVITY);
}

//	Main game loop
function loop() {
    updateAll();
    drawAll();
    window.requestAnimationFrame(loop);
}

//	Updates all actors on screen
function updateAll() {
    //	Update actors
    //	SHOULD BE KEPT INSIDE A DATA STRUCTURE AND LOOPED
    hero.update();
}

//	Draws background and all actors on screen
function drawAll() {
    //	Draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //	Call actors' draw methods
    //	SHOULD BE KEPT INSIDE A DATA STRUCTURE AND LOOPED
    hero.draw();
}

//	Applies the draw function to the actor
function applyDraw(actor) {
    actor.draw = function () {
        ctx.fillStyle = "white";
        ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
    };
}

function applyGravity(actor, grav) {
    actor.ay += grav;
}

//	Starting point for program
function main() {
    init();
    loop();
}

main();
