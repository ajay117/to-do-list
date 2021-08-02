import './style.css';


let form = document.getElementById('user-form');
let userInputTitle = document.querySelector('.user-input');
let userInputDescription = document.querySelector('.description');
let toDoItemsContainer = document.querySelector('.to-do-list');
let addToDoMarker = document.querySelector('.add-to-do-marker');
let submitButton = document.querySelector('.submit-button');
let cancelButton = document.querySelector('.cancel-button');
let toDoObjectArray = []; //Store all to do as obects in Array.

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

//Function Declarations...
function toDoLogic(e) {
    e.preventDefault();
    toDoObjectPopulate();
    toDoContainerPopulate(toDoObjectArray[toDoObjectArray.length -1]);
    toDoItemsContainer.classList.remove('hide');
    fillDefaultValues();
    form.reset();
}

function toDoObjectPopulate() {
    toDoObjectArray.push(toDoElement(userInputTitle.value, userInputDescription.value));
    localStorage.setItem('toDoObjectArray', JSON.stringify(toDoObjectArray));
}


//Factory function to create user to do object...
function toDoElement(title,description) {
    return {
        title,
        description
        // dueDate,
        // priority
    }
}


//Create and Add 'To Do' elements to DOM...
function toDoContainerPopulate(obj) {
    let div = document.createElement('div');
    let usertoDoDiv = document.createElement('div'); //Div container for user to do elements...  2nd div
    let paraTitle = document.createElement('p');
    let paraDescription = document.createElement('p');
    let deleteBtn = document.createElement('button');
    let createCheckbox = document.createElement('input');
    createCheckbox.type = 'checkbox';

    paraTitle.innerHTML = '<span class="user-title">Title :</span> ' + obj.title;
    paraDescription.innerHTML = '<span class="user-description">Description :</span> ' + obj.description;

    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.style.width = '25px';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.classList.add('btn','btn-danger');
        
    div.classList.add('flex','flex-align-baseline');
    div.style.margin = '0 0 10px 0';

    createCheckbox.classList.add('flex-child');
    usertoDoDiv.classList.add('flex-child');
    deleteBtn.classList.add('flex-child');
    
    usertoDoDiv.appendChild(paraTitle);
    usertoDoDiv.appendChild(paraDescription);
    usertoDoDiv.classList.add('flex-grow');

    div.appendChild(createCheckbox);
    div.appendChild(usertoDoDiv);
    div.appendChild(deleteBtn);
    div.classList.add('border');
    toDoItemsContainer.appendChild(div);    
    
    deleteBtn.addEventListener('click', () => {
        let localStorageStr;
        let index = toDoObjectArray.indexOf(obj);
        toDoItemsContainer.removeChild(div);
        toDoObjectArray.splice(index,1);
        localStorage.setItem('toDoObjectArray', JSON.stringify(toDoObjectArray));        
        localStorageStr =  localStorage.getItem('toDoObjectArray');
        toDoObjectArray = JSON.parse(localStorageStr);
    });
    createCheckbox.addEventListener('change', (e) => {
        if(e.target.checked) {
            paraTitle.classList.add('task-complete');
            paraDescription.classList.add('task-complete');            
        } else {
            paraTitle.classList.remove('task-complete');
            paraDescription.classList.remove('task-complete');            
        }
    });
}

function popUpForm() {
    form.classList.remove('hide');
}

function hideForm() {
    form.classList.add('hide');
}

function fillDefaultValues() {
    userInputTitle.value = 'Title...';
    userInputTitle.classList.add('text-light');
    userInputDescription.textContent = 'Description...';
    userInputDescription.classList.add('text-light');
}