const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show Active Menu when Scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const educationMenu = document.querySelector('#edu-page');
    const experiencesMenu = document.querySelector('#exp-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    //Adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        educationMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3200) {
        educationMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        experiencesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 10200) {
        experiencesMenu.classList.add('highlight');
        educationMenu.classList.remove('highlight');
        return;
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || (element)) {
        element.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close Mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
