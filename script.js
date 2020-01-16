let emailInput = document.querySelector('#email-input');
const validate = () => {
     if(emailInput.value == "") 
    {
        emailInput.classList.add('error');
        return false;
    }  
}

emailInput.addEventListener('focus', () => {
	emailInput.classList.remove('display');
});