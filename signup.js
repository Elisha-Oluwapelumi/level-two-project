let users = []
if(localStorage.usersignupdetails){
    let getback = JSON.parse(localStorage.usersignupdetails)
    console.log(getback);
    
    users=getback
}
const Signup = () => {
    let inputone = document.getElementById('firstname').value;
    let inputtwo = document.getElementById('lastname').value;
    let inputthree = document.getElementById('day').value;
    let inputfour = document.getElementById('month').value;
    let inputfive = document.getElementById('year').value;
    let phone = document.getElementById('phonenumber').value;
    let inputsix = document.getElementById('email').value;
    let inputseven = document.getElementById('password').value;
    let country = document.getElementById('country-code').value;
    let inputnine = document.getElementById('terms').checked;

    let phonenumber = country + phone;

    // Validate phone number length
    if (inputone === '' || inputtwo === '' || inputthree === '' || inputfour === '' || inputfive === '' || phone === '' || inputsix === '' || inputseven === '' || !inputnine) {
        alert('Please fill in all the fields');
    } else{

        if (phone.length < 10 || phone.length > 10) {
            alert('Phone number must be at least 10 digits long');
            return; // Stop further execution of the function
        }else if(inputfour>12){
            alert("invalid month")
        }
         else if (inputseven.length < 8) {
            alert('Password Must Not Be Less Than 8 Digits');
            return; // Stop further execution of the function
        }
    
        
        else {
            let userdetails = {
                firstname: inputone,
                lastname: inputtwo,
                phone: phonenumber,
                email: inputsix,
                password: inputseven
            };
    
            users.push(userdetails);
            console.log(users);
            localStorage.setItem('usersignupdetails', JSON.stringify(users))
            window.location.href = "login.html"
        }
    }

    document.getElementById('firstname').value = ''
    document.getElementById('lastname').value = ''
    document.getElementById('day').value = ''
    document.getElementById('month').value = ''
    document.getElementById('year').value = ''
    document.getElementById('phonenumber').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    document.getElementById('country-code').value = ''
    document.getElementById('terms').checked = ''


};
