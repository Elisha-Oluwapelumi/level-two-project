var retrivedobj = JSON.parse(localStorage.getItem('usersignupdetails'))
console.log(retrivedobj);

const Login = () => {
    let inputone = document.getElementById('email')
    let inputtwo = document.getElementById('password')

    let userFound = false;
    for (let index = 0; index < retrivedobj.length; index++) {
        if (retrivedobj[index].email === inputone.value && retrivedobj[index].password === inputtwo.value) {
            userFound = true;
            break; // Exit loop once user is found
        }
    }


    if (inputone.value == '' || inputtwo.value == '') {
        alert('Please Fill In The Spaces Below')
    } else if (userFound) {
        alert('User Found and You Have Successfully Logged In')
        window.location.href = "index.html"
    } else {
        alert('User Not Found Or Account Has Not Been Registered')
    }

    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// if (userFound) {
//     alert('User Found');
//     window.location.href = "index.html";
// } else {
//     alert('User Not Found Or Account Has Not Been Registered');
// }

// // Clear input fields regardless of login success or failure
// document.getElementById('inputone').value = '';
// document.getElementById('inputtwo').value = '';
// document.getElementById('inputthree').value = '';