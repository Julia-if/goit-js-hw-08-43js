import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

updateOutput();
form.addEventListener("submit", submitForm);
form.addEventListener("input", throttle(saveMessage, 5000));

function submitForm(evt) {
    evt.preventDefault();
    const a = localStorage.getItem(LOCALSTORAGE_KEY);
    const b = JSON.parse(a)
    console.log(b);
    updateOutput();
    form.reset();
    localStorage.clear();

}

function saveMessage(evt) {
    const object = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

function updateOutput() {

    try {
        const a = localStorage.getItem(LOCALSTORAGE_KEY);
        const data = JSON.parse(a);
        const email = form.elements.message.value = data.message || "";
        const message = form.elements.email.value = data.email || "";
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
};
export default throttle;