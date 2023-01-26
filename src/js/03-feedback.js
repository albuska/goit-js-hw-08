const formRef = document.querySelector('.feedback-form'); 
console.log("🚀 formRef", formRef);

const inputRef = document.querySelector('.feedback-form input');
console.log("🚀 inputRef", inputRef); 

// const textareaRef = document.querySelector('.feedback-form textarea');
// console.log("🚀 textareaRef", textareaRef);

// const buttonRef = document.querySelector('.feedback-form button');
// console.log("🚀 buttonRef", buttonRef); 

formRef.addEventListener('input', getFieldsForm); 

const FEEDBACK_FORM_STATE = "feedback-form-state"; 

function getFieldsForm(event) {
// event.preventDefault(); 
console.log(event.elements.message.value); 
// localStorage.setItem(FEEDBACK_FORM_STATE, formRef.elements.message.value);
}

const object = {
    input: email,
    textarea: message, 
}
console.log(object); 

function getFieldsForm(event) {
            if(event.target.name === 'email') {
  object.input = event.target.value; 
            } else if(event.target.name === 'message')
   object.textarea = event.target.value; 
        }

// function getFieldsForm(event) {
//         if(event.target.name === 'email') {
//     localStorage.setItem(FEEDBACK_FORM_STATE, event.target.value); 
//         } else if(event.target.name === 'message')
//     localStorage.setItem(FEEDBACK_FORM_STATE, event.target.value); 
//     }


// buttonRef.addEventListener('submit', event => {
//     console.log('Форма відправлена', event);
// }); 
