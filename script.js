// Code: to run the stopwatch

// for assigning the initial values of milliseconds, seconds, minutes and hours by using an array
let [millisec, sec, min, hrs] = [0, 0, 0, 0];

// selecting the displayTime and storing it in local variable
let displayTime = document.getElementById("timerText");

// it shows no interval is present or started
let timer = null;

// function for the StopWatch
function stopWatch(){
    millisec += 10;
    if(millisec == 1000){ 
        millisec = 00;
        sec++;
        if(sec == 60){ 
            sec = 0;
            min++;
            if(min == 60){ 
                min = 0;
                hrs++;
            }
        }
    }

    // To make the timer in [00,00,00,000] format while running
    // for hours
    let h = hrs < 10 ? "0" + hrs : hrs;

    // for minutes
    let m = min < 10 ? "0" + min : min;

    // for seconds
    let s = sec < 10 ? "0" + sec : sec;

    // for milliseconds
    let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;

    // to display the latest time
    displayTime.innerHTML = h + ":" + m + ":" + s + "." + ms;
}

// function to start the StopWatch
function startTimer(){
    // if any ongoing interval is running, stop and then restart
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
}

// function to stop the StopWatch
function stopTimer(){
    //  for clearing the previous interval
    clearInterval(timer);
}

// function to reset the StopWatch
function resetTimer(){
    clearInterval(timer);

    // to clear the previous interval and assign the default values to the timer 
    [millisec, sec, min, hrs] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00:000"
}
