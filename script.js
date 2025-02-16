// Get the menu button and navigation elements
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to menu button
menuButton.addEventListener('click', () => {
    // Toggle the 'active' class on nav links
    navLinks.classList.toggle('active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});