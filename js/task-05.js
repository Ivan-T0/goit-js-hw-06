const inputEl = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputEl.addEventListener('input', hendleInputChange);
function hendleInputChange(event) {
    console.log(event.currentTarget.value);
    nameOutput.textContent = event.currentTarget.value || 'Anonymous';
     
}