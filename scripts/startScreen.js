var theCanvas = document.getElementById("the-canvas");
var canvasCtx = theCanvas.getContext("2d");

function startScreen(){
    theCanvas.style.left = "300px"; //aligns the canvas at the center of the screen
    theCanvas.style.top = "150px";
    theCanvas.style.position = "absolute";
    theCanvas.style.zIndex = '2';
    canvasCtx.fillStyle = '#777';
    canvasCtx.fillRect(0,0,740,380);
    var ninja = new Image();

    ninja.src = 'images/ninja.png';
    ninja.onload = function (){
        canvasCtx.drawImage(ninja , 100,20,200,300);
    };

    var startButton = new Image();
    startButton.src = 'images/startButton.png';
    startButton.onload = function(){
        canvasCtx.drawImage(startButton, 340, 100, 300, 150);
    };
    theCanvas.onclick = function(){
        gameLoop();
    }
}
startScreen();
