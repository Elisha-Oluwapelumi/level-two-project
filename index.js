var date = new Date()

let user = JSON.parse(localStorage.getItem('usersignupdetails'))
let currentUser=localStorage.currentUser
console.log(user[currentUser].firstname);
alert("Welcome back " +user[currentUser].firstname+', You Logged in on ' + date);

    