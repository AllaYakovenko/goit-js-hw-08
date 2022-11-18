import throttle from 'lodash.throttle';

const LOCALSTOREGE_KEY = 'feedback-form-state';
const formData = {};
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);
addInputData();
    
function onInput(e) { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTOREGE_KEY, JSON.stringify(formData));

};

function onSubmit(e) { 
    e.preventDefaunt();
    if (localStorage.getItem(LOCALSTOREGE_KEY)) { 
        console.log(JSON.parse(localStorage.getItem(LOCALSTOREGE_KEY)))
    }

    e.currentTurget.reset();
    localStorage.removeItem(LOCALSTOREGE_KEY);
};

function addInputData(evt) { 
    const saveData = JSON.parse(localStorage.getItem(LOCALSTOREGE_KEY))

    if (saveData) { 
        feedbackForm.email.value = saveData.email || ''
        feedbackForm.message.value = saveData.message || ''
    }
}