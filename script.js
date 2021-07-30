const form = document.getElementById('user-form');
let userInput = document.querySelector('#user-input');
let toDoItemsContainer = document.querySelector('.to-do-list');
let addToDoMarker = document.querySelector('.add-to-do-marker');
let submitButton = document.querySelector('.submit-button');


form.addEventListener('submit',toDoLogic);
addToDoMarker.addEventListener('click', () => {
    popUpForm();
    userInput.focus();
});
submitButton.addEventListener('click',hideForm);

//Function Declarations...
function toDoLogic(event) {
    addToDoElement();
    form.reset();
    event.preventDefault();
}

function addToDoElement() {
    let userToDo = userInput.value;
    let div = document.createElement('div');
    let para = document.createElement('p');
    let button = document.createElement('button');
    let createCheckbox = document.createElement('input');
    
    createCheckbox.type = 'checkbox';
    para.textContent = userToDo;
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';
    button.style.width = '25px';
    button.style.borderRadius = '5px';
    button.classList.add('btn');
    button.classList.add('btn-danger');
        
    div.classList.add('flex','flex-align-baseline');
    div.style.margin = '0 0 10px 0';

    createCheckbox.classList.add('flex-child');
    para.classList.add('flex-child');
    button.classList.add('flex-child');
    

    div.appendChild(createCheckbox);
    div.appendChild(para);
    div.appendChild(button);
    toDoItemsContainer.appendChild(div);
    
    
    button.addEventListener('click', () => {
        toDoItemsContainer.removeChild(div);
    });
    createCheckbox.addEventListener('change', (e) => {
        if(e.target.checked) {
            para.classList.add('task-complete');
        } else {
            para.classList.remove('task-complete');
        }
    });
}

function popUpForm() {
    form.classList.remove('hide');
}

function hideForm() {
    form.classList.add('hide');
}