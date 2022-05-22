
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



const h1 = document.querySelector('h1')

// console.log(h1.offsetHeight);


const compStyles = window.getComputedStyle(h1);

const h1Height2 = compStyles.getPropertyValue('height').split('px').join().slice(0, -1);

console.log(h1Height2);

const h1Height = compStyles.getPropertyValue('font-size').split('px').join().slice(0, -1);

const img = document.querySelector('.header__image');

console.log(h1Height.split('px').join().slice(0, -1));

img.style.height = `${h1Height2 *2}px`;
// Console Information

console.info('Hey! 👋')