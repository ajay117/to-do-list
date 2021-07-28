const form = document.getElementById('user-form');
let userInput = document.querySelector('#user-input');
let toDoItemsContainer = document.querySelector('.to-do');

console.log(toDoItemsContainer);
form.addEventListener('submit',toDoLogic);



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

    para.textContent = userToDo;
    button.textContent = 'Delete';
        
    div.classList.add('flex');

    div.appendChild(para);
    div.appendChild(button);
    toDoItemsContainer.appendChild(div);
}