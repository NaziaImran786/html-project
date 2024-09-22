
//---------------------- variable -----------------------
let timerId: any = document.getElementById('timerId')
let startbtn = document.getElementById('startbtn')
let stopbtn = document.getElementById('stopbtn')
let resetbtn = document.getElementById('resetbtn')


let startTime = 0
let escapeTime = 0
let currentTime = 0
let paused = true
let intervalid: any
let hrs = 0
let min = 0
 let sec = 0

//---------------------- function --------------------

startbtn?.addEventListener("click", () => {
    if(paused){
        paused = false
        startTime = Date.now() - escapeTime
        intervalid = setInterval(updateTime, 1000)
    }
})

stopbtn?.addEventListener("click", () => {
    if(!paused){
        paused = true
        escapeTime = Date.now() - startTime
        clearInterval(intervalid)
    }
})

resetbtn?.addEventListener("click", () => {
    startTime = 0
    escapeTime = 0
    currentTime = 0
    paused = true
    hrs = 0
    min = 0
    sec = 0

    timerId.textContent = `00 : 00 : 00`
})

function updateTime() {
    escapeTime = Date.now() - startTime

    sec = Math.floor((escapeTime / 1000) % 60)
    min = Math.floor((escapeTime / (1000 * 60)) % 60)
    hrs = Math.floor((escapeTime / (1000 * 60 * 60)) % 60)

    sec = pad(sec)
    min = pad(min)
    hrs = pad(hrs)

    timerId.textContent = `${hrs}:${min}:${sec}`

    function pad(unit: any): any {
        return (unit > 9) ? unit : "0" + unit
        
    }
}





