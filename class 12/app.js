// console.log(document.childNodes[1].childNodes[0].childNodes[1])
// var a = document.getElementById('abc')
// console.log(a.lastChild)

// function foo(){
//   // var a = document.getElementById('inp').hasAttribute('name23')
//   // var a = document.getElementById('inp').getAttribute('name')
//   // var a = document.getElementById('hhh').setAttribute('class','abc')
//   var a = document.getElementById('inp').value
//   var b = document.getElementById('para').innerHTML = a
// }


// function foo(){
//   var a = document.createElement('li')
//   var b = document.createTextNode('Hello world')
//   a.appendChild(b)
//   console.log(a)
// }


var a = document.getElementById('para')

function addTodo(){
  var inp = document.getElementById('inp')
  var createli = document.createElement('li')
  var text = document.createTextNode(inp.value)
  createli.appendChild(text)
  a.appendChild(createli)
  inp.value = ''
}














