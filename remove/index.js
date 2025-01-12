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


let availableNrArray = [];
let randomNr;
const usedNumbers = [];

inputBtn.addEventListener("click", function () {
    gridWrapper.innerHTML = "";
    availableNrArray = [];
    randomNr = 0;
    const maxValue = inputUser.value;
    gridWrapper.innerHTML = "";
    cellNumberArray = createrNumberGrid(1, maxValue);

    for (let number of cellNumberArray) {
        availableNrArray.push(number);
    }
})

randomNrBtn.addEventListener("click", function () {
    const min = 1;
    const max = availableNrArray.length;
    randomNr = Math.floor((Math.random() * (max - min))) + min; // ***
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
    } else if (availableNrArray.length == 0) {
        removedNrDiv.textContent = "Nothing to remove";
    }
})

function getAllNumbers(number, array) {
    let counter = 0;
    for (let nr of array) {
        const currentNumber = Number(nr);
        
        if (currentNumber == number) {
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