import { toDoObjectArray } from '../script.js';
import { toDoElement } from './toDoElement.js';
import { userInputTitle, userInputDescription } from '../script.js';

//This will push user input toDoObjectArray...
export function toDoObjectPopulate() {
    toDoObjectArray.push(toDoElement(userInputTitle.value, userInputDescription.value));
    localStorage.setItem('toDoObjectArray', JSON.stringify(toDoObjectArray));
}