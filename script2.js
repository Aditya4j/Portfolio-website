// Toggle Mobile Navigation Menu
function toggleMenu() {
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    const hambergermenu = document.querySelector('.hamburger-menu');
    mobileNavLinks.classList.toggle('open');
    hambergermenu.classList.toggle('open');
}

// Close the mobile menu when clicking outside
window.addEventListener('click', function(event) {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    const hamburger = document.querySelector('.hamburger-menu');

    if (!mobileNav.contains(event.target) && mobileNavLinks.classList.contains('open')) {
        mobileNavLinks.classList.remove('open');
    }
});
