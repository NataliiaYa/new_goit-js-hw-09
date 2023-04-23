import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');


form.addEventListener('submit', onSubmitForm);
//створюємо нову обіцянку і відразу викликаємо її
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
// плануємо час запуску функції через певний час (delay - час в мілісекундах, через який функція буде викликана один раз) 
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
    // Fulfill
      } else {
        reject({ position, delay });
    // Reject
  }
  }, delay)

    })
}
// створюємо функцію submit
function onSubmitForm(evt) {
  evt.preventDefault(); //забороняємо перезавантажувати сторінку

  //присвоюємо числові значення
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(step.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          width: '400px',
          fontSize: '20px',
        },);
      });
    delayValue += stepValue;
  }
  form.reset();
}