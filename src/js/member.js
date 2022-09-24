import '@/styles/member.scss'

let succesfullRegistration = document.getElementById("successfullRegistration");

let form = document.getElementById("registerForm");
if (form) {
    form.addEventListener("submit", onSubmit);
}

let password = document.getElementById("password");
if (password){
    password.onchange = validatePassword;
}

let retypePassword = document.getElementById("retypePassword");
if (retypePassword){
    retypePassword.onkeyup = validatePassword;
}

function onSubmit(event) {
    event.preventDefault();
    if (form.elements['firstName'].value !== '' && form.elements['lastName'].value !== '') {
        succesfullRegistration.innerHTML = "Thanks for the registration, " + form.elements['firstName'].value + " " + form.elements['lastName'].value + "! " + "Have fun every day!!!";
    } else {
        succesfullRegistration.innerHTML = "Thanks for the registration, " + form.elements['userName'].value + "! " + "Have fun every day!!!";
    }
}

function validatePassword() {
    if (password.value !== retypePassword.value) {
        retypePassword.setCustomValidity("Passwords don't match");
    } else {
        retypePassword.setCustomValidity('');
    }
}