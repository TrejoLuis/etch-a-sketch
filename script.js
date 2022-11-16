const gridContainer = document.querySelector('#grid-container');

const clearBtn = document.querySelector('#clearBtn');
const customSizeBtn = document.querySelector('#customSizeBtn');
const sixteenBtn = document.querySelector('#sixteenBtn');
const sixtyfourBtn = document.querySelector('#sixtyfourBtn');


makeGrid(16);

paint();


clearBtn.addEventListener('click', () => {
  const divs = document.querySelectorAll('#grid-container div')
  divs.forEach(cell => {
    cell.style.backgroundColor = '#FFEFD6';
  });
});

customSizeBtn.addEventListener('click', () => {
  const newSize = Number(prompt('Please add the custom grid size'));
  if (Number.isNaN(newSize)) {
    alert('Please enter a whole number');
    return;
  } else if (newSize > 100) {
    alert('The maximum number allowed is 100');
    return;
  }
  restartGame(newSize);

});

sixteenBtn.addEventListener('click', () => {
  restartGame(16);
})

sixtyfourBtn.addEventListener('click', () => {
  restartGame(64);
})


function makeGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      gridContainer.appendChild(square);
    }
  }
}

function paint() {
  const squares = document.querySelectorAll('#grid-container > div');
  squares.forEach(sq => {
    sq.addEventListener('mouseover', () => {
      sq.style.backgroundColor = '#0E5E6F';
    })
  });
}

function removeGrid() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function restartGame(size) {
  removeGrid();
  makeGrid(size);
  paint();
}