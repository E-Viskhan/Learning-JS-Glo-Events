const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');

function buttonClickHandler() {
  square.style.backgroundColor = text.value;
  text.value = '';
}

function rangeHandler(event) {
  circle.style.width = event.target.value + '%';
  circle.style.height = event.target.value + '%';
}

// Выполнение первого задания
btn.addEventListener('click', buttonClickHandler);

// Выполнение второго задания
eBtn.style.display = 'none';

// Выполнение третьего задания
range.addEventListener('input', rangeHandler);