var theCanvas = document.getElementById("the-canvas");
var canvasCtx = theCanvas.getContext("2d");

function endScreen(){
    theCanvas.style.left = "300px"; //aligns the canvas at the center of the screen
    theCanvas.style.top = "150px";
    theCanvas.style.position = "absolute";
    theCanvas.style.zIndex = '2';
    canvasCtx.fillStyle = 'black';
    canvasCtx.fillRect(0,0,740,380);

    canvasCtx.shadowColor = "red";
    canvasCtx.fillStyle = "black";
    canvasCtx.shadowOffsetX = -25;
    canvasCtx.shadowOffsetY = 50;
    canvasCtx.shadowBlur = 10;
    canvasCtx.font = "60px 'Helvetica'";
    canvasCtx.fillText('YOU ARE DEAD' , 160 , 50);

    canvasCtx.fillStyle = "white";
    canvasCtx.shadowOffsetX = 0;
    canvasCtx.shadowOffsetY = 0;
    canvasCtx.shadowBlur = 7;
    canvasCtx.font = "60px 'Helvetica'";
    canvasCtx.fillText('CLICK HERE' , 180 , 200);

    canvasCtx.fillStyle = "black";
    canvasCtx.shadowOffsetX = 25;
    canvasCtx.shadowOffsetY = -50;
    canvasCtx.shadowBlur = 10;
    canvasCtx.fillText('WANNA PLAY AGAIN?' , 50 , 350);

}
theCanvas.onclick = function(){
    startScreen();
};