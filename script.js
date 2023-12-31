
/*function startTimer() {
    var startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    var start_pause=document.getElementById("start_pause");
    value=start_pause.innerHTML;
    if(value=="START")
    {
        value="PAUSE";
    setInterval(function() {
      var currentDate = new Date();
      var elapsedTime = currentDate - startDate;
  
      var hours = Math.floor(elapsedTime / 3600000);
      var minutes = Math.floor((elapsedTime % 3600000) / 60000);
      var seconds = Math.floor((elapsedTime % 60000) / 1000);
  
      console.log(hours + ":" + minutes + ":" + seconds);
    }, 1000);
    start_pause.addEventListener("click",(value)=>{
        value="START";
    });
  }
}
*/
let isRunning = false;
        let startTime;
        let interval;

        const stopwatch = document.querySelector('#time');
        const startStopButton = document.getElementById('start_pause');
        const resetButton = document.getElementById('reset');
        const stamp_box=document.getElementById('stamp_box');

        startStopButton.addEventListener('click', () => {
            if (isRunning) {
                clearInterval(interval);
                startStopButton.textContent = 'Start';
            } else {
                startTime = startTime ? Date.now() - (Date.now() - startTime) : Date.now();
                interval = setInterval(updateStopwatch, 10);
                startStopButton.textContent = 'Stop';
            }
            isRunning = !isRunning;
        });

        resetButton.addEventListener('click', () => {
            clearInterval(interval);
            isRunning = false;
            startStopButton.textContent = 'Start';
            stopwatch.textContent = '00:00:00:00';
            while (stamp_box.childNodes.length > 0) {
                stamp_box.removeChild(stamp_box.childNodes[0]);
              }
        });

        function updateStopwatch() {
            const currentTime = Date.now() - startTime;
            const hours = Math.floor(currentTime / 3600000);
            const minutes = Math.floor((currentTime % 3600000) / 60000);
            const seconds = Math.floor((currentTime % 60000) / 1000);
            const hundredths = Math.floor((currentTime % 1000) / 10);

            stopwatch.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(hundredths).padStart(2, '0')}`;
        }
function lap(){
    var value=stopwatch.innerHTML;
    var stamp=document.createElement('li');
    stamp.innerHTML=value;
    stamp_box.appendChild(stamp);
}
