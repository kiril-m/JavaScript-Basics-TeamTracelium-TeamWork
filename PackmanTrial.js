/**
 * Created by Ani-lenovo on 13.11.2014 ÃÂ³..
 */
window.onload = function () {
    var theCanvas = document.getElementById("the-canvas");
    var canvasCtx = theCanvas.getContext("2d");

    canvasCtx.lineWidth = "2";
    canvasCtx.fillStyle = "#777";
    canvasCtx.strokeStyle = "black";

    canvasCtx.fillRect(0, 0, 400, 350);
    canvasCtx.strokeRect(0, 0, 400, 350);

    canvasCtx.arc(350, 300, 30, 170*Math.PI / 180, 200*Math.PI / 180, true);
    canvasCtx.lineTo(350,300);
    canvasCtx.closePath();
    canvasCtx.fillStyle = "yellow";
    canvasCtx.fill();
    canvasCtx.strokeStyle = "black";
    canvasCtx.stroke();

    canvasCtx.beginPath(360, 290);

    canvasCtx.arc(360, 290, 3, 0, 2*Math.PI);
    canvasCtx.strokeStyleStyle = "black";
    canvasCtx.stroke();
    canvasCtx.fillStyle = "black";
    canvasCtx.fill();




};