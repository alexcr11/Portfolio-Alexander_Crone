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