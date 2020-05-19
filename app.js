const CELL_LOCATIONS = [
    [0,1,2,6,7,8,12,13,14],
    [3,4,5,9,10,11,15,16,17],
    [18,19,20,24,25,26,30,31,32],
    [21,22,23,27,28,29,33,34,35]
]
const board = document.querySelector('.board');
const boardArea = document.querySelector('.board-area');

board.addEventListener('click', e => {
    const previousCell = document.querySelector('.highlight-cell');
    if(previousCell!= null)
        previousCell.classList.remove('highlight-cell');
    e.target.classList.add('highlight-cell');    
});

boardArea.addEventListener('click', e => {
    if(!e.target.classList.contains('cell')){
        const previousCell = document.querySelector('.highlight-cell');
        if(previousCell!= null)
            previousCell.classList.remove('highlight-cell');
    }
       
});

function randomizeBoard(){
    
}