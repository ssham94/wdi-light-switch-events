document.addEventListener('DOMContentLoaded', function(){
    const status = document.querySelector('.status');
    const lightSwitch = document.querySelector('.switch')
    const body = document.querySelector('body')

    lightSwitch.addEventListener('click', function(e){
        if (lightSwitch.getAttribute('class') === 'switch on'){
            lightSwitch.setAttribute('class', 'switch off')
            body.setAttribute('class', 'dark')
            status.innerHTML = 'Hey, who turned off the lights?'
        } else if (lightSwitch.getAttribute('class') === 'switch off'){
            lightSwitch.setAttribute('class', 'switch on')
            body.setAttribute('class', 'light')
            status.innerHTML = 'It\'s so bright in here!'

        }
    })
})