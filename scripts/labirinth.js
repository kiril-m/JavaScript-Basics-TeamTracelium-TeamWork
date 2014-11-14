/**
 * Created by Ani-lenovo on 13.11.2014 ÃÂ³..
 */
window.onload = function () {
    var theCanvas = document.getElementById("the-canvas");
    var canvasCtx = theCanvas.getContext("2d");

    theCanvas.style.left = "300px";                 //aligns the canvas at the center of the screen
    theCanvas.style.top = "150px";
    theCanvas.style.position = "absolute";


  //  canvasCtx.lineJoin="round";             //styles the lines
    canvasCtx.setLineDash([2,3]);

    canvasCtx.lineWidth = "5";
    canvasCtx.fillStyle = "#777";


    canvasCtx.beginPath();                   //frameline

    canvasCtx.moveTo(10, 10);
    canvasCtx.lineTo(170, 10);
    canvasCtx.lineTo(170, 90);
    canvasCtx.lineTo(210, 90);
    canvasCtx.lineTo(210, 10);
    canvasCtx.lineTo(530, 10);

    canvasCtx.lineTo(530, 90);
    canvasCtx.lineTo(570, 90);
    canvasCtx.lineTo(570, 10);
    canvasCtx.lineTo(730, 10);
    canvasCtx.lineTo(730, 370);

    canvasCtx.lineTo(570, 370);
    canvasCtx.lineTo(570, 290);
    canvasCtx.lineTo(530, 290);
    canvasCtx.lineTo(530, 370);
    canvasCtx.lineTo(210, 370);

    canvasCtx.lineTo(210, 290);
    canvasCtx.lineTo(170, 290);
    canvasCtx.lineTo(170, 370);
    canvasCtx.lineTo(10, 370);
    canvasCtx.closePath();

    canvasCtx.stroke();
//=======================================================================
    canvasCtx.beginPath();                   // angled inner walls

    canvasCtx.moveTo(50, 50);
    canvasCtx.lineTo(130, 50);
    canvasCtx.lineTo(130, 90);
    canvasCtx.lineTo(90, 90);
    canvasCtx.lineTo(90, 170);
    canvasCtx.lineTo(50, 170);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //angled inner walls

    canvasCtx.moveTo(610, 50);
    canvasCtx.lineTo(690, 50);
    canvasCtx.lineTo(690, 170);
    canvasCtx.lineTo(650, 170);
    canvasCtx.lineTo(650, 90);
    canvasCtx.lineTo(610, 90);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //angled inner walls

    canvasCtx.moveTo(650, 210);
    canvasCtx.lineTo(690, 210);
    canvasCtx.lineTo(690, 330);
    canvasCtx.lineTo(610, 330);
    canvasCtx.lineTo(610, 290);
    canvasCtx.lineTo(650, 290);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //angled inner walls

    canvasCtx.moveTo(50, 210);
    canvasCtx.lineTo(90, 210);
    canvasCtx.lineTo(90, 290);
    canvasCtx.lineTo(130, 290);
    canvasCtx.lineTo(130, 330);
    canvasCtx.lineTo(50, 330);
    canvasCtx.closePath();

    canvasCtx.stroke();
//================================================================================
    canvasCtx.beginPath();                   //small inner walls

    canvasCtx.moveTo(130, 130);
    canvasCtx.lineTo(210, 130);
    canvasCtx.lineTo(210, 170);
    canvasCtx.lineTo(130, 170);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //small inner walls

    canvasCtx.moveTo(530, 130);
    canvasCtx.lineTo(610, 130);
    canvasCtx.lineTo(610, 170);
    canvasCtx.lineTo(530, 170);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //small inner walls

    canvasCtx.moveTo(530, 210);
    canvasCtx.lineTo(610, 210);
    canvasCtx.lineTo(610, 250);
    canvasCtx.lineTo(530, 250);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //small inner walls

    canvasCtx.moveTo(130, 210);
    canvasCtx.lineTo(210, 210);
    canvasCtx.lineTo(210, 250);
    canvasCtx.lineTo(130, 250);
    canvasCtx.closePath();

    canvasCtx.stroke();
//===================================================================================
    canvasCtx.beginPath();                   //long inner walls

    canvasCtx.moveTo(250, 50);
    canvasCtx.lineTo(490, 50);
    canvasCtx.lineTo(490, 90);
    canvasCtx.lineTo(250, 90);
    canvasCtx.closePath();

    canvasCtx.stroke();

    canvasCtx.beginPath();                   //long inner walls

    canvasCtx.moveTo(250, 290);
    canvasCtx.lineTo(490, 290);
    canvasCtx.lineTo(490, 330);
    canvasCtx.lineTo(250, 330);
    canvasCtx.closePath();

    canvasCtx.stroke();
//======================================================================================
    canvasCtx.beginPath();                   //central wall

    canvasCtx.moveTo(250, 130);
    canvasCtx.lineTo(330, 130);
    canvasCtx.lineTo(330, 170);
    canvasCtx.lineTo(290, 170);
    canvasCtx.lineTo(290, 210);
    canvasCtx.lineTo(450, 210);
    canvasCtx.lineTo(450, 170);
    canvasCtx.lineTo(410, 170);
    canvasCtx.lineTo(410, 130);
    canvasCtx.lineTo(490, 130);
    canvasCtx.lineTo(490, 250);
    canvasCtx.lineTo(250, 250);


    canvasCtx.closePath();

    canvasCtx.stroke();


}