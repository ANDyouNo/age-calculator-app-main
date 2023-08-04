const inputs = [document.querySelector('.day'), document.querySelector('.month'), document.querySelector('.year')]
const outputs = [document.querySelector('.day-out'), document.querySelector('.month-out'), document.querySelector('.year-out')]
const inputHeader = document.querySelectorAll('.input__header')
const button = document.querySelector('button')
const errMsg = document.querySelectorAll('.error')

// date format DD.MM.YY
let today = new Date()
let rawDate = today.toLocaleDateString('ru')
rawDate = rawDate.split('.')

let birthdateStr = inputs[2].value + '-' + inputs[1].value + '-' + inputs[0].value

console.log(birthdateStr)

button.addEventListener('click', function() {
    let check = 0
    if (parseInt(inputs[0].value) > 31) {
        errMsg[0].innerText = 'Must be a valid date'
        inputs[0].classList.add('error-border')
        inputHeader[0].classList.add('error')
        check += 1
    }
    else {
        errMsg[0].innerText = ''
        inputs[0].classList.remove('error-border')
        inputHeader[0].classList.remove('error')
    }
    if (inputs[1].value > 12) {
        errMsg[1].innerText = 'Must be a valid date'
        inputs[1].classList.add('error-border')
        inputHeader[1].classList.add('error')
        check += 1
    }
    else {
        errMsg[1].innerText = ''
        inputs[1].classList.remove('error-border')
        inputHeader[1].classList.remove('error')
    }
    if (parseInt(inputs[2].value) > parseInt(rawDate[2])) {
        errMsg[2].innerText = 'Must be a valid date'
        inputs[2].classList.add('error-border')
        inputHeader[2].classList.add('error')
        check += 1
    }
    else {
        errMsg[2].innerText = ''
        inputs[2].classList.remove('error-border')
        inputHeader[2].classList.remove('error')
    }
    inputs.forEach((value, index) => {
        if (inputs[index].value == '') {
            errMsg[index].innerText = 'This field is required'
            inputs[index].classList.add('error-border')
            inputHeader[index].classList.add('error')
            check += 1
        }
        else if (check == 0) {
            errMsg[index].innerText = ''
            inputs[index].classList.remove('error-border')
            inputHeader[index].classList.remove('error')
        }
    })
    if (check == 0) {
        let now = new Date(),
            birthdateStr = inputs[2].value + '-' + inputs[1].value + '-' + inputs[0].value,
            birthdate = new Date(birthdateStr),
            diff = now.getTime() - birthdate.getTime()
        outputs[2].innerText = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) // yyyy
        outputs[1].innerText = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))) //mm
        outputs[0].innerText = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24)) //dd
    }        
})

