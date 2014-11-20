/**
 * Created by Valentin on 20.11.2014 г..
 */
$(document).ready(function () {
    var audio = document.getElementById('music');
    $('body').keyup(function(e) {
        if (e.keyCode == 77) {
            console.log(audio.volume);
            if (audio.volume == 0.0) { //mute button
                audio.volume = 0.5;
            }
            else  if (audio.volume > 0.0 && audio.volume <= 1.0){
                audio.volume = 0.0;
            }
        }
        else if (e.keyCode == 73) { //volume up
            console.log(audio.volume);
            if (audio.volume < 1.0) {
                if (audio.volume == 0.0){
                    audio.volume = 0.5;
                }
                else {
                    audio.volume += 0.05;
                }
            }
            else  if (audio.volume == 1.0){
                audio.volume = 1.0;
            }
        }
        else if (e.keyCode == 75) { //volume down
            console.log(audio.volume);
            if (audio.volume > 0.0) {
                audio.volume -= 0.05;
            }
            else  if (audio.volume == 0.0){
                audio.volume = 0.0;
            }
        }
    })
});
