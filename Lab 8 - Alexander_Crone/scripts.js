// Function to handle dropdown toggle on mobile
function handleMobileDropdown() {
    if ($(window).width() <= 767) {
        $('.quickLinkBoxes').hide(); // Initially hide the dropdown on mobile
        $('.dropdown-toggle').off('click'); // Remove previous click events
        $('.dropdown-toggle').on('click', function(e) {
            e.stopPropagation(); // Prevent unnecessary event propagation
            $('.quickLinkBoxes').slideToggle();
            $(this).toggleClass('active');
        });
    } else {
        $('.quickLinkBoxes').show(); // Ensure links are shown on Desktop 
        $('.dropdown-toggle').off('click'); // Remove the click event on Desktop
    }
}

// Execute the function on window load and resize
$(document).ready(function() {
    handleMobileDropdown();
});

$(window).on('resize', function() {
    handleMobileDropdown();
});

document.getElementById("overlappingBtn").addEventListener("click", function () {
    // Redirect to another HTML page
    window.location.href = "../../index.html";
});