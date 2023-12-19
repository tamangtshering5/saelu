const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// carousel

window.onscroll = function () {
    // Get the navbar element
    // var navbar = document.querySelector('nav');
    var navbar = document.getElementById('navbar');
    // var parentDiv = navbar.parentElement;
    var navbarWidth=navbar.offsetWidth;
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('sticky-nav');
        navbar.style.width = navbarWidth + 'px';
        document.getElementById('top-nav').style.display='none';
        
    } else {
        navbar.classList.remove('sticky-nav');
        navbar.style.width = 'auto';
        document.getElementById('top-nav').style.display='block';
    }
};