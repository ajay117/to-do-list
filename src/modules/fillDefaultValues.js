import { userInputTitle, userInputDescription } from "../script.js";

export function fillDefaultValues() {
    userInputTitle.value = 'Title...';
    userInputTitle.classList.add('text-light');
    userInputDescription.textContent = 'Description...';
    userInputDescription.classList.add('text-light');
}