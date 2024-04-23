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
    if (phone.length < 10) {
        alert('Phone number must be at least 10 digits long');
        return; // Stop further execution of the function
    }

    if (inputone === '' || inputtwo === '' || inputthree === '' || inputfour === '' || inputfive === '' || phone === '' || inputsix === '' || inputseven === '' || !inputnine) {
        alert('Please fill in all the fields');
    } else {
        let userdetails = {
            firstname: inputone,
            lastname: inputtwo,
            phone: phonenumber,
            email: inputsix,
            password: inputseven
        };

        users.push(userdetails);
        console.log(users);
    }
};
