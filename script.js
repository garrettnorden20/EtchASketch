
//let gridNum = 10;


function createDivs(gridNum) {
    let cSize = 600;
    let container = document.querySelector('#container');
    container.innerHTML = '';

    container.style.height = cSize + 'px';
    container.style.width = cSize + 'px';

    let bSize = (cSize) / gridNum;
    bSize -= 2;
    

    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {
            let box1 = document.createElement('div');
            box1.classList.add('box');
            
            box1.style.height = bSize + 'px';
            box1.style.width = bSize + 'px';
            
            container.appendChild(box1);
        }
        let line = document.createElement('div');
        line.classList.add('line');
        line.style.height = bSize + 'px';
        line.style.width = bSize + 'px';
        container.appendChild(line);

    }
    blockEvents();
    /** 
    let buttons = div.querySelectorAll('button');
    let result = document.querySelector('#results');

    buttons.forEach((button) => {
        button.addEventLmistener('click', function (e) {
            playRound(e.target.id, computerPlay());

            result.style.color = 'blue';
            //e.target.style.backgroundColor = 'blue';
        });
    });
    */

}

function blockEvents() {
    let boxes = document.querySelectorAll('.box');
    
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'blue';
            console.log('run');
            //e.target.style.backgroundColor = 'blue';
        });
    });
}

function buttonEvents() {

    let button = document.querySelector('button');

    button.addEventListener('click', function (e) {
        let gridNum = prompt("Enter the height you want.");
        if (isNaN(gridNum) || gridNum < 1 || gridNum > 100) {
            gridNum = 10;
        }
        createDivs(gridNum);
    });
}




createDivs(10);
buttonEvents();