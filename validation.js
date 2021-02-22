const nameValidation = document.getElementById('name-validation')
const nameIcon = document.getElementById('name-icon')
const lastNameValidation = document.getElementById('last-name-validation')
const lastNameIcon = document.getElementById('last-name-icon')
const passwordValidation = document.querySelectorAll('.password-validation')
const passwordIcon = document.getElementById('password-icon')
const emailValidation = document.getElementById('email-validation')
const emailIcon = document.getElementById('email-icon')
const lastValidation = document.getElementById('last-validation')
const dateValidation = document.getElementById('date-validation')
const dateIcon = document.getElementById('date-icon')

const firstName = document.getElementById('name')
const password = document.getElementById('password')
const lastName= document.getElementById('last-name')
const email = document.getElementById('email')
const date = document.getElementById('date')

function checkLenght(value,number){
    if(value.length >= number){
        return true  
    }
    else{
        return false
    }
}

function checkNumber(string){
    const array=Array.from(string)
    for(let i=0; i< string.length;i++){
        if(array[i] == parseInt(array[i])){
            return true
        }
    }
    return false
}

function calculateAge(birthday) {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function liveCheckName(event){
    const value = event.target.value
    if(value === ""){
        nameValidation.classList.remove('show')
        nameIcon.classList.remove('show')
        return
    }
    nameIcon.classList.add('show')
    nameValidation.classList.add('show')
    if(checkNumber(value)){
        nameIcon.classList.add('check-invalid')
        nameValidation.style.color = '#c0392b'
        nameValidation.innerHTML = "Can't contain numbers"
    }
    else{
        nameIcon.classList.remove('check-invalid')
        nameValidation.classList.remove('show')
    }
}

function liveCheckLastName(event){
    const value = event.target.value
    if(value === ""){
        lastNameIcon.classList.remove('show')
        lastNameValidation.classList.remove('show')
        return
    }
    lastNameValidation.classList.add('show')
    lastNameIcon.classList.add('show')
    if(checkNumber(value)){
        lastNameIcon.classList.add('check-invalid')
        lastNameValidation.style.color = '#c0392b'
        lastNameValidation.innerHTML = "Can't contain numbers"
    }
    else{
        lastNameIcon.classList.remove('check-invalid')
        lastNameValidation.classList.remove('show')
    }
}


function liveCheckPassword(event){
    const value = event.target.value
    if(value === ""){
        passwordValidation.forEach(valid=> valid.classList.remove('show'))
        passwordIcon.classList.remove('show')
        return
    }
    passwordValidation.forEach(valid=> valid.classList.add('show') )
    passwordIcon.classList.add('show')
    if(!checkLenght(value,6)){
        passwordValidation[0].innerHTML="Must be at least 6 characters long"
    }
    else{
        passwordValidation[0].classList.remove('show')
    }
    if(!checkNumber(value)){
        passwordValidation[1].innerHTML="Must contain one number"
    }
    else{
        passwordValidation[1].classList.remove('show')
    }
    if(value.length >=6 && checkNumber(value) ){
        passwordIcon.classList.remove('check-invalid')
    }
    else{
        passwordIcon.classList.add('check-invalid')
    }
}

function checkEmail(event){
    if(event.target.value === ""){
        emailValidation.classList.remove('show')
        emailIcon.classList.remove('show')
        return
    }
    emailValidation.classList.add('show')
    emailIcon.classList.add('show')
    if(!event.target.checkValidity()){
        emailIcon.classList.add('check-invalid')
        emailValidation.innerHTML ="Please insert a valid email"
        emailValidation.style.color = "#c0392b"
    }
    else{
        emailValidation.classList.remove('show')
        emailIcon.classList.remove('check-invalid')
    }
    
}


function checkDate(event){
    const value =new Date(event.target.value)
    const age = calculateAge(value)
    if(age >= 18){
        dateValidation.classList.remove('show')
        dateIcon.classList.add('show')
        dateIcon.classList.remove('check-invalid')
    }
    else{
        dateValidation.classList.add('show')
        dateIcon.classList.add('check-invalid')
    }
}

function checkAndSubmit(event){
    event.preventDefault()
    if( !checkNumber(firstName.value) && !checkNumber(lastName.value) && checkLenght(password.value,6) && checkNumber(password.value) && email.checkValidity() && (calculateAge(new Date(date.value))>18)){
        alert("Sucess");
    }
    else{
        alert('Please fix mistakes and try again')
    }
}