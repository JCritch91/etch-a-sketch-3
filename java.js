const gridContainer = document.querySelector(".gridContainer")
const resetButton = document.querySelector(".resetButton")

function highlight(){
    this.style.backgroundColor = 'black'
}

function createGrid(gridSize){
    for (let i = 0; i<(gridSize * gridSize); i++){
    let pixelSize = 600 / gridSize
    const pixel = document.createElement("div")
    pixel.setAttribute('id', i)
    pixel.style.height = pixelSize + 'px'
    pixel.style.width = pixelSize + 'px'
    pixel.classList.add("pixel")
    pixel.addEventListener("mouseover", highlight)
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

    promptSize = prompt('How many pixels per side? (Max 100)')
    if (promptSize > 100){
        promptSize = prompt('Maximum pixels per side is 100. Please try again')
    }
    else{
    createGrid(promptSize)
    }
}




resetButton.addEventListener('click', resetGrid)