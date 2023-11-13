const btnDecrease = document.getElementById('flex-box').getElementsByTagName('button')[0]
const btnReset = document.getElementById('flex-box').getElementsByTagName('button')[1]
const btnIncrease = document.getElementById('flex-box').getElementsByTagName('button')[2]
const number = document.getElementById('number')

var initialValue = 0
var value = initialValue

number.textContent = value

function increase() {
    value++
    number.textContent = value
}

function decrease() {
    value--
    number.textContent = value
}

function reset()    {
    value = initialValue
    number.textContent = value
}

btnDecrease.addEventListener("click", decrease)
btnReset.addEventListener("click", reset)
btnIncrease.addEventListener("click", increase)