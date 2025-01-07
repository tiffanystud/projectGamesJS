
const homeLink = document.createElement("a");
homeLink.setAttribute("href", "/common/index.html");
homeLink.innerHTML = "Home";
homeLink.style.textAlign = "center";
document.body.appendChild(homeLink);

function createrNumberGrid(min, max) {

    const minNr = min;
    const maxNr = max;
    const cellNumberArray = [];

    for (let i = 0; i < maxNr; i++) {
        const randomNumberGrid = Math.floor(Math.random() * (maxNr - minNr)) + minNr;
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.textContent = randomNumberGrid;
        cellNumberArray.push(randomNumberGrid);
        gridWrapper.appendChild(gridCell);
    }
    return cellNumberArray;
}

function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}