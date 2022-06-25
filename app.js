
// Navigation

const hamburger = document.querySelector('.btn--hamburger');
const btnSettings = document.querySelector('.btn--settings');
const navWrapper = document.querySelector('.nav__list--wrapper');
const header = document.querySelector('.header');
const layout = document.querySelector('.layout');
const btnTheme = document.querySelector('.btn--control-theme');
const btnSound = document.querySelector('.btn--control-sound');
const headerImage = document.querySelector('.header__image');
const headerImageText = document.querySelector('.header__image--text');
const btn = document.querySelectorAll('.btn');
const nav = document.querySelector('.nav');
const surfer = document.querySelector('.surfer-total');
const contactForm = document.querySelector('.contact__form');
const btnFormSubmit = document.querySelector('.btn--form-submit');
const settingsControlBar = document.querySelector('.settings__control');

hamburger.addEventListener('click', function(e) {

    const hamburgerState = e.currentTarget.getAttribute('aria-expanded');

    if (hamburgerState === 'false') {
        navWrapper.classList.add('visible');
        hamburger.setAttribute('aria-expanded', 'true');
        // document.body.style.overflowY = 'hidden'
        // nav.style.opacity = '0';
        hamburger.classList.add('hidden')
        btnSettings.classList.add('hidden')
        // settingsControlBar.classList.add('hidden')
        // btnSettings.setAttribute('aria-expanded', 'false');

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

window.addEventListener('resize', calcHeight);


// Console Information

console.info('Hey! 👋')


// handle settings panel

const handleSettingsPanel = () => {
    if (btnSettings.getAttribute('aria-expanded') === 'false') {
        settingsControlBar.classList.remove('hidden')
        btnSettings.setAttribute('aria-expanded', 'true');
    } else {
        settingsControlBar.classList.add('hidden')
        btnSettings.setAttribute('aria-expanded', 'false');
    }
}

btnSettings.addEventListener('click', handleSettingsPanel)

document.body.addEventListener('click', (e) => {
    if(!e.target.closest('.settings__control') && !e.target.classList.contains('btn--settings')) {
        console.log('dsds');
        settingsControlBar.classList.add('hidden')
        btnSettings.setAttribute('aria-expanded', 'false');
    }
})





const switchControlBtnIconState = function(btnType, state1, state2) {
    let state = btnType.querySelector('[data-title]').getAttribute('data-title');
    if (state === `${state2}`) {
        btnType.querySelector('[data-title]').setAttribute('data-title', `${state1}`);

    }
    else {
        btnType.querySelector('[data-title]').setAttribute('data-title', `${state2}`);
    }
}



// Sounds

const playSound = function(soundName) {
    if (btnSound.getAttribute('data-sound') === 'false') {
        return
    }
    const audio = new Audio(`sound/${soundName}.mp3`);
    audio.play();
}


const switchSoundState = () => {
    let state = btnSound.getAttribute('data-sound');
    state === 'true' ? btnSound.setAttribute('data-sound', 'false') : btnSound.setAttribute('data-sound', 'true');
}

// ??  ustawić local storage i data-sound atrybut

const handleSound = function() {
    let volumeOn = localStorage.getItem('volumeOn');

    const soundOff = () => {
        localStorage.setItem('volumeOn', 'false')
    }

    const soundOn = () => {
        localStorage.setItem('volumeOn', 'true')
    }



    if (volumeOn === 'false') {
        switchSoundState()
        switchControlBtnIconState(btnSound, 'volume_off', 'volume_up');
    }

    btnSound.addEventListener('click', () => {
        switchControlBtnIconState(btnSound, 'volume_off', 'volume_up');
        if (btnSound.getAttribute('data-sound') === 'true') {
            soundOff()
            playSound('sound-off');
            switchSoundState()
        } else {
            soundOn()
            switchSoundState()
            playSound('sound-on');
        }
    })
}

handleSound()




const handleTheme = function() {
    let lightMode = localStorage.getItem('lightMode');
    // let themeIconState = localStorage.getItem('themeIconState');

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
        switchControlBtnIconState(btnTheme, 'dark_mode', 'sunny');
    }

    btnTheme.addEventListener('click', (e) => {
        lightMode = localStorage.getItem('lightMode');

        if (lightMode !== 'enabled') {
            enableLightMode();
            playSound('theme-light-on-sound');
            switchControlBtnIconState(btnTheme, 'dark_mode', 'sunny');
        } else {
            disableLightMode()
            playSound('theme-light-off-sound');
            switchControlBtnIconState(btnTheme, 'dark_mode', 'sunny');

        }

    })


    // let volumeOn = localStorage.getItem('volumeOn');

    // const disableSound = () => {

    // }
}

handleTheme()









nav.addEventListener('click', function(e) {

    if (e.target.closest('.hamburger')) {
        playSound('click9');
        return
    }

    if (e.target.closest('.btn--close') || e.target.closest('.nav__item')) {
        hamburger.setAttribute('aria-expanded', 'false');
        navWrapper.classList.remove('visible');
        hamburger.classList.remove('hidden')
        btnSettings.classList.remove('hidden')


        playSound('click9');

        return
    }
    if (e.target.closest('.btn--settings')) {
        playSound('click9');
        return
    }


    if (e.target.closest('.btn--control-theme')) {
        // switchControlBtnState(e, 'dark_mode', 'sunny')
        // playSound('click4');
    }

    if (e.target.closest('.btn--control-sound')) {

        // switchSoundState()
        // switchControlBtnIconState(btnSound, 'volume_off', 'volume_up');
        // playSound('click3');
    }
})




// Animation of header image text on click

header.addEventListener('click', function(e) {
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


// Animarion of surfer on click

surfer.addEventListener('click', () => {
    playSound('happy')
})





// send email

const contactEmail = document.querySelector('.contact__email');
const contactAlertForm = document.querySelector('.contact__alert--form');
const contactAlertEmail = document.querySelector('.contact__alert--email');
// const contactAlertText = document.querySelector('.contact__alert--text');

const handlePopup = function (contactAlert, text) {
    contactAlert.textContent = text;
    contactAlert.classList.remove('hidden');

    setTimeout( () => {
        contactAlert.classList.add('hidden');
    }, 4000);

}

const sendEmail = async function() {
   try {
        const formEmail = document.querySelector('#email').value;
        const formName = document.querySelector('#name').value;
        const formMessage = document.querySelector('#message').value;

        const resForm = await fetch("https://formsubmit.co/ajax/dejotb1@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            eMail: `${formEmail}`,
            name: `${formName}`,
            message: `${formMessage}`,
        })
    });

        const responseForm = await resForm.json();
        if (responseForm.success !== 'true') {
            handlePopup(contactAlertForm, `Something went wrong! 🚫 Your message wasn't sent!`);
            throw new Error(responseForm.message);
        }
        handlePopup(contactAlertForm, 'Message sent! 🤙 Thanks!');
        playSound('happy')

   } catch(error) {
    handlePopup(contactAlertForm, `Something went wrong! 🚫 Your message wasn't sent!`);
    console.log(error);
   }
}


// copy mail to clippboard

const coppiedText = document.querySelector('#copyText');

const copyToClipboard = () => {
console.log(coppiedText.textContent.split('\n')[0]);
    navigator.clipboard.writeText(coppiedText.textContent.split('\n')[0])
}


coppiedText.addEventListener('click', copyToClipboard)


contactEmail.addEventListener('click', function() {
    handlePopup(contactAlertEmail, 'Copied!')
})
