import { toDoItemsContainer, toDoObjectArray } from "../script.js";

// Create and Add 'To Do' elements to DOM...
export function toDoContainerPopulate(obj) {
    
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
        toDoObjectArray.splice(0,toDoObjectArray.length);
        toDoObjectArray.push(JSON.parse(localStorageStr));
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

