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

answer = prompt(`Hi ${userInfo}, type 'view' to view your todos, or 'add' to add one`)
newTodo = null

if (answer === "view") {
   for (const todo of todos) {
      if (todo.userId === selectedUserID) {
         userTodos.push({title: todo.title})
      }
   }
} else if (answer === "add") {
   newTodo=prompt(`Please type your new todo.`)
}

if (newTodo === true) {
   userTodos.push({title: newTodo})
}

console.log(userInfo)
console.log(userTodos.join())









