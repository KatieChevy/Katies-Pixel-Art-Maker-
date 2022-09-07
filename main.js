


let localStorage
const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size') // sizdEl size element 
let size = sizeEl.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')

let draw = false  // useeing draw as a variable to false so when the mouse is over 
                  // the grid it dose not automaticly draw (used in line 16)
function populate(size) {
  container.style.setProperty('--size', size)  // for loop to create grid size
  for (let i = 0; i < size * size ; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')

    div.addEventListener('mouseenter', function(){
        if(!draw) return  // draw over when draw returns true 
        div.style.backgroundColor = color.value
    })
    div.addEventListener('mousedown', function(){// using event listener 'mousedown'
        div.style.backgroundColor = color.value  // allows you to drag the the color over if the mouse is clicked down
    })

    container.appendChild(div) 
  }
}

document.addEventListener("mousedown", function(){
    draw = true // when listening to "mousedown" event and run the function to = true. it will draw
})
document.addEventListener("mouseup", function(){
    draw = false // when mouse is unclicked and hovering over grif it will not draw, = false
})

function reset(){  // function for reset button 'reset
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)

sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value
    reset()
})


populate(size)








