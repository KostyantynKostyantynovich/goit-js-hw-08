import throttle from 'lodash.throttle';


const refs = {
    input: document.querySelector('.feedback-form input'),
form : document.querySelector('.feedback-form'),
textarea: document.querySelector('.feedback-form textarea'),
}

refs.input.addEventListener('input', throttle(inputDate, 500));
refs.textarea.addEventListener('input', throttle(textareaDate, 500));
refs.form.addEventListener('submit', submitDate);

let dataObj = {};

function inputDate(evt) {
    dataObj.email = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj))
};

function textareaDate(evt) {
    dataObj.message = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj))
};

function isUserDate() {
    const saveDate = localStorage.getItem('feedback-form-state');

    if (saveDate) {
       dataObj = JSON.parse(saveDate);
       refs.input.value = dataObj.email;
       refs.textarea.value = dataObj.message;
    }
};

function submitDate(evt) {
    evt.preventDefault();
    console.log(dataObj);
    localStorage.removeItem('feedback-form-state');
    refs.input.value = '';
    refs.textarea.value = '';
}

isUserDate();



