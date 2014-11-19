var ghost1 = new Image();
ghost1.src = "images/ghost11.png";
var ghost2 = new Image();
ghost2.src = "images/ghost21.png";
var ghost3 = new Image();
ghost3.src = "images/ghost31.png";
var ghost4 = new Image();
ghost4.src = "images/ghost41.png";

var ghosts = [ghost1, ghost2, ghost3, ghost4];
var ghostsCoords = [];
var ghostSize = 30;
var ghostThinkTime = 3000;
var ghostOffset = 5;

function initializeGhosts() {
	ghostsCoords.push([getBlockPosition(7, 2), 0]);
	ghostsCoords.push([getBlockPosition(8, 2), 0]);
	ghostsCoords.push([getBlockPosition(9, 2), 2]);
	ghostsCoords.push([getBlockPosition(10, 2), 2]);
}

function drawGhost() {
	for (var i in ghosts) {
		canvasCtx.drawImage(ghosts[i], ghostOffset + ghostsCoords[i][0].x, ghostOffset + ghostsCoords[i][0].y, ghostSize, ghostSize);
	}
}

function animateGhost() {
	for (var i in ghosts) {
		var state = ghosts[i].src.substr(ghosts[i].src.length - 6, 2);

		switch (state) {
		case "11":
			ghosts[i].src = "images/ghost12.png";
			break;

		case "12":
			ghosts[i].src = "images/ghost11.png";
			break;

		case "21":
			ghosts[i].src = "images/ghost22.png";
			break;

		case "22":
			ghosts[i].src = "images/ghost21.png";
			break;

		case "31":
			ghosts[i].src = "images/ghost32.png";
			break;

		case "32":
			ghosts[i].src = "images/ghost31.png";
			break;

		case "41":
			ghosts[i].src = "images/ghost42.png";
			break;

		case "42":
			ghosts[i].src = "images/ghost41.png";
			break;
		}
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateGhots() {
	for (var i in ghosts) {

		switch (ghostsCoords[i][1]) {
		case 0:
			if (checkIntersection(i)) {
				ghostsCoords[i][1] = getNewDirection(0);
			}

			var pos = getBlockPosition(ghostsCoords[i][0].row - 1, ghostsCoords[i][0].col);
			if (pos) {
				ghostsCoords[i][0] = pos;
			} else {
				ghostsCoords[i][1] = getNewDirection(0);
			}
			break;

		case 1:
			if (checkIntersection(i)) {
				ghostsCoords[i][1] = getNewDirection(1);
			}

			var pos = getBlockPosition(ghostsCoords[i][0].row, ghostsCoords[i][0].col - 1);
			if (pos) {
				ghostsCoords[i][0] = pos;
			} else {
				ghostsCoords[i][1] = getNewDirection(1);
			}
			break;

		case 2:
			if (checkIntersection(i)) {
				ghostsCoords[i][1] = getNewDirection(2);
			}
			var pos = getBlockPosition(ghostsCoords[i][0].row + 1, ghostsCoords[i][0].col);
			if (pos) {
				ghostsCoords[i][0] = pos;
			} else {
				ghostsCoords[i][1] = getNewDirection(2);
			}
			break;

		case 3:
			if (checkIntersection(i)) {
				ghostsCoords[i][1] = getNewDirection(3);
			}
			var pos = getBlockPosition(ghostsCoords[i][0].row, ghostsCoords[i][0].col + 1);
			if (pos) {
				ghostsCoords[i][0] = pos;
			} else {
				ghostsCoords[i][1] = getNewDirection(3);
			}
			break;
		}
	}
}

function checkIntersection(i) {
	if (getBlockPosition(ghostsCoords[i][0].row - 1, ghostsCoords[i][0].col) ||
		getBlockPosition(ghostsCoords[i][0].row + 1, ghostsCoords[i][0].col) ||
		getBlockPosition(ghostsCoords[i][0].row, ghostsCoords[i][0].col - 1) &&
		getBlockPosition(ghostsCoords[i][0].row, ghostsCoords[i][0].col + 1)) {
		return true;
	} else {
		return false;
	}
}

function getNewDirection(o) {
	var rng = getRandomInt(0, 3);
	while (rng == o) {
		rng = getRandomInt(0, 3);
	}

	switch (rng) {
	case 0:
		return 0;

	case 1:
		return 1;

	case 2:
		return 2;

	case 3:
		return 3;
	}
}