const body = document.querySelector("body");

const container = document.querySelector('.container')

let num = 40;
changeDimensions(num);
populate(num*num);
start();

function reset() {
  clearSquares(num*num);
  do {
  num = prompt('How many columns would you like? (max : 100)'); 
  }while (num < 1 || num >100)
  changeDimensions(num);
  populate(num*num);
  start();
}

function populate(num){
  for (let i = 0; i < num; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}
function clearSquares(num){
  for (let i = 0; i < num; i++){
  let square = document.querySelector('.square')
    container.removeChild(square);
  }
}

function start(){
let squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover',changeColor));
}

function changeColor(e){
  e.target.classList.add('highlighted');
}

function changeDimensions(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
}