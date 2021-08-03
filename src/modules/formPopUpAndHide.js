import { form } from "../script.js";

export function popUpForm() {
    form.classList.remove('hide');
}
export function hideForm() {
    form.classList.add('hide');
}