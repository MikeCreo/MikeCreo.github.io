window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger'),
        menuItem = document.querySelectorAll('.menu_item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(element => {
        element.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

    
