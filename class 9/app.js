// var arr2 = arr.lastIndexOf('Saad',3)
// console.log(arr2)
// var arr2 = arr.indexOf('Jalal')
// console.log(arr2)

// var naam = 'Ali'
// console.log(naam.charAt(3))

// indexOf
// lastIndexOf
// charAt
// replace
// Math.round
// Math.ceil
// Math.floor
// Math.random


// var text = 'Hello world Hello Saad Hello'
// var newText = text.replace(/Hello/g,'Ali')
// console.log(newText)

// var num = 72.1
// var newNum = Math.floor(num)
// var newNum = Math.ceil(num)
// var newNum = Math.round(num)
// console.log(newNum)
// var num = Math.random() * 4
// console.log(num)



// var pak = prompt('Enter Your toss') 
// var ind = prompt('Enter Your toss') 
// var toss = Math.random() * 2
// var fix = Math.floor(toss)
// if(fix == 0){
//     document.write(pak+" win the toss")
// }
// else{
//     document.write(ind+ ' win the toss')
// }

function abc(a) {
    document.getElementById('inp').value += a

}

function sum() {
    var a = document.getElementById('inp').value
    document.getElementById('inp').value = eval(a)
}

function clr(){
    document.getElementById('inp').value = ''
}

function del(){
    var h = a
    document.getElementById('inp').value = h.pop(a)
}








