/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/
// console.log("users: ", users);
// console.log("todos: ", todos);

let stringOfUsers = ""

for (const user of users) {
   stringOfUsers += "ID No." + user.id + "  " + user.name + " - " + user.address.city + "\n"
}
alert(stringOfUsers)

selectedUserID = Number(prompt("What is your User ID number?"))

userTodos = []
let userInfo = null

for (const user of users) {
   if (user.id === selectedUserID) {
      userInfo = user.name
   }
}

for (const todo of todos) {
   if (todo.userId === selectedUserID) {
      userTodos.push({title: todo.title})
   }
}

console.log(userInfo)
console.log(userTodos)


// for (let i = 0; i < userTodos.length; i++) {
//    console.log(userTodos[i])
// }



// if (selectedUserID === todos.userId) {
//    usersTodos = todos.slice()
// }
// console.log(usersTodos)


// for (let i = 0; i < lastNameArr.length; i++) {
//    newArray.push([lastNameArr[i] , uppercaseNames[i]])
//    console.log(newArray)
// }