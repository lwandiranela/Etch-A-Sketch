document.addEventListener('DOMContentLoaded', function(){
    createGrids(16)
    
})

function createGrids(size){
    let theContainer = document.querySelector('.theContainer');

    theContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    theContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'pink';
        theContainer.appendChild(div);

    }
}