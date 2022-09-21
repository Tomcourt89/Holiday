// Array of possible travel destinations.
const locations = ["San Marino", "Mauritius", "Barbados", "Canada", "Denmark", "Thailand", "Portugal"];
const random = Math.floor(Math.random() * locations.length);
// Function to update the placeholder with a new random location on each refresh of the page.
window.onload = function() {
    document.getElementsByName('location')[0].placeholder = locations[random]
}
