const cardEl = document.querySelector('.card');

/* Promise.any() */
const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, 'sight');
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'insights');
});

Promise.any([promise1, promise2]).then(function (text) {
	const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
	cardTitleSpanEl.textContent = text;
});

/* String replaceAll() */
let description =
	'Discover the benefits of data analytics and make better decisions regarding revenue; customer experience; and overall efficiency.';
description = description.replaceAll(';', ',');

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = description;

/* Numeric Separators (_) */
const dummyCompanyAmount = 10_000;
const companyAmount = dummyCompanyAmount + '+';

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('.num').textContent = companyAmount;
