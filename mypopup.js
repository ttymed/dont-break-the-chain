'use strict'

class Counter {
    constructor(options) {
        this.options = options || {}
        this.counter = localStorage['counter'] || 0
    }


    increaseCounter () {
        console.log(localStorage['counter'])
        return ++localStorage['counter']
    }

    decreaseCounter () {
        return  --localStorage['counter']
    }

    returnCounter () {
        return this.counter
    }
}

window.test_counter = new Counter()

window.onload = () => {
    if (document.getElementById('counter') && window.test_counter) {
        let counterDiv = document.getElementById('counter')
        let body = document.getElementsByTagName('body')[0]
        let button = document.createElement('button')
        let button2 = document.createElement('button')
        counterDiv.innerHTML = localStorage['counter']
        button.innerHTML = 'This is the increase button'
        button2.innerHTML = 'This is the decrease button'
        button.addEventListener('click', (() => {
            window.test_counter.increaseCounter()
            counterDiv.innerHTML = localStorage['counter']
        }))
        button2.addEventListener('click', (() => {
            window.test_counter.decreaseCounter()
            counterDiv.innerHTML = localStorage['counter']
        }))
        body.appendChild(button)
        body.appendChild(button2)
    } else if (document.getElementsByClassName('notification')) {
        let message = ''
        message = `The counter is currently at: ${window.test_counter.returnCounter()}`

        document.getElementById('message').innerHTML = message
        document.addEventListener('click', (() => {
            window.close()
        }))
    }
}