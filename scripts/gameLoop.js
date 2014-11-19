var FPS = 30;
var UPS = 20;

function gameLoop() {
	//1. processInput();
	//2. update();
	//3. draw();

	// input handled in ninja.js	

	// updates
	initializeGhosts();
	setInterval(checkDeath, 1000 / UPS);
	setInterval(updateGhots, ghostThinkTime);
	setInterval(animateGhost, ghostThinkTime / 2);

	// render FPS times a second
	setInterval(function () {
		canvasCtx.clearRect(0, 0, theCanvas.width, theCanvas.height);
		drawMaze();
		drawFood();
		drawNinja();
		drawGhost();
	}, 1000 / FPS);
}

gameLoop();