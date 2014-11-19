var FPS = 30;

function gameLoop() {
	//1. processInput();
	//2. update();
	//3. draw();


	//	 render 20 times a second
	setInterval(function () {
		canvasCtx.clearRect(0, 0, theCanvas.width, theCanvas.height);
		drawMaze();
		drawFood();
	}, 1000 / FPS);
}

gameLoop();