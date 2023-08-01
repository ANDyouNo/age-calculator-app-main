const yearInput = document.querySelector('.year')
const monthInput = document.querySelector('.month')
const dayInput = document.querySelector('.day')

const button = document.querySelector('button')

const errMsg = document.querySelectorAll('.error')

button.addEventListener('click', function(){
    if (parseInt(yearInput.value) > 2023) {
    errMsg[2].innerText = 'must be a valid date'
    }
    if (parseInt(monthInput.value) > 12) {
        errMsg[1].innerText = 'must be a valid date'
    }
    if (parseInt(dayInput.value) > 31) {
        errMsg[0].innerText = 'must be a valid date'
    }
})

function error() {
    errMsg.innerText = 'error'
}




