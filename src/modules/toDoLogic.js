import { toDoObjectPopulate } from "./toDoObjectPopulate.js";
import { toDoContainerPopulate } from "./toDoContainerPopulate.js";
import { fillDefaultValues } from "./fillDefaultValues.js";
import { toDoItemsContainer, toDoObjectArray, form } from "../script.js";
import { toDoTitlePopulate } from "./toDoTitlePopulate.js";
import { userInputTitle, userInputDescription } from '../script.js';

export default function toDoLogic(e) {
    e.preventDefault();
    if(!(userInputTitle.value && userInputDescription.value)) {
        toDoObjectArray.forEach(obj => toDoContainerPopulate(obj));
        console.log('ok');
        fillDefaultValues();
        return;        
    }
    toDoObjectPopulate();
    toDoContainerPopulate(toDoObjectArray[toDoObjectArray.length -1]);
    toDoItemsContainer.classList.remove('hide');
    toDoTitlePopulate();
    fillDefaultValues();
    form.reset();
}