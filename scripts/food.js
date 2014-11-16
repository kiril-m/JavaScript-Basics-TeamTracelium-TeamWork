var canvas = document.getElementById("the-canvas");
var context = canvas.getContext("2d");
var foodWidth = 10;
var foodHeight = 10;
var tomato = new Image();

function drawFood(posX, posY, width, height, color) {
    context.drawImage(tomato, posX, posY, width, height);

    //============Previous code (white squares instead of tomatos)============
    //if (!color) {
    //	color = "white";
    //}

    //context.rect(posX, posY, width, height);
    //context.fillStyle = color;
    //context.fill();

    //========================================================================
}
tomato.src = '../images/tomato.jpg';
/*
drawFood(offset, offset, blockSize, blockSize);
drawFood(offset + blockSize, offset, blockSize, blockSize);
drawFood(offset + blockSize * 2, offset, blockSize, blockSize);
drawFood(offset + blockSize * 3, offset, blockSize, blockSize);
drawFood(offset + blockSize / 2 - foodWidth / 2, offset + blockSize / 2 - foodHeight / 2, foodHeight, foodWidth);
*/

var blockSize = 40;
var offset = 10;

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
            drawFood(x, y, foodHeight, foodWidth);
        }
    }
}