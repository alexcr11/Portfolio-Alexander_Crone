const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

document.getElementById('home').addEventListener('click', function () {
    alert('This is just test data and this is already the "home" page, this is simply here to let the user know that the home button was pressed');
});

document.getElementById('about').addEventListener('click', function () {
    alert('This is just test data and there is no about page, this is simply here to let the user know that the about button was pressed');
});

document.getElementById('contact').addEventListener('click', function () {
    alert('This is just test data and there is no contact page, this is simply here to let the user know that the contact button was pressed');
});

document.getElementById('forgot').addEventListener('click', function () {
    alert('This feature has no function, and the primary reason is to alert the user that they have select this button. You are the user, you have hit this button.... but why...... tune in next week to find out');
});

document.getElementById('submit').addEventListener('click', function () {
    alert('I do not recognize you.... please try again.');
});

document.getElementById('register').addEventListener('click', function () {
    alert('I am to lazy to do actual validation on your registration, so i will assume you are a new user... Welcome!');
});

document.getElementById("overlappingBtn").addEventListener("click", function () {
    // Redirect to another HTML page
    window.location.href = "../../index.html";
});