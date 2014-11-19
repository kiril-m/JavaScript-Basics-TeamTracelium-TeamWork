var allFood = [];
var allBlocks = [];

/*
var Food = {
	foodWidth: 0,
	foodHeight: 0,
	posX: 0,
	posY: 0,
	color: "",
	shouldRender: true,

	draw: function (posX, posY, width, height, color) {
		if (!color) {
			color = "white";
		}

		context.rect(posX, posY, width, height);
		context.fillStyle = color;
		context.fill();
	}
}
*/

var foodWidth = 10;
var foodHeight = 10;

function food(x, y, color, shouldRender) {
	this.width = foodWidth;
	this.height = foodHeight;
	this.posX = x;
	this.posY = y;
	this.color = color || "white";
	this.shouldRender = shouldRender || true;

	this.draw = function () {
		canvasCtx.rect(this.posX, this.posY, this.width, this.height);
		canvasCtx.fillStyle = this.color;
		canvasCtx.fill();
	};
}

/*
drawFood(offset, offset, blockSize, blockSize);
drawFood(offset + blockSize, offset, blockSize, blockSize);
drawFood(offset + blockSize * 2, offset, blockSize, blockSize);
drawFood(offset + blockSize * 3, offset, blockSize, blockSize);
drawFood(offset + blockSize / 2 - foodWidth / 2, offset + blockSize / 2 - foodHeight / 2, foodHeight, foodWidth);
*/
var blockSize = 40;
var offset = 10;

function block(x, y, offset, size, row, col, food) {
	this.food = food;
	this.row = row;
	this.col = col;
	this.x = x;
	this.y = y;
	this.offset = offset;
	this.size = blockSize;
	this.shouldRender = false;

	this.debugDraw = function () {
		canvasCtx.rect(this.x, this.y, this.size, this.size);
		canvasCtx.fillStyle = "white";
		canvasCtx.fill();
	};
}

function getBlockPosition(row, col) {
	for (var n in allBlocks) {
		if (allBlocks[n].row == row && allBlocks[n].col == col) {
			return allBlocks[n];
		}
	}
	return undefined;
}

// Calculate all the positions once
for (var row = 0; row < 18; row++) {
	for (var col = 0; col < 9; col++) {
		var x = blockSize * row + offset + blockSize / 2 - foodWidth / 2;
		var y = blockSize * col + offset + blockSize / 2 - foodHeight / 2;

		if ((row == 1 || row == 16) &&
			((col >= 1 && col <= 3) || (col >= 5 && col <= 7))) {
			continue;
		} else if ((row == 2 || row == 15) &&
			((col == 1) || (col == 7))) {
			continue;
		} else if ((row == 3 || row == 14) &&
			((col == 3) || (col == 5))) {
			continue;
		} else if ((row == 4 || row == 13) &&
			((col >= 0 && col <= 1) || (col == 3) || (col == 5) || (col >= 7 && col <= 8))) {
			continue;
		} else if ((row >= 6 && row <= 11) &&
			((col == 1) || (col >= 3 && col <= 5) || (col == 7))) {
			continue;
		} else {
			allFood.push(new food(x, y, "white", true));
			allBlocks.push(new block(offset + blockSize * row, offset + blockSize * col, offset, blockSize, row, col, allFood[allFood.length - 1]));
		}
	}
}

function drawFood() {
	for (var i in allFood) {
		if (allFood[i].shouldRender) {
			allFood[i].draw();
		}

		if (allBlocks[i].shouldRender) {
			allBlocks[i].debugDraw();
		}
	}
}