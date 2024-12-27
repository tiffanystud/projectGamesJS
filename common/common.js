

function createrNumberGrid(min, max) {
    const minNr = min;
    const maxNr = max;
    const cellNumberArray = [];

    for (let i = 0; i < maxNr; i++) {
        const randomNumberGrid = Math.floor(Math.random() * (maxNr -min)) + min;
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.textContent = randomNumberGrid;
        cellNumberArray.push(randomNumberGrid);
        gridWrapper.appendChild(gridCell);
    }
    return cellNumberArray;
}