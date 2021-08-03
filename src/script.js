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
let toDoTitleContainer = document.querySelector('.to-do-title');

//If Local Storage length is greater than zero,
//toDoObjectArray will receive all user data from local storage..
if(localStorage.length > 0) {
    let localStorageStr = localStorage.getItem('toDoObjectArray');
    toDoObjectArray = JSON.parse(localStorageStr);

    toDoObjectArray.forEach(obj => {
        toDoContainerPopulate(obj.title, obj.description);
    });
}

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
