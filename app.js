
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




const calcHeight = function() {
    const h1 = document.querySelector('h1')
    const headingCompStyles = window.getComputedStyle(h1);
    const img = document.querySelector('.header__image');

    const handleHeadingHeight = headingCompStyles.getPropertyValue('height').split('px').join().slice(0, -1);

    img.style.height = `${handleHeadingHeight * 1.4}px`;
}

calcHeight()





window.addEventListener('resize', calcHeight)




// Console Information

console.info('Hey! 👋')