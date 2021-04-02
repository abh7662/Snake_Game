const grid = document.querySelector(".grid")
const startButton = document.querySelector("#start")
const score = document.querySelector("#score")
let score_val = 0
let snake = [2,1,0]
let squares = []
let direction = 1
let appleIndex = 0
let width = 10
let interValtime = 1000
let timerId = 0
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

  if (snake[0] === appleIndex) {
    //remove the class of apple
    squares[appleIndex].classList.remove("apple")
    //grow our snake by adding class of snake to it
    squares[appleIndex].classList.add("snake")
    //grow our snake array
    snake.unshift(appleIndex)    
    //generate new apple
    generateApples()
    //add one to the score
    score_val++
    //display our score
    score.textContent = score_val
    //speed up our snake
    interValtime *= .9
    console.log(interValtime)
    clearInterval(timerId)
    timerId = setInterval(move, interValtime)
}

  console.log(snake)
  squares[snake[0]].classList.add("snake")
  
}

function generateApples(){
  do{
    appleIndex = Math.floor(Math.random()*100)
    console.log(appleIndex)
  }while(squares[appleIndex].classList.contains("snake"))
  squares[appleIndex].classList.add("apple")
}

startButton.addEventListener("click", function(){
  squares[appleIndex].classList.remove("apple")
  snake.forEach(index => squares[index].classList.remove("snake"))
  score_val = 0
  snake = [2,1,0]
  interValtime = 1000
  direction = 1
  score.textContent = score_val
  generateApples()
  clearInterval(timerId)
  snake.forEach(index => squares[index].classList.add("snake"))
  timerId = setInterval(move, interValtime)
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
