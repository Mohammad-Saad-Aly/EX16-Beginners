// var interval = setInterval(function(){
//     console.log('check')
// },1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)


// function hello(){
//     console.log('hello')
// }
// setInterval(hello,1000)

// setTimeout(function(){
//     console.log('set time chal gaya')
// },3000)

// var min = 0
// var inter = setInterval(function () {
//     min++
//     console.log(min)
// },100)

// setTimeout(function(){
//     clearInterval(inter)
// },10000)

var min = 0
var sec = 0
var msec = 0

var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmsec = document.getElementById('msec')
var interval;
function started(){
    interval = setInterval(function(){
        msec++
        getmsec.innerHTML = msec
        if(msec >= 100){
            sec++
            getsec.innerHTML = sec
            msec = 0
        }
        else if(sec >= 5){
            min++
            getmin.innerHTML = min
            sec = 0
        }
    },10)
    document.getElementById('abc').disabled = true
}

function pause(){
    clearInterval(interval)
    document.getElementById('abc').disabled = false

}


function reset(){
    min = 0
    sec = 0 
    msec = 0 
    getmin.innerHTML = min
    getmsec.innerHTML = msec
    getsec.innerHTML = sec
}










