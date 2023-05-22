// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бут// заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    if (email === '' || password === '') {
        alert('Будь ласка, заповніть всі поля)')
        return
    }

    const formData = {
        email: email,
        password: password
    }

    console.log(formData);

    formEl.reset();
});