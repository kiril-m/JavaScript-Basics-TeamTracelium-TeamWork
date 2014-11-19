var ninja = new Image();
ninja.src = "images/ninja.png";
var ninjaOffset = 10;
var ninjaX = 0;
var ninjaY = 0;
var ninjaSize = 40;
var ninjaRow = 0;
var ninjaCol = 0;
var ninjaStep = 40;
var score = 0;

function drawNinja() {
	canvasCtx.drawImage(ninja, ninjaOffset + ninjaX, ninjaOffset + ninjaY, ninjaSize, ninjaSize);
}

document.addEventListener("keydown", handleInput, false);

function handleInput(e) {
	switch (e.keyCode) {
		// Left
	case 37:
		var pos = getBlockPosition(ninjaRow - 1, ninjaCol);
		if (pos) {
			if (pos.food.shouldRender) {
				pos.food.shouldRender = false;
				score += 100;
				ninjaX -= ninjaStep;
			} else {
				ninjaX -= ninjaStep;
			}
		}
		break;

		// Up
	case 38:
		var pos = getBlockPosition(ninjaRow, ninjaCol - 1);
		if (pos) {
			if (pos.food.shouldRender) {
				pos.food.shouldRender = false;
				score += 100;
				ninjaY -= ninjaStep;
			} else {
				ninjaY -= ninjaStep;
			}
		}
		break;

		// Right
	case 39:
		var pos = getBlockPosition(ninjaRow + 1, ninjaCol);
		if (pos) {
			if (pos.food.shouldRender) {
				pos.food.shouldRender = false;
				score += 100;
				ninjaX += ninjaStep;
			} else {
				ninjaX += ninjaStep;
			}
		}
		break;

		// Down
	case 40:
		var pos = getBlockPosition(ninjaRow, ninjaCol + 1);
		if (pos) {
			if (pos.food.shouldRender) {
				pos.food.shouldRender = false;
				score += 100;
				ninjaY += ninjaStep;
			} else {
				ninjaY += ninjaStep;
			}
		}
		break;

	default:
		break;
	}

	for (var i in allBlocks) {
		if (ninjaX + ninjaOffset == allBlocks[i].x) {
			ninjaRow = allBlocks[i].row;
			break;
		}
	}

	for (var i in allBlocks) {
		if (ninjaY + ninjaOffset == allBlocks[i].y) {
			ninjaCol = allBlocks[i].col;
			break;
		}
	}
}

function checkDeath() {
	for (var n in ghostsCoords) {
		if (ghostsCoords[n][0] == getBlockPosition(ninjaRow, ninjaCol)) {
			console.log("You have died.");
		}
	}
}