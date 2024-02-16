// JavaScript to toggle the visibility of the navigation links on click of the hamburger icon
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
});

// JavaScript
const navToggle = document.querySelector('.navToggle');
const hamburger = document.getElementById('hamburger');

function toggleNav() {
    navToggle.classList.toggle('show-nav');
}

function closeNav() {
    navToggle.classList.remove('show-nav');
}

function handleClick(event) {
    event.preventDefault();
    toggleNav();
}

// Add event listener for click on hamburger
hamburger.addEventListener('click', handleClick);

// Check viewport width and close nav if it's not in mobile view
function checkViewportWidth() {
    if (window.innerWidth >= 768) {
        closeNav();
    }
}

// Add event listener for window resize
window.addEventListener('resize', checkViewportWidth);

// Call checkViewportWidth initially to handle the initial state
checkViewportWidth();

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_vg3johv", "template_79wwoq9", params).then(function (res) {
        alert("Success! " + res.status);
    })
}

window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.pageYOffset > 100) {
        scrollButton.style.display = "block";

    } else {
        scrollButton.style.display = "none";
    }
});