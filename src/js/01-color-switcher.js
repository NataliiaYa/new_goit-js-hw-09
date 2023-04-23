//Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. 
//Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor

const startButton = document.getElementsByTagName('button')[0];
const stopButton = document.getElementsByTagName('button')[1];

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });
startButton.addEventListener('click', startButtonFunc);
function startButtonFunc() {
 timerId = setInterval(() => {
 document.body.style.backgroundColor = `${getRandomHexColor()}`;
 }, 1000);
 startButton.disabled = true;
}
stopButton.addEventListener('click', stopButtonFunc);
function stopButtonFunc() {
  clearInterval(timerId);
  startButton.disabled = false;
}




// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
