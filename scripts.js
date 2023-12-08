// JavaScript to toggle the visibility of the navigation links on click of the hamburger icon
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('mouseover', () => {
        // Change color when mouse is over an <a> element
        cursorDot.style.backgroundColor = 'rgb(137, 31, 158)'; // Change to your desired color
        cursorOutline.style.borderColor = 'rgb(137, 31, 158)'; // Change to your desired color
        cursorDot.classList.add('expanded');
        cursorOutline.classList.add('expanded');
    });

    link.addEventListener('mouseout', () => {
        // Revert to default color when mouse leaves the <a> element
        cursorDot.style.backgroundColor = 'white';
        cursorOutline.style.borderColor = 'hsla(0, 0%, 100%, 0.5)';
        cursorDot.classList.remove('expanded');
        cursorOutline.classList.remove('expanded');
    });
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

