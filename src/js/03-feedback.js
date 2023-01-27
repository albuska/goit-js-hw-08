import throttle from 'lodash.throttle'; 

const formRef = document.querySelector('.feedback-form'); 
const inputRef = document.querySelector('.feedback-form input'); 
const textareaRef = document.querySelector('.feedback-form textarea'); 

formRef.addEventListener('input', throttle(getFieldsForm, 500)); 
formRef.addEventListener('submit', onFormSubmit);

const FEEDBACK_FORM_STATE = "feedback-form-state"; 

function getFieldsForm() {

const valuesForm = {
    mail: formRef.email.value,
    message: formRef.message.value,   
}
const valuesFormJSON = JSON.stringify(valuesForm); 

console.log("🚀 valuesForm", valuesForm);

localStorage.setItem(FEEDBACK_FORM_STATE, valuesFormJSON); 

}

populateSavedData();

function onFormSubmit(event) {
    event.preventDefault(); 

    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);    
}

function populateSavedData() {

const savedData = localStorage.getItem(FEEDBACK_FORM_STATE); 
 
const valusParse = JSON.parse(savedData);
 
if(valusParse) {
    inputRef.value = valusParse.mail; 
    textareaRef.value = valusParse.message;
    console.log(valusParse);  
}
}