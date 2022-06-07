
// Navigation

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav__list--wrapper');
const header = document.querySelector('.header');
const layout = document.querySelector('.layout');
const settingsControlPanel = document.querySelector('.settings__control');
const btnTheme = document.querySelector('.btn--control-theme');

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

// Animation of header image text on click

header.addEventListener('click', function(e) {
    const headerImage = document.querySelector('.header__image');
    const headerImageText = document.querySelector('.header__image--text');

    if (e.target.closest('.header__image')) {
        headerImage.style.position = 'relative';
        headerImageText.classList.remove('hidden');
        setTimeout(() => {
            headerImageText.classList.add('hidden');
            headerImage.style.position = 'static';
        }, 650);
        playSound('hello');
    }
})





const handleTheme = function() {
    let lightMode = localStorage.getItem('lightMode');

    const enableLightMode = () => {
        // add the class lightMode to the layout container
        layout.classList.add('lightMode');

        // update lightMode in the localStorage
        localStorage.setItem('lightMode', 'enabled');
    }

    const disableLightMode = () => {
        // add the class lightMode to the layout container
        layout.classList.remove('lightMode');

        // update lightMode in the localStorage
        localStorage.setItem('lightMode', null);
    }

    if (lightMode === 'enabled') {
        enableLightMode();
    }

    btnTheme.addEventListener('click', (e) => {
        lightMode = localStorage.getItem('lightMode');

        if (lightMode !== 'enabled') {
            enableLightMode();
        } else {
            disableLightMode()
        }

    })
}

handleTheme()


let soundMute = localStorage.getItem('soundMute');

const disableSound = () => {

}