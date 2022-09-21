import '@/styles/member.scss'

let succesfullRegistration = document.getElementById("successfullRegistration");

let form = document.getElementById("registerForm");
if (form) {
    form.addEventListener("submit", test);
}

export function test(event) {
    event.preventDefault();
    succesfullRegistration.innerHTML = "Thanks for the registration, " + form.elements['firstName'].value + " " + form.elements['lastName'].value + "! " + "Have fun every day!!!";
}