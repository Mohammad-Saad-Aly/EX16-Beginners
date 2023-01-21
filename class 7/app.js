// var arr = ['Saad','Ali',23,'saad@gmail.com']
// for(var i=0; i < arr.length; i++ ){
//     document.write(arr[i]," - ")
// }


// for(var i=0; i<=10; i++){
//     if(i == 5){
//         continue
//     }
//     document.write(i,"<br>")
// }

// var firstName = ['Mohammad','Saad']
// var lastName = ['Muzaffar','Anwar','Hashim','Khan']

// for(var i=0; i<firstName.length; i++){
//     for(var j=0; j<lastName.length; j++){
//         document.write(firstName[i]+" "+lastName[j]+"<br>")
//     }
// }

var countryNames = ['Pakistan', 'New-Zealand', 'England', 'India']
var userInput = prompt('Enter Country Name')
var flag = false
for (var i = 0; i < countryNames.length; i++) {
    if(userInput == countryNames[i]){
        flag = true
        document.write(userInput+" Found ")
        break
    }
}

if(flag == false){
    document.write(userInput+' Not Found')
}



// var countryName = 'Pakistan'
// var userInput = prompt('Enter Country Name')
// var firstLetter = userInput.slice(0, 1)
// var changetoUpper = firstLetter.toUpperCase()
// var remainingLetters = userInput.slice(1)
// var changetoLower = remainingLetters.toLowerCase()
// var result = changetoUpper + changetoLower

// if(result == countryName){
//     document.write('Ok ki report')
// }
// else{
//     document.write('Nikal ....')
// }




// var changeName = countryName.toLowerCase()
// console.log(changeName)













// var flag = false
// for (var i = 0; i < countryNames.length; i++) {
//     if (userInput == countryNames[i]) {
//         flag = true
//         document.write('City Found')
//     }
// }
// if (flag === false) {
//     document.write('City not found <br>')
// }









// for(var i=0; i<firstName.length; i++){
//     document.write(firstName[i]+" "+lastName+"<br>")
// }
