var display = document.getElementById("clock");
let starting = 0;
let elapsed = 0;
let timer = null;
let isRunning = false;

function start(){
    if(!isRunning)
    starting = Date.now() - elapsed;
    timer = setInterval(update,10);
    isRunning = true; 
}
function stop(){
    if(isRunning){
        clearInterval(timer);  
        elapsed = Date.now() - starting;
        isRunning = false; 
    }
}
function reset(){
    clearInterval(timer);
    starting = 0;
    elapsed = 0; 
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    const currtime =  Date.now();
    elapsed = currtime - starting; 

    let hours = Math.floor(elapsed/(1000*60*60));
    let minutes = Math.floor(elapsed/(1000*60)%60);
    let seconds = Math.floor(elapsed/1000%60);
    let millisec = Math.floor(elapsed%1000/10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    millisec = String(millisec).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${millisec}`;
}