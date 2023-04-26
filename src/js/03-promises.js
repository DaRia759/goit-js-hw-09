import Notiflix from 'notiflix';

const delay = document.querySelector("input[name='delay']");
const step = document.querySelector("input[name='step']");
const amount = document.querySelector("input[name='amount']");

const submitForm = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
};

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let delayValue = Number(delay.value);
  let amountValue = Number(amount.value);
  let stepValue = Number(step.value);

  for (let position = 1; position <= amountValue; position++, delayValue += stepValue) {
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
})
