document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('nav ul');

    hamburgerIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('show-menu');
        const isOpen = mobileMenu.classList.contains('show-menu');
        hamburgerIcon.innerHTML = isOpen ? '&#10005;' : '&#8801;';
    });
});