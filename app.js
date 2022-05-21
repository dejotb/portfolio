
// Navigation

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav__list--wrapper');


hamburger.addEventListener('click', function(e) {

    const hamburgerState = e.currentTarget.getAttribute('aria-expanded');

    if (hamburgerState === 'false') {
        console.log(navWrapper);
        navWrapper.style.transform = 'translate(0)';
    }
});

// let hamburger = document.querySelector('.hamburger').getAttribute('aria-expanded');

// console.log(hamburger);



