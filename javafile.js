const fname = document.getElementById('fname')
const pass = document.getElementById('pass')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const adress = document.getElementById('adress')
const form = document.getElementById('form')
const error = document.getElementById('error')
form.addEventListener('submit', (e) => {
    let messages = []
    const passv = pass.value.trim();
    const phonev = phone.value.trim();
    
    if(passv.length !==8  || passv[0].search(/[A-Z]/)===-1||passv.search(/[0-9]/)===-1 ||passv.search(/\s/) !== -1 ||passv.search(/[@#$%^&*_-]/)===-1 ){
        messages.push('Password must start with upper case char,one digit and one special char(&-_&#) at least ,no white spaces and only 8 characters')
    }
    let message = []
    if(phonev.length!==11){
        message.push('the phone number must be 11 digit')

    }
    if (message.length > 0){
        e.preventDefault()
        error1.innerText = message
    }
if (messages.length > 0){
    e.preventDefault()
    error.innerText = messages
}

} )