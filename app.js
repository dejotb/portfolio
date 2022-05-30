
// Navigation

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav__list--wrapper');


hamburger.addEventListener('click', function(e) {

    const hamburgerState = e.currentTarget.getAttribute('aria-expanded');

    if (hamburgerState === 'false') {
        console.log(navWrapper);
        // navWrapper.style.transform = 'translateX(0)';
        navWrapper.style.opacity = '1';
        navWrapper.style.display = 'grid';
    }
});

// let hamburger = document.querySelector('.hamburger').getAttribute('aria-expanded');

// console.log(hamburger);




const calcHeight = function() {
    const h1 = document.querySelector('h1')
    const headingCompStyles = window.getComputedStyle(h1);
    const img = document.querySelector('.header__image');

    const handleHeadingHeight = headingCompStyles.getPropertyValue('height').split('px').at(0);

    img.style.height = `${handleHeadingHeight * 1.4}px`;
}

calcHeight()





window.addEventListener('resize', calcHeight)




// Console Information

console.info('Hey! 👋')



const btnSettings = document.querySelector('.btn--settings');
const settingsControlBar = document.querySelector('.settings__control');
btnSettings.addEventListener('click', function() {
    if (btnSettings.getAttribute('aria-expanded') === 'false') {
        settingsControlBar.classList.remove('hidden')
        btnSettings.setAttribute('aria-expanded', 'true');
    } else {
        settingsControlBar.classList.add('hidden')
        btnSettings.setAttribute('aria-expanded', 'false');
    }
})




// Sounds



const btn = document.querySelectorAll('.btn');


document.body.addEventListener('click', function(e) {
    if (e.target.closest('.btn')) {
        const audio = new Audio('sound/click3.mp3');
        const btnClicked = e.target.closest('.btn');
        audio.play();
        console.log(btnClicked);
    }
})