var ul = document.getElementById('ul')

function addTodo() {
  var inp = document.getElementById('inp')
  var li = document.createElement('li')
  li.setAttribute('class','list-group-item')
  var liText = document.createTextNode(inp.value)
  li.setAttribute('class','custom')
  li.appendChild(liText)
  ul.appendChild(li)
  inp.value = ''
  var del = document.createElement('button')
  var delText = document.createTextNode('Delete')
  del.appendChild(delText)
  li.appendChild(del)
  var edit = document.createElement('button')
  var editText = document.createTextNode('Edit')
  edit.setAttribute('class','btn btn-warning')
  edit.setAttribute('class','space1')
  del.setAttribute('class','space')
  edit.appendChild(editText)
  li.appendChild(edit)
  del.setAttribute('onclick', 'del(this)')
  del.setAttribute('class','btn btn-outline-danger')
  edit.setAttribute('onclick', 'edit(this)')

}


function delall(){
  ul.innerHTML = ''
}

function edit(e) {
  var a = prompt('Enter New Value', e.parentNode.childNodes[0].nodeValue)
  e.parentNode.childNodes[0].nodeValue = a
}

function del(e) {
  // console.log(e.parentNode)
  e.parentNode.remove()
}








