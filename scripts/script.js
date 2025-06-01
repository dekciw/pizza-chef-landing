// Нашли нужный нам элемент от которого будем делать плавную прокрутку.
document.getElementById('choose-pizza').onclick = function () {
    // Сделали плавную прокрутку
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: 'smooth'})
}

//Нашли class у кнопок
let addToCardButtons = document.getElementsByClassName('btn-add-to-cart');
// Нашли название каждой пиццы
let productInput = document.getElementById('product-input');
//Нашли input ввода номера телефона
let phoneInput = document.getElementById('phone-input');

// Создали цикл для отслеживания каждой кнопки
for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].onclick = function (e) {
        // Нашли название пиццы и input подставив туда нужный элемент
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        // Повторили плавную прокрутку
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: 'smooth'})
    }
}

//Валидация формы
document.getElementById('create-order').onclick = function () {
    // Нашли input для адреса и телефона
    let addressInput = document.getElementById('address-input');

    // Создали условие - если пицца не выбрана то выходит alert
    if (!productInput.value) {
        alert('Выберите пиццу');
        return;
    }
    // Создали еще условие - если адрес не введен то выходит alert
    if (!addressInput.value) {
        alert('Заполните адрес');
        return;
    }
    // Создали еще условие - если телефон не введен то выходит alert
    if (!phoneInput.value) {
        alert('Заполните номер телефона');
        return;
    }
    // Выводим alert если заказ успешно оформлен
    alert('Спасибо за заказ.');
}

//Разрешаем в inputPhone ввод только цифр
phoneInput.onkeydown = (e) => {
    let number = parseInt(e.key);
    // Проверяем, является ли введенный символ числом или клавишей Backspace
    if (isNaN(number) && e.key !== 'Backspace') {
        // Предотвращаем действие по умолчанию только для неподходящих символов, а не для Backspace
        e.preventDefault();
    }

    // Делаем маску для номера телефона в формате +7(927)93-81-000
    phoneInput.oninput = (e) => {
        let inputValue = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
        let formattedValue = '';

        if (inputValue.length >= 1) {
            formattedValue += '+' + inputValue.charAt(0);
        }
        if (inputValue.length >= 2) {
            formattedValue += '(' + inputValue.slice(1, 4);
        }
        if (inputValue.length >= 5) {
            formattedValue += ')' + inputValue.slice(4, 7);
        }
        if (inputValue.length >= 7) {
            formattedValue += '-' + inputValue.slice(7, 9);
        }
        if (inputValue.length >= 9) {
            formattedValue += '-' + inputValue.slice(9, 12);
        }

        e.target.value = formattedValue;
    }
}

// Очищаем поля формы
const clearInput = document.getElementsByClassName('btn-order')[0];
clearInput.addEventListener('click', function () {
    document.getElementById('order-form').reset();
});