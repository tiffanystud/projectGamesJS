const bodyElem = document.body;

const homeLink = document.createElement("a");
homeLink.setAttribute("href", "/common/index.html");
homeLink.innerHTML = "Home";
homeLink.style.textAlign = "center";
document.body.appendChild(homeLink);

const interactionWrapper = document.createElement("section");
interactionWrapper.classList.add("interactionWrapper");
interactionWrapper.style.display = "flex";
interactionWrapper.style.flexDirection = "column";
interactionWrapper.style.gap = "10px";
bodyElem.appendChild(interactionWrapper);

const inputWrapper = document.createElement("div");
inputWrapper.classList.add("inputWrapper", "wrapper");
interactionWrapper.appendChild(inputWrapper);

const inputP = document.createElement("p");
inputP.classList.add("inputP", "wrapperP");
inputP.textContent = "How many numbers in the grid?";

const inputUser = document.createElement("input");
inputUser.type = "number";
inputUser.min = 0;
inputUser.max = 200;

const inputBtn = document.createElement("button");
inputBtn.classList.add("inputBtn");
inputBtn.textContent = "Create";

inputWrapper.appendChild(inputP);
inputWrapper.appendChild(inputUser);
inputWrapper.appendChild(inputBtn);

const gridWrapper = document.createElement("article");
gridWrapper.classList.add("gridWrapper", "wrapper");
bodyElem.appendChild(gridWrapper);



function createrNumberGrid(min, max) {

    const minNr = min;
    const maxNr = max;
    const cellNumberArray = [];

    for (let i = 0; i < maxNr; i++) {
        const randomNumberGrid = createRandomNumber(minNr, maxNr);
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