let [second,minutes, hours]=[0,0,0];
let timed = document.querySelector(".timer");
let t = null;

const start = document.getElementById("set_begin");
const pause = document.getElementById("reset")
 
start.addEventListener('click', ()=>{ 
    if (second > 0 || minutes > 0 || hours > 0) {
        clearInterval(t)
        second = 0
        minutes = 0
        hours = 0
        timed.innerHTML= "00 : 00 : 00"
    }
    if (t !== null) {
        clearInterval(t)
    }
    t=setInterval(displaytimer, 1000)
})
pause.addEventListener('click',()=>{
    clearInterval(t)
})

function displaytimer() {
    second++;
    if (second == 60) {
        second = 0;
        minutes++;
        if (minutes==60) {
            minutes=0
            hours++;
        }
    }
    // tenary operator ?
    // addition operation +
    let h, m, s
    if (hours < 10) {
        h = "0" + hours
    } else {
        h = hours
    }
    if( minutes < 10){
       m= "0" + minutes
    }else{
       m=minutes
    }
    if (second < 10) {
        s="0"+ second   
    }else{
        s=second
    }
    timed.innerHTML=`${h} : ${m}: ${s}`
}