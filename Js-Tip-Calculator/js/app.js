/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Tip Calculator';

const calculateBtn = document.querySelector('.calculate-btn');

const tipAmount = document.querySelector('.tip-amount-number');

const totalBillAmount = document.querySelector('.total-bill-amount');

const formErrorMsg = document.querySelector('.form-error-msg');

const hiddeError = () => {
  setTimeout(() => {
    formErrorMsg.style.display = 'none';
  }, 4000);
};
const calculateTip = (evt) => {
  evt.preventDefault();

  const bill = document.querySelector('.input-amount').value;

  const rateaService = document.querySelector('.tip-option').value;

  if (bill === '' || rateaService === '') {
    formErrorMsg.style.display = 'block';
    hiddeError();
  } else if (isNaN(bill)) {
    formErrorMsg.innerText = 'Please enter a number';
    formErrorMsg.style.display = 'block';
    hiddeError();
  } else {
    let tipAmountNum = bill * rateaService;
    tipAmountNum = Math.ceil(tipAmountNum);
    tipAmount.innerText = `Tip: $${tipAmountNum}`;

    let totalBill = Number(bill) + tipAmountNum;

    totalBillAmount.innerText = `Total Bill: $${totalBill}`;
  }
};
calculateBtn.addEventListener('click', calculateTip);
