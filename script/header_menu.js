document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.header-icon');
    var mobileLinks = document.querySelector('.mobile-links');

    menuIcon.addEventListener('click', function () {
        mobileLinks.style.display = mobileLinks.style.display === 'block' ? 'none' : 'block';
    });
});