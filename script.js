let color = 'black'

document.addEventListener('DOMContentLoaded', function(){
    createGrids(16)

    let button_popup = document.querySelector('#popup');
    button_popup.addEventListener('click', function(){
        let size = getSize();
        createGrids(size);
    })
})   

function createGrids(size){
    let theContainer = document.querySelector('.theContainer');

    theContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    theContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
        theContainer.appendChild(div);

    }
}

function getSize(){
    let input = prompt('Pick a size for the container:');
    let message = document.querySelector('#message')

    if(input == ''){
        message.innerHTML = 'Please provide a number'
    } else if (input < 0 || input > 100){
        message.innerHTML = 'Please provide a number between 0 and 100'
    } else{
        message.innerHTML = 'You may start drawing!'
        return input
    }
}

function  colorDiv(){
    if (color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice){
    let color = colorChoice
}

function resetGrid(){
    let divs = document.querySelectorAll('div')
        divs.forEach((div) => div.style.backgroundColor ='white')
    
}