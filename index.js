const btnLogin = document.querySelector('.btn-login');
const inputs = [...document.querySelectorAll(`input:not(.btn-login)`)];

const isEmpty = (value) => value === '' || value === undefined || value === null;

const emptyForm = () => {
  const form = document.querySelector('.form-login');

  form.classList.add('validation-error');
  
  form.addEventListener('animationend', event => {
    if (event.animationName === 'not') {
      form.classList.remove('validation-error');
    }
  });
}

btnLogin.addEventListener('click', event => {
  event.preventDefault();

  let sendForm = true;

  inputs.forEach(item => {
    if (isEmpty(item.value)) {
      item.classList.add('input-empty');
      emptyForm();
      sendForm = false;
    }
  });

  if (sendForm) document.querySelector('.form-login').classList.add('hide-form');
});

inputs.forEach(item => {
  item.addEventListener('keypress', event => {
    item.classList.remove('input-empty');
  });
});

const randomInt = (min, max) => Math.floor(Math.random() * max) + min;

for (let index = 0; index < 25; index++) {
  const listSquare = document.querySelector('.squares');
  
  const square = document.createElement('li');
  
  square.classList.add('square');
  
  const size = randomInt(40, 120);
  const position = randomInt(1, 99);
  const duration = randomInt(24, 12);
  
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.bottom = `-${size}px`;
  square.style.left = `${position}%`;
  square.style.animationDelay = `${Math.random()}s`;
  square.style.animationDuration = `${duration}`;

  listSquare.appendChild(square);
}
