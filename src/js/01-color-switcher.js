//Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. 
//Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor

const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");

let timerId = null;
let isActive = true;
startButton.addEventListener('click', startButtonFunc);
stopButton.addEventListener('click', stopButtonFunc);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
//активуємо кнопку Стар, кнопка Стоп неактивна
function startButtonFunc() {
  startButton.disabled = isActive; //кнопка Старт активна
  stopButton.disabled = !isActive; //кнопка Стоп неактивна
 timerId = setInterval(() => {
 document.body.style.backgroundColor = `${getRandomHexColor()}`;
 }, 1000);
}
// активуємо кнопку Стоп, кнопка Старт неактивна, поки працює getRandomHexColor
function stopButtonFunc() {
  clearInterval(timerId);
  stopButton.disabled = isActive; //кнопка Стоп активна
  startButton.disabled = !isActive; //кнопка Старт неактивна
}
