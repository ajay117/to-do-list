import { toDoObjectPopulate } from "./toDoObjectPopulate.js";
import { toDoContainerPopulate } from "./toDoContainerPopulate.js";
import { fillDefaultValues } from "./fillDefaultValues.js";
import { toDoItemsContainer, toDoObjectArray, form } from "../script.js";


export default function toDoLogic(e) {
    e.preventDefault();
    toDoObjectPopulate();
    toDoContainerPopulate(toDoObjectArray[toDoObjectArray.length -1]);
    toDoItemsContainer.classList.remove('hide');
    fillDefaultValues();
    form.reset();
}