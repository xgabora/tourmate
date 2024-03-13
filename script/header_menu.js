document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.header-icon');
    var mobileLinks = document.querySelector('.mobile-links');

    menuIcon.addEventListener('click', function () {
        // Toggle the display of the mobile menu
        mobileLinks.style.display = mobileLinks.style.display === 'block' ? 'none' : 'block';
    });
});