var countTimer = 0;
var startTime;
var timerVar;
var totalMiliseconds = 0;
var currentTime;
var time;


    document.getElementById("begin").onclick = (function begin(){
    setTimeout(
 function gettingTime() {
    startTime = new Date();
    timerVar = setInterval(countTimer, 1);
    document.getElementById('buzzer').style.backgroundColor= ('black')
}, 5000);

});

document.getElementById("buzzer").onclick = (function stop() {
    time = new Date() - startTime
    document.getElementById("timeTaken").innerHTML = time;
    document.getElementById("buzzer").style.backgroundColor = 'red';
    clearInterval(timerVar);
});



document.getElementById("timer").html = (time.getMilliseconds());

