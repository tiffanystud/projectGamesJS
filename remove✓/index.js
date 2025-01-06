// ------------ elements ------------------
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

const inputP = document.createElement("p");
inputP.classList.add("inputP", "wrapperP");
inputP.textContent = "How many numbers in the grid?";

const inputBtn = document.createElement("button");
inputBtn.classList.add("inputBtn");
inputBtn.textContent = "Create";

const inputUser = document.createElement("input");
inputUser.type = "number";
inputUser.min = 1;
inputUser.max = 300;

inputWrapper.appendChild(inputP);
inputWrapper.appendChild(inputUser);
inputWrapper.appendChild(inputBtn);

const markedWrapper = document.createElement("div");
markedWrapper.classList.add("markedWrapper", "wrapper");

const randomNrBtn = document.createElement("button");
randomNrBtn.textContent = "New Random Number";

const randomNrDiv = document.createElement("div");
randomNrDiv.textContent = "-";
randomNrDiv.style.border = "1px solid darkgray";
randomNrDiv.style.borderRadius = "1px";
randomNrDiv.style.width = "50px";
randomNrDiv.style.textAlign = "center";

const removeNrBtn = document.createElement("button");
removeNrBtn.textContent = "Remove";

const removedNrDiv = document.createElement("div");
removedNrDiv.style.width = "200px";
removedNrDiv.style.border = "1px solid darkgray";
removedNrDiv.style.borderRadius = "1px";
removedNrDiv.style.textAlign = "center";
removedNrDiv.textContent = "-";

interactionWrapper.appendChild(markedWrapper);
markedWrapper.appendChild(randomNrBtn);
markedWrapper.appendChild(randomNrDiv);
markedWrapper.appendChild(removeNrBtn);
markedWrapper.appendChild(removedNrDiv);
bodyElem.appendChild(interactionWrapper);
// ------------ / elements ------------------


// ------------ grid ------------------
const gridWrapper = document.createElement("article");
gridWrapper.classList.add("gridWrapper", "wrapper");
bodyElem.appendChild(gridWrapper);
// ------------ /grid ------------------


// ------------ functions ------------------
let availableNrArray = [];
let randomNr;
const usedNumbers = [];

inputBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    cellNumberArray = createrNumberGrid(1, maxValue);

    for (let number of cellNumberArray) {
        availableNrArray.push(number);
    }
})

randomNrBtn.addEventListener("click", function () {
    const min = 1;
    const max = availableNrArray.length;
    randomNr = Math.floor((Math.random() * (max - min))) + min;
    if (!usedNumbers.includes(randomNr)) {
        randomNrDiv.textContent = randomNr;
        const gridCellsNode = document.querySelectorAll(".gridCell");
        for (let node of gridCellsNode) {
            if (node.style.backgroundColor === "orange") {
                node.style.backgroundColor = "lightgray";
            }
            if (node.textContent == randomNr) {
                node.style.backgroundColor = "orange";
            }
        }
    }
})

removeNrBtn.addEventListener("click", function () {
    if (availableNrArray.length >= 1) {
        getAllNumbers(randomNr, availableNrArray);
    }
})

function getAllNumbers(number, array) {
    let counter = 0;
    for (let nr of array) {
        const currentNumber = Number(nr);
        if (currentNumber == number) {
            console.log("looped NR " + nr);
            counter++;
            const gridCellsNode = document.querySelectorAll(".gridCell");
            for (let node of gridCellsNode) {
                if (node.textContent == currentNumber) {
                    const usedNumber = Number(node.textContent);
                    usedNumbers.push(usedNumber);
                    node.textContent = "X";
                    node.style.backgroundColor = "red";
                }
            }
        }
    }


    if (counter == 0) {
        removedNrDiv.textContent = "Nothing to remove";
    } else if (counter == 1) {
        removedNrDiv.textContent = number + " removed 1 time";
    } else {
        removedNrDiv.textContent = number + " removed " + counter + " times";
    }
}

// ------------ /functions ------------------
