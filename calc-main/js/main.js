const numbers = [...document.querySelectorAll('.num')]
const signs = document.querySelectorAll('.sign')
const display = document.querySelector('input')
const dot = document.querySelector('.dot')
const clear = document.querySelector('.c')
const remove = document.querySelector('.r')
const equal = document.querySelector('.equal')

class Calculator {
    signView
    signOperator
    operators = ['+','-','✕','÷']
    get lastValue() {
        return display.value[display.value.length - 1]
    }

    get firstValue() {
        return display.value()
    }
    setDisplay(value) {
        display.value = display.value + value
    }
    numbers(event) {
        let num = event.target.textContent
        this.setDisplay(num)

        if (this.lastValue == 0 && display.value.length == 1)
            return display.value = num
        if (
            this.lastValue == 0 && this.signView
        ) return display.value = display.value.slice(0, -1) + num

        this.setDisplay(num)
        if (
            !display.value ||
            this.lastValue == "." ||
            this.signOperator
        ) return
    }
    signs(event) {
        const signView = event.target.textContent
        const signOperator = event.target.dataset.sign
       


        this.signView = signView
        this.setDisplay(signView)
    }

    dot() {
        this.setDisplay('.')
        if (
            !display.value ||
            this.operators.includes(this.lastValue)
        ) {
            display.value = display.value + '0.'
        }
        if (
            !display.value ||
            this.lastValue == "."
        ) return
    }
    clear() {
        display.value = null
    }

    remove() {
        let deleted = display.value.split("")
        let newValue = deleted.slice(0, -1).join("")

        display.value = newValue
    }


    equal() {
      const [num1, num2] = display.value.split(this.signView)
      console.log(num1,num2)
      display.value = eval(num1 + this.signOperator + num2)
      this.signOperator = null
      this.signView = null
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

clear.addEventListener('click', e => {
    calc.clear()
})

remove.addEventListener('click', e => {
    calc.remove()
})