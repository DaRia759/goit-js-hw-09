import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.getElementById('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

let chosenDate = 0;

const currentDate = new Date();

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0].getTime()) {
        Notiflix.Notify.warning('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
        chosenDate = selectedDates[0].getTime();
    }
  },
};

flatpickr('#datetime-picker', options); 

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;

    const timerID = setInterval(() => {
        let timeDiff = (Date.now() - chosenDate) * -1;

        if (timeDiff < 0) {
            clearInterval(timerID);
            Notiflix.Notify.info('Сountdown is completed!');
        }

    })
}, 1000);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
};

function countdown = 

function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}