
const bodyElem = document.body;

const interactionWrapper = document.createElement("section");
interactionWrapper.classList.add("interactionWrapper");
interactionWrapper.style.display = "flex";
interactionWrapper.style.flexDirection = "column";
interactionWrapper.style.gap = "10px";
bodyElem.appendChild(interactionWrapper);

const inputWrapper = document.createElement("div");
inputWrapper.classList.add("inputWrapper", "wrapper");
interactionWrapper.appendChild(inputWrapper);

const inputP  = document.createElement("p");
inputP.classList.add("inputP", "wrapperP");
inputP.textContent = "How many numbers in the grid?";

const inputBtn = document.createElement("button");
inputBtn.classList.add("inputBtn");
inputBtn.textContent = "Create";

const inputUser = document.createElement("input");
inputUser.type = "number";
inputUser.min = 0;
inputUser.max = 300;

inputWrapper.appendChild(inputP);
inputWrapper.appendChild(inputUser);
inputWrapper.appendChild(inputBtn);

const markedWrapper = document.createElement("div");
markedWrapper.classList.add("markedWrapper", "wrapper");

const numberBtn = document.createElement("button");
numberBtn.textContent = "New Random Number";

const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";

const removedDiv = document.createElement("div");
removedDiv.style.width = "200px";
removedDiv.style.border = "1px solid darkgray"; 
removedDiv.style.borderRadius = "1px";
removedDiv.style.textAlign = "center";
removedDiv.textContent = "-";


interactionWrapper.appendChild(markedWrapper);
markedWrapper.appendChild(numberBtn);
markedWrapper.appendChild(inputUser);
markedWrapper.appendChild(removeBtn);
markedWrapper.appendChild(removedDiv);

bodyElem.appendChild(interactionWrapper);





// ------------ grid ------------------
const gridWrapper = document.createElement("article");
gridWrapper.classList.add("gridWrapper", "wrapper");
bodyElem.appendChild(gridWrapper);
// ------------ /grid ------------------

// ------------ /functions ------------------


inputBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    cellNumberArray = createrNumberGrid(1, maxValue);
    markedP.textContent = "Click on a number to find copies "
})

function markedCells(event) {
    if (event.target.classList.contains("gridCell")) {
        event.target.classList.toggle("markedCell");
    }
}

function findSameAsMarked(numPara, cellNumberArray) {
    const targetNumber = numPara;
    let counter = 0;
    console.log(cellNumberArray + " arr")
    console.log(targetNumber + " targetNumber")


    for (let number of cellNumberArray) {
        console.log(number + " is the number");
        console.log(typeof number + " type")
        if (number == targetNumber) {
            counter++;
        }
    }

    const gridCellsArray = document.querySelectorAll(".gridCell");
    for (let cell of gridCellsArray) {
        if (cell.textContent == targetNumber) {
            cell.classList.add("markedCell")
        }
    }

    numberOfSame = counter;
    currentNumber = targetNumber;

    if (counter < 2) {
        markedP.textContent = numberOfSame + " copy of the number " + currentNumber;
    } else {
        markedP.textContent = numberOfSame + " copies of the number " + currentNumber;
    }
}

markedResetBtn.addEventListener("click", function () {
    const gridCellsArray = document.querySelectorAll(".gridCell");
    for (let cell of gridCellsArray) {
        cell.classList.remove("markedCell")
        markedP.textContent = "Click on a number to find copies ";
    }


})

gridWrapper.addEventListener("click", function (event) {
    markedCells(event);
    findSameAsMarked(event.target.textContent, cellNumberArray);
});

