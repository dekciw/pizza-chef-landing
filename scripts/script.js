// ========= Инициализация плавного перехода к каталогу =========
const choosePizzaButton = document.getElementById('choose-pizza');
const productsSection = document.querySelector('.products');

if (choosePizzaButton && productsSection) {
	choosePizzaButton.addEventListener('click', () => {
		productsSection.scrollIntoView({ behavior: 'smooth' });
	});
}

// ========= Подготовка элементов формы заказа =========
const productInput = document.getElementById('product-input');
const addressInput = document.getElementById('address-input');
const phoneInput = document.getElementById('phone-input');
const orderSection = document.querySelector('.order');
const orderForm = document.getElementById('order-form');
const orderButton = document.getElementById('create-order');

// ========= Автозаполнение выбранной пиццы и прокрутка к форме =========
const addToCartButtons = document.querySelectorAll('.products__add-button');

addToCartButtons.forEach(button => {
	button.addEventListener('click', event => {
		const productCard = event.target.closest('.products__item');
		if (!productCard || !productInput) {
			return;
		}

		const productName = productCard.querySelector('.products__name');
		if (productName) {
			productInput.value = productName.textContent.trim();
		}

		if (orderSection) {
			orderSection.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// ========= Проверяем форму перед оформлением заказа =========
if (orderButton) {
	orderButton.addEventListener('click', () => {
		if (!productInput || !addressInput || !phoneInput || !orderForm) {
			return;
		}

		if (!productInput.value) {
			alert('Выберите пиццу');
			return;
		}

		if (!addressInput.value) {
			alert('Заполните адрес');
			return;
		}

		if (!phoneInput.value) {
			alert('Заполните номер телефона');
			return;
		}

		alert('Спасибо за заказ.');
		orderForm.reset();
	});
}

// ========= Ограничиваем ввод телефона только цифрами =========
if (phoneInput) {
	phoneInput.addEventListener('keydown', event => {
		const isDigit = /\d/.test(event.key);
		const isControlKey = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key);

		if (!isDigit && !isControlKey) {
			event.preventDefault();
		}
	});

	// ========= Формируем маску номера телефона =========
	phoneInput.addEventListener('input', event => {
		const numericValue = event.target.value.replace(/\D/g, '');
		let formattedValue = '';

		if (numericValue.length >= 1) {
			formattedValue += '+' + numericValue.charAt(0);
		}
		if (numericValue.length >= 2) {
			formattedValue += '(' + numericValue.slice(1, 4);
		}
		if (numericValue.length >= 5) {
			formattedValue += ')' + numericValue.slice(4, 7);
		}
		if (numericValue.length >= 7) {
			formattedValue += '-' + numericValue.slice(7, 9);
		}
		if (numericValue.length >= 9) {
			formattedValue += '-' + numericValue.slice(9, 12);
		}

		event.target.value = formattedValue;
	});
}
