const inputs = [document.querySelector('.year'), document.querySelector('.month'), document.querySelector('.day')]
const outputs = [document.querySelector('.year-out'), document.querySelector('.month-out'), document.querySelector('.day-out')]
const inputHeader = document.querySelectorAll('.input__header')

const button = document.querySelector('button')
let check = 0
var today = new Date()

var now = today.toLocaleDateString('en-US')

const dateValues = now.split('/')

const errMsg = document.querySelectorAll('.error')

button.addEventListener('click', error)

function error() {
    errMsg.forEach((value, index) => {
        if (inputs[0].value > 2023 || inputs[1].value > 12 || inputs[2].value > 31) {
            errMsg[index].innerText = 'Must be a valid date'
            inputs[index].classList.add('error-border')
            inputHeader[index].classList.add('error')
        } else if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '') {
            errMsg[index].innerText = 'This field is required'
            inputs[index].classList.add('error-border')
            inputHeader[index].classList.add('error')
        }
        else {
            errMsg[index].innerText = ''
            inputs[index].classList.remove('error-border')
            inputHeader[index].classList.remove('error')
            check = 1
        }
    })
}

button.addEventListener('click', output)

function output() {
    if (check == 1) {
        outputs[0].innerText = parseInt(dateValues[2]) - parseInt(inputs[0].value)
        outputs[1].innerText = parseInt(dateValues[1]) - parseInt(inputs[2].value)
        outputs[2].innerText = parseInt(dateValues[0]) - parseInt(inputs[1].value)
    }
}





