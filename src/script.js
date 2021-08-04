import './style.css'; 

import toDoLogic from './modules/toDoLogic.js';
import toDoElement from './modules/toDoElement.js';
import { toDoContainerPopulate } from './modules/toDoContainerPopulate.js';
import {popUpForm, hideForm} from './modules/formPopUpAndHide.js';


export let form = document.getElementById('user-form');
export let userInputTitle = document.querySelector('.user-input');
export let userInputDescription = document.querySelector('.description');
export let toDoItemsContainer = document.querySelector('.to-do-list');
let addToDoMarker = document.querySelector('.add-to-do-marker');
let submitButton = document.querySelector('.submit-button');
let cancelButton = document.querySelector('.cancel-button');
export let toDoObjectArray = []; //Store all to do as obects in Array.
export let toDoTitleContainer = document.querySelector('.to-do-title');

//If Local Storage length is greater than zero,
//toDoObjectArray will receive all user data from local storage..
if(localStorage.length > 0) {
    let localStorageStr = localStorage.getItem('toDoObjectArray');
    toDoObjectArray = JSON.parse(localStorageStr);

    toDoObjectArray.forEach(obj => {
        toDoContainerPopulate(obj);
    });
}

toDoObjectArray.forEach(obj => {
    let p = document.createElement('p');
    let a = document.createElement('a');
    a.href = '#';

    a.textContent = obj.title;
    if((obj.title).length > 10) {
        a.textContent = (obj.title).slice(0,10) + '...';
    }

    p.appendChild(a);
    toDoTitleContainer.classList.add('ml-15', 'text-small');
    toDoTitleContainer.appendChild(p);

    a.addEventListener('click', () => {
        toDoItemsContainer.innerHTML = '';
        toDoContainerPopulate(obj);
    });
    
})

form.addEventListener('submit',toDoLogic);

addToDoMarker.addEventListener('click', () => {
    popUpForm();
    toDoItemsContainer.classList.add('hide');
});

submitButton.addEventListener('click',hideForm);

cancelButton.addEventListener('click', () => {
    hideForm();
    form.reset();
    toDoItemsContainer.classList.remove('hide');
});

userInputTitle.addEventListener('focus', (e) => {
    e.target.value = '';
    userInputTitle.classList.remove('text-light');
});

userInputDescription.addEventListener('focus', (e) => {
    e.target.textContent = '';
    userInputDescription.classList.remove('text-light');
});


