import { toDoObjectArray } from '../script.js';
import { toDoElement } from './toDoElement.js';
import { userInputTitle, userInputDescription } from '../script.js';


export function toDoObjectPopulate() {
    toDoObjectArray.push(toDoElement(userInputTitle.value, userInputDescription.value));
    localStorage.setItem('toDoObjectArray', JSON.stringify(toDoObjectArray));
}