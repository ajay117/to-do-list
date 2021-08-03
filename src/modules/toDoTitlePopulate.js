import { toDoObjectArray, toDoTitleContainer } from "../script.js";

export function toDoTitlePopulate() {
    let title = toDoObjectArray[toDoObjectArray.length -1].title;
    let p = document.createElement('p');
    p.textContent = title;
    toDoTitleContainer.appendChild(p);
}
