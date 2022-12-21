const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const rowItems = document.querySelector('#container');
rowItems.addEventListener('mouseover', (box) => {
    if(box.target.matches('.grid-item')){
        box.target.setAttribute('style', 'background-color:black');
    }
});

