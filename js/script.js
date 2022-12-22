const container = document.getElementById("container");
const rowItems = document.querySelector('#container');
const button = document.getElementById('size');
const resetBtn = document.querySelector('.reset')
let size =8;

function makeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);

  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(size);


rowItems.addEventListener('mouseover', (box) => {
    if(box.target.matches('.grid-item')){
        box.target.setAttribute('style', 'background-color:black');
    }
});

button.addEventListener('click',() =>{
    size = prompt('Enter the grid size');
    
    makeRows(0,0);
    
});

function reset(){
  makeRows(size);
}

resetBtn.addEventListener('click', reset);




