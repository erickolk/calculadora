import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keys.js"
import themeSwitcher from "./themeSwitcher.js"



const input = document.getElementById('input')
// const resultInput = document.getElementById('result')

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)

document.getElementById('equal').addEventListener('click', calculate)

input.addEventListener('keydown', handleTyping)



document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)