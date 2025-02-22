const repeatWrapper = document.createElement("div");
repeatWrapper.classList.add("repeatWrapper", "wrapper");

const repeatP = document.createElement("p");
repeatP.classList.add("repeatP", "wrapperP");
repeatP.textContent = "Most repeated number(s): ";

const repeatMessage = document.createElement("div");
repeatMessage.classList.add("repeatMessage");
repeatMessage.textContent = "-";
repeatMessage.style.border = "1px solid darkgray";
repeatMessage.style.width = "300px";
repeatMessage.style.textAlign = "center";

interactionWrapper.appendChild(repeatWrapper);
repeatWrapper.appendChild(repeatP);
repeatWrapper.appendChild(repeatMessage);

const restWrapper = document.createElement("div");
restWrapper.classList.add("restWrapper", "wrapper");

const restP = document.createElement("p");
restP.classList.add("v", "wrapperP");
restP.textContent = "Number(s) not in place: ";

const restMessage = document.createElement("div");
restMessage.classList.add("restMessage", "message");
restMessage.textContent = "-";
restMessage.style.border = "1px solid darkgray";
restMessage.style.width = "300px";
restMessage.style.textAlign = "center";
interactionWrapper.appendChild(restWrapper);
restWrapper.appendChild(restP);
restWrapper.appendChild(restMessage);



inputBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    gridWrapper.innerHTML = "";
    const gridArray = createrNumberGrid(1, maxValue);
    repeatCounter(gridArray, maxValue);
})

function repeatCounter(gridArray, maxValue) {
    let maxCount = 0;
    const counterObject = {};
    const mostRepeatedArray = [];

    for (let currentNumber of gridArray) {
        if (counterObject[currentNumber]) {
            counterObject[currentNumber] += 1;
        } else {
            counterObject[currentNumber] = 1;
        }

        if (counterObject[currentNumber] > maxCount) {
            maxCount = counterObject[currentNumber];
        }
    }

    for (let number of gridArray) {
        if (counterObject[number] === maxCount) {
            mostRepeatedArray.push(number);
        }
    }

    const messageArray = [];
    for (let repeatNumber of mostRepeatedArray) {
        if (!messageArray.includes(repeatNumber)) {
            messageArray.push(repeatNumber);
        }
    }

    const gridCells = document.querySelectorAll(".gridCell");
    const colorAssignments = {};
    const colors = ["#E6E6FA", "#FFFFE0", "#ADD8E6", "#FFDAB9", "#FFC0CB", "#D8BFD8", "#90EE90", "#FFB6C1", "#B0E0E6", "#F5DEB3"];
    let colorIndex = 0;

    for (let cell of gridCells) {
        for (let number of messageArray) {
            if (cell.textContent == number) {
                if (!colorAssignments[number]) {
                    colorAssignments[number] = colors[colorIndex];
                    colorIndex++;
                }
                cell.style.backgroundColor = colorAssignments[number];
            }
        }
    }

    repeatMessage.textContent = messageArray.join(", ") + " (repeated " + maxCount + " times)";

    notUsedNumbers(gridArray, maxValue);
}

function notUsedNumbers(array, max) {
    const notUsedArray = [];
    for (let i = 1; i <= max; i++) {
        if (!array.includes(i)) {
            notUsedArray.push(i);
        }
    }
    restMessage.textContent = notUsedArray.join(", ");
}