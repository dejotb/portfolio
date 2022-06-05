
// Navigation

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav__list--wrapper');
const header = document.querySelector('.header');

hamburger.addEventListener('click', function(e) {

    const hamburgerState = e.currentTarget.getAttribute('aria-expanded');

    if (hamburgerState === 'false') {
        navWrapper.classList.add('visible');
        hamburger.setAttribute('aria-expanded', 'true');
    }
});


const calcHeight = function() {
    const h1 = document.querySelector('h1')
    const headingCompStyle = window.getComputedStyle(h1);
    const img = document.querySelector('.header__image');

    const handleHeadingHeight = headingCompStyle.getPropertyValue('height');

    img.style.height = handleHeadingHeight;
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
const nav = document.querySelector('.nav');

const playSound = function(soundName) {
    const audio = new Audio(`sound/${soundName}.mp3`);
    audio.play();
}

const switchControlBtnState = function(e, state1, state2) {
    let themeState = e.target.querySelector('[data-title]').getAttribute('data-title');
    if (themeState === `${state2}`) {
        e.target.querySelector('[data-title]').setAttribute('data-title', `${state1}`);
    }
    else {
        e.target.querySelector('[data-title]').setAttribute('data-title', `${state2}`);
    }
}

nav.addEventListener('click', function(e) {

    if (e.target.closest('.hamburger')) {
        playSound('click9');
        return
    }

    if (e.target.closest('.btn--close') || e.target.closest('.nav__item')) {
        // setTimeout(() => {
        // }, 450);
        hamburger.setAttribute('aria-expanded', 'false');
        navWrapper.classList.remove('visible');


        playSound('click9');

        return
    }
    if (e.target.closest('.btn--settings')) {
        playSound('click9');
        return
    }

    if (e.target.closest('.btn--control-theme')) {
        switchControlBtnState(e, 'dark_mode', 'sunny')
        playSound('click4');
    }

    if (e.target.closest('.btn--control-sound')) {
        switchControlBtnState(e, 'volume_off', 'volume_up')
        playSound('click3');
    }


})


header.addEventListener('click', function(e) {
    if (e.target.closest('.header__image')) {
        playSound('hello');
    }
})

