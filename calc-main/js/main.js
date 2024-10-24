const numbers = [...document.querySelectorAll('.num')]
const signs = document.querySelectorAll('.sign')
const display = document.querySelector('input')
const dot = document.querySelector('.dot')
const clear = document.querySelector('.c')
const remove = document.querySelector('.r')
const equal = document.querySelector('.equal')

class Calculator {
    setDisplay(value) {
        display.value = display.value + value
    }
    numbers(event) {
        let num = event.target.textContent
        this.setDisplay(num)
    }
    signs(event) {
        const signView = event.target.textContent
        this.setDisplay(signView)
    }

    dot() {
        this.setDisplay('.')
    }
    clear() {
        display.value = null
    }

    remove() {
     let deleted = display.value.split("")
     let newValue = deleted.slice(0,-1).join("")

     display.value = newValue
    }
   

    equal() {

    }
}
const calc = new Calculator()

for (const number of numbers) {
    number.addEventListener('click', e => {
        calc.numbers(e)
    })
}

for (const sign of signs) {
    sign.addEventListener('click', e => {
        calc.signs(e)
    })
}

dot.addEventListener('click', e => {
    calc.dot()
})

clear.addEventListener('click' , e => {
    calc.clear()
})

remove.addEventListener('click',e => {
    calc.remove()
})