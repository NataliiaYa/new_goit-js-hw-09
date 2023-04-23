
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

const TIMER_DELAY = 1000;
startBtn.addEventListener('click', onBtnStart);
startBtn.disabled = true;
let intervalId = null;

const options = {
    enableTime: true, //вмикає спосіб вибору часу
    time_24hr: true,
    defaultDate: new Date(), //Встановлює початкові вибрані дати.
    minuteIncrement: 1, //Регулює крок для введення хвилин (включно з прокручуванням)
    onClose(selectedDates) { //Функції, які запускаються щоразу, коли календар закривається
        // console.log(selectedDates[0]);
    futureTime = selectedDates[0].getTime(); 
    
        if (selectedDates[0] <= options.defaultDate) {
            startBtn.disabled = true; // неактивна кнопка
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtn.disabled = false; //активна кнопка
            return futureTime;
        }
    },
};
// використовуємо функціонал бібліотеки 
const dates = flatpickr(input, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};
// функція початку відліку
// startBtn.addEventListener("click", startTimer);
function onBtnStart() {
    // const selectedDate = dates.selectedDates[0]
    // startBtn.disabled = true;
    // input.disabled = true;
    intervalId = setInterval(() => {
        const currentTime = Date.now(); // поточна дата
        const deltaTime = futureTime - currentTime; //зворотній відлік
        // const time = convertMs(deltaTime);
        // startBtn.disabled = true;
        
        // updateTimer(time);

        if (deltaTime < 0) {
            return
        // clearInterval(intervalId);

        // days.textContent = "00";
        // hours.textContent = "00";
        // minutes.textContent = "00";
        // seconds.textContent = "00";
        } else {
            const {days, hours, minutes, seconds } = convertMs(remainingTime);
            days.textContent = addLeadingZero(days);
            hours.textContent = addLeadingZero(hours);
            minutes.textContent = addLeadingZero(minutes);
            seconds.textContent = addLeadingZero(seconds);
        }
    }, TIMER_DELAY);
};