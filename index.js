const grid = document.querySelector(".grid")
const startButton = document.querySelector("#start")
const score = document.querySelector("#score")
let snake = [21,20,19]
let squares = []
let direction = 1
function createGrid(){
    //create elements
    //create 100 of these elements
    //add styling to these elements
    //create array of squares
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
  const tail = snake.pop()
  squares[tail].classList.remove("snake")
  snake.unshift(snake[0]+direction)
  console.log(snake)
  squares[snake[0]].classList.add("snake")
  // snake.forEach(index => squeres[index].classList.remove("snake"))
  // snake = snake.map(mapValue => mapValue+1)
  // console.log(snake)
  // snake.forEach(index => squeres[index].classList.add("snake"))

}
// let flag = true
// move()
// while(flag){
//   move()
// }
// startButton.addEventListener("click", move) 
// const timerId = setInterval(move, 1000)
function control(e){
  // e.keyCode is depricated now use e.key 
  // if(e.keyCode === 37){
  //   console.log("left key")
  // }
  // else if(e.keyCode === 38){
  //   console.log("up key")
  // }
  // else if(e.keyCode === 39){
  //   console.log("right key")
  // }
  // else if(e.keyCode === 40){
  //   console.log("down key")
  // }
  switch(e.keyCode) {
    case 40:
    console.log('pressed down')
    break
    case 38:
    console.log('pressed up')
    break
    case 37: 
    console.log('pressed left')
    break
    case 39:
    console.log('pressed right')
    break
}
  
}
document.addEventListener("keyup", control)
