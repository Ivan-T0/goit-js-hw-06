const counterValue = document.querySelector('#value');
const addCounterBtn = document.querySelector('button[data-action="increment"]');
const removeCounterBtn = document.querySelector('button[data-action="decrement"]');

addCounterBtn.addEventListener('click', () => {
    console.log('добавляю +1 к счетчику');
     counterValue.textContent = parseInt(counterValue.textContent) + 1;
})

    removeCounterBtn.addEventListener('click', () => {
        console.log('снимаю -1 к счетчику');
        counterValue.textContent = parseInt(counterValue.textContent) - 1;
    })

