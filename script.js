function postMessage(message){

   const p = document.querySelector('#message')
   message = message.toUpperCase() 
   p.textContent = message
}

const textbox = document.querySelector(`input`)
const form = document.querySelector('form')
const submitbtn = document.querySelector(`button`)
const messageArea = document.querySelector('.message-group')

submitbtn.addEventListener('click', (e)=>{
    postMessage(textbox.value)
})