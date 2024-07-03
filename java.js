const gridContainer = document.querySelector(".gridContainer")
const resetButton = document.querySelector(".resetButton")
const randomColourButton = document.querySelector(".random")
const gradientButton = document.querySelector('.gradient')
const eraserButton = document.querySelector('.eraser')
const blackButton = document.querySelector('.black')
const sliderButton = document.querySelector('.slider')
const slideNumber = document.querySelector('.slideNumber')

let randomSelected = 0
let gradientSelected = 0
let eraserSelected = 0
let blackSelected = 1
let gridSize = 10

blackButton.classList.add("buttonClicked")



function highlight(e){
    if (gradientSelected==1){
        newColor = e.target.style.backgroundColor
        newColor = newColor.substring(4, newColor.length-1)
            .replace(/ /g, '')
            .split(',')
        let r = newColor[0] - 25.5
        let g = newColor[1] - 25.5
        let b = newColor[2] - 25.5
        return "rgb("+r+", "+g+", "+b+")"
    } 
    else if(randomSelected ==1){
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        return "rgb("+red+", "+green+", "+blue+")"
    } 
    else if (eraserSelected ==1){
        return "rgb(255,255,255)"
    }
    else if (blackSelected ==1){
        return "rgb(0,0,0)"
    }
}



function createGrid(){
    for (let i = 0; i<(gridSize * gridSize); i++){
    let pixelSize = 600 / gridSize
    const pixel = document.createElement("div")
    pixel.setAttribute('id', i)
    pixel.style.height = pixelSize + 'px'
    pixel.style.width = pixelSize + 'px'
    pixel.style.backgroundColor = 'rgb(255,255,255)'
    pixel.classList.add("pixel")
    pixel.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = highlight(e)
    })
    gridContainer.appendChild(pixel)
    }
    return    
    }

function resetGrid(){
    if (gridContainer.children.length > 0){
        while (gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild)
        }
    }
}

randomColourButton.addEventListener('click', () =>{
    gradientSelected = 0
    randomSelected = 1
    eraserSelected = 0
    blackSelected =0
    randomColourButton.classList.add("buttonClicked")
    gradientButton.classList.remove("buttonClicked")
    eraserButton.classList.remove("buttonClicked")
    blackButton.classList.remove("buttonClicked")
})

gradientButton.addEventListener('click', () =>{
    gradientSelected = 1
    randomSelected = 0
    eraserSelected = 0
    blackSelected =0
    randomColourButton.classList.remove("buttonClicked")
    gradientButton.classList.add("buttonClicked")
    eraserButton.classList.remove("buttonClicked")
    blackButton.classList.remove("buttonClicked")
})

eraserButton.addEventListener('click', () =>{
    gradientSelected = 0
    randomSelected = 0
    eraserSelected = 1
    blackSelected = 0
    randomColourButton.classList.remove("buttonClicked")
    gradientButton.classList.remove("buttonClicked")
    eraserButton.classList.add("buttonClicked")
    blackButton.classList.remove("buttonClicked")
})

blackButton.addEventListener('click', () =>{
    gradientSelected = 0
    randomSelected = 0
    eraserSelected = 0
    blackSelected = 1
    randomColourButton.classList.remove("buttonClicked")
    gradientButton.classList.remove("buttonClicked")
    eraserButton.classList.remove("buttonClicked")
    blackButton.classList.add("buttonClicked")
})

sliderButton.addEventListener('click', () =>{
    resetGrid()
    gridSize = sliderButton.value
    slideNumber.textContent = `${gridSize} x ${gridSize}` 
    createGrid()
})


resetButton.addEventListener('click', () =>{
    resetGrid ()
    createGrid ()
})

createGrid()