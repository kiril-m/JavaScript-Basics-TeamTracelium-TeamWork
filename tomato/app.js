var getCanvas = document.getElementById("tomato");
var canvasCtx = getCanvas.getContext("2d");
var green = getCanvas.getContext("2d");
var img = new Image();


img.onload = function () {
    green.drawImage(img, 0, 0, 30, 30);
}
img.src = 'tomato.jpg';

//canvasCtx.beginPath();
//canvasCtx.arc(200, 200, 100, 0, Math.PI*2);
//canvasCtx.stroke();

//green.fillStyle = "red";
//green.fill();


//green.beginPath();

//green.moveTo(200, 100);
//green.lineTo(190, 80);
//green.stroke();

////green.strokeStyle='green';

//green.moveTo(200, 100);
//green.lineTo(200, 80);
//green.stroke();


//green.moveTo(200, 100);
//green.lineTo(210, 80);
//green.stroke();
