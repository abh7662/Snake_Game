const grid = document.querySelector(".grid")
const startButton = document.querySelector("#start")
const score = document.querySelector("#score")
let snake = [21,20,19]
let squares = []
let direction = 1
function createGrid(){
    for(let i =0 ;i<100;i++){
      const square = document .createElement("div")
      square.classList.add("square")
      grid.append(square)
      squares.push(square)
    }
}
createGrid()
snake.forEach(index => squares[index].classList.add("snake"))

function move(){
  if((snake[0]%10 === 0 && direction === -1) ||
  (snake[0]%10 === 9 && direction === 1) ||
  (snake[0] + 10 > 100 && direction === 10) || 
  (snake[0] + 10 < 0 && direction === -10) || 
  squares[snake[0] + direction].classList.contains('snake')){
    return clearInterval(timerId)
  }
  const tail = snake.pop()
  squares[tail].classList.remove("snake")
  snake.unshift(snake[0]+direction)
  console.log(snake)
  squares[snake[0]].classList.add("snake")
}
let timerId = setInterval(move, 1000)
startButton.addEventListener("click", function(){
  console.log(timerId)
  if(timerId){
    clearInterval(timerId)
    timerId = 0
  }
  else{
    timerId = setInterval(move, 1000)
  }
})
function control(e){
  switch(e.keyCode) {
    case 40:
    console.log('pressed down')
    direction = 10
    break
    case 38:
    console.log('pressed up')
    direction = -10
    break
    case 37: 
    console.log('pressed left')
    direction = -1
    break
    case 39:
    console.log('pressed right')
    direction = 1
    break
}
  
}
document.addEventListener("keyup", control)
