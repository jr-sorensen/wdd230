document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.main-menu ul');
    const exitButton = document.querySelector('.exit-button');

    hamburgerIcon.addEventListener('click', toggleMobileMenu);
    exitButton.addEventListener('click', closeMobileMenu);

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('show-menu');
        const isOpen = mobileMenu.classList.contains('show-menu');
        hamburgerIcon.innerHTML = isOpen ? '&#10005;' : '&#8801;';

        
        exitButton.style.display = isOpen ? 'block' : 'none';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('show-menu');
        hamburgerIcon.innerHTML = '&#8801;';
        exitButton.style.display = 'none';
    }
});
