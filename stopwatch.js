let hours = document.getElementById("Hours");
let minutesEle = document.getElementById("minutes");
let seconds = document.getElementById("seconds")
let buttonEle = document.getElementById("StartButton");
let millesecEle = document.getElementById("millieseconds");
let stopbutton = document.getElementById("StopButton");
let resetbutton = document.getElementById("Reset");
let recordEle = document.getElementById("record")
let counter = 0
let secondsCounter = 0
let minutesCounter = 0
buttonEle.addEventListener("click",setInt);
function setInt(){
     interval = setInterval(function(){
        counter+=1;
        millesecEle.textContent = counter
        if(counter==100){
            counter=0
            secondsCounter+=1
            seconds.textContent = secondsCounter
            if(secondsCounter == 59){
                secondsCounter=0
                counter = 0
                minutesCounter+=1
                minutesEle.textContent = minutesCounter
                if(minutesCounter == 59){
                    minutesCounter = 0
                    secondsCounter=0
                    counter = 0
                    minutesCounter=0
                    minutesEle.textContent = minutesCounter
                }
            }
        }
        
    },10)
}
stopbutton.addEventListener("click",clearint)
function clearint(){
    clearInterval(interval)
}   
resetbutton.addEventListener("click",reset)
function reset(){
    minutesEle.textContent = "00"
    seconds.textContent = "00"
    millesecEle.textContent = "00"
    counter = 0
    secondsCounter = 0
    minutesCounter = 0
    clearint()
}
