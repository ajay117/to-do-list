let form = document.getElementById('user-form');
let userInput = document.querySelector('.user-input');
let userInputDescription = document.querySelector('.description');
let toDoItemsContainer = document.querySelector('.to-do-list');
let addToDoMarker = document.querySelector('.add-to-do-marker');
let submitButton = document.querySelector('.submit-button');
let cancelButton = document.querySelector('.cancel-button');
let toDoObjectArray = []; //Store all to do as obects in Array.

if(localStorage.length > 0) {
    toDoObjectArray = localStorage.getItem(JSON.parse('toDoObjectArray'));
}

form.addEventListener('submit',toDoLogic);
addToDoMarker.addEventListener('click', () => {
    popUpForm();
});

submitButton.addEventListener('click',hideForm);

cancelButton.addEventListener('click', () => {
    hideForm();
    form.reset();
});

userInput.addEventListener('focus', (e) => {
    e.target.value = '';
    userInput.classList.remove('text-light');
});

userInputDescription.addEventListener('focus', (e) => {
    e.target.textContent = '';
    userInputDescription.classList.remove('text-light');
});

//Function Declarations...
function toDoLogic(e) {
    e.preventDefault();
    toDoContainerPopulate();
    toDoObjectPopulate();
    fillDefaultValues();
    form.reset();
}

function toDoObjectPopulate() {
    toDoObjectArray.push(toDoElement(userInput.value, userInputDescription.value));
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

function toDoContainerPopulate() {
    // let userToDoValue = userInput.value;
    // let userDescriptionValue = userInputDescription.value;

    let div = document.createElement('div');    
    let usertoDoDiv = document.createElement('div'); //Div container for user to do elements...
    let paraTitle = document.createElement('p');
    let paraDescription = document.createElement('p');
    let button = document.createElement('button');
    let createCheckbox = document.createElement('input');
    
    createCheckbox.type = 'checkbox';

    paraTitle.innerHTML = '<span class="user-title">Title :</span> ' + userToDoValue;
    paraDescription.innerHTML = '<span class="user-description">Description :</span> ' + userDescriptionValue;

    button.innerHTML = '<i class="fas fa-trash-alt"></i>';
    button.style.width = '25px';
    button.style.borderRadius = '5px';
    button.classList.add('btn','btn-danger');
        
    div.classList.add('flex','flex-align-baseline');
    div.style.margin = '0 0 10px 0';

    createCheckbox.classList.add('flex-child');
    usertoDoDiv.classList.add('flex-child');
    button.classList.add('flex-child');
    
    usertoDoDiv.appendChild(paraTitle);
    usertoDoDiv.appendChild(paraDescription);
    usertoDoDiv.classList.add('flex-grow');

    div.appendChild(createCheckbox);
    div.appendChild(usertoDoDiv);
    div.appendChild(button);
    div.classList.add('border');
    toDoItemsContainer.appendChild(div);    
    
    button.addEventListener('click', () => {
        toDoItemsContainer.removeChild(div);
    });
    createCheckbox.addEventListener('change', (e) => {
        if(e.target.checked) {
            paraTitle.classList.add('task-complete');
        } else {
            paraTitle.classList.remove('task-complete');
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
    userInput.value = 'Title...';
    userInput.classList.add('text-light');
    userInputDescription.textContent = 'Description...';
    userInputDescription.classList.add('text-light');
}