// Array of possible travel destinations.
const locations = ["San Marino", "Mauritius", "Barbados", "Canada", "Denmark", "Thailand", "Portugal", "France", "USA", "Mexico", "New Zealand"];
const random = Math.floor(Math.random() * locations.length);
// Function to update the placeholder with a new random location on each refresh of the page.
window.onload = function() {
    document.getElementsByName('location')[0].placeholder = locations[random]

    // event listeners for menu toggles while in mobile view
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const formtoggle = document.querySelector('.formtoggle');
    const mform = document.querySelector('.mform');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("active");        
    });

    formtoggle.addEventListener('click', () => {
        formtoggle.classList.toggle("active");
        mform.classList.toggle("active");
    });
}
