const modal = document.querySelector('.header__modal')
const orderForm = document.querySelector('.header__form');
const overlayModal = document.querySelector('.header__modal-overlay')

const inputTel = orderForm.querySelector('input[type="tel"]');

const success = document.querySelector('.success');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

let isStorageSupport = true;
let storageTel = '';

try {
  storageTel = localStorage.getItem('usertel');
} catch (err) {
  isStorageSupport = false;
}

if (storageTel) {
  inputTel.value = storageTel;
}

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isStorageSupport) {
    localStorage.setItem('usertel', inputTel.value);
  }

  success.style.display = 'flex';
  
  setTimeout(() => {
    modal.classList.remove('active')
    overlayModal.classList.remove('active')
    success.style.display = 'none';
  }, 1500);
});

const onKeypress = (evt) => {
  if (evt.keyCode < 48 || evt.keyCode > 57) {
    evt.preventDefault();
  }
};

const onFocus = () => {
  if (inputTel.value.length === 0) {
    inputTel.value = '+7';
    inputTel.selectionStart = inputTel.value.length;
  }

  if (inputTel.value === '+7') {
    inputTel.setCustomValidity('Заполните это поле.');
  } else {
    inputTel.setCustomValidity('');
  }
};

const onClick = () => {
  if (inputTel.selectionStart < 2) {
    inputTel.selectionStart = inputTel.value.length;
  }
};

const onBlur = () => {
  if (inputTel.value === '+7') {
    inputTel.value = '';
  }
};

const onKeydown = (evt) => {
  if (evt.key === 'Backspace' && inputTel.value.length <= 2) {
    evt.preventDefault();
  }
};

inputTel.addEventListener('keypress', onKeypress);
inputTel.addEventListener('focus', onFocus);
inputTel.addEventListener('click', onClick);
inputTel.addEventListener('blur', onBlur);
inputTel.addEventListener('keydown', onKeydown);
