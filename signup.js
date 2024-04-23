const Signup = () => {
    let inputone = document.getElementById('firstname')
    let inputtwo = document.getElementById('lastname')
    let inputthree = document.getElementById('day')
    let inputfour = document.getElementById('month')
    let inputfive = document.getElementById('year')
    let phone = document.getElementById('phonenumber')
    let inputsix = document.getElementById('email')
    let inputseven = document.getElementById('password')
    let inputnine = document.getElementById('terms')

    if (inputone.value == '' || inputtwo.value == '' || inputthree.value == '' || inputfour.value == '' || inputfive.value == '' || phone.value == '' || inputsix.value == '' || inputseven.value == '' || inputnine.checked == ''  ) {
        alert('haba')
    } else if (phone.value!==10 || phone.value > 10 || phone.value < 10) {
        alert('Phone Number is Invalid')
    }
}