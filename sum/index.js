
const sumWrapper = document.createElement("div");
sumWrapper.classList.add("sumWrapper", "wrapper");

const sumP = document.createElement("p");
sumP.classList.add("sumP", "wrapperP");
sumP.textContent = "Sum of all: ";

const sumMessage = document.createElement("div");
sumMessage.classList.add("sumMessage");
sumMessage.textContent = "";

interactionWrapper.appendChild(sumWrapper);
sumWrapper.appendChild(sumP);
sumWrapper.appendChild(sumMessage);

const markedWrapper = document.createElement("div");
markedWrapper.classList.add("markedWrapper", "wrapper");

const markedP = document.createElement("p");
markedP.classList.add("markedP", "wrapperP");
markedP.textContent = "Sum of marked: ";

const markedMessage = document.createElement("div");
markedMessage.classList.add("markedMessage", "message");
markedMessage.textContent = "-";

const markedResetBtn = document.createElement("button");
markedResetBtn.textContent = "Reset";

interactionWrapper.appendChild(markedWrapper);
markedWrapper.appendChild(markedP);
markedWrapper.appendChild(markedMessage);
markedWrapper.appendChild(markedResetBtn);



inputBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    gridWrapper.innerHTML = "";
    const cellNumberArray = createrNumberGrid(1, maxValue);
    sumGridCells(cellNumberArray);
})

function sumGridCells(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    sumMessage.textContent = sum;
}

const sumArray = [];
function sumMarkedCells(event) {

    if (event.target.classList.contains("gridCell")) {

        event.target.classList.toggle("markedCell");
        const currentValue = Number(event.target.textContent);

        if (event.target.classList.contains("markedCell")) {
            sumArray.push(currentValue);
        } else {
            const index = sumArray.indexOf(currentValue);
            if (index !== -1) {
                sumArray.splice(index, 1);
            }
        }

        let currentSum = 0;
        for (let i = 0; i < sumArray.length; i++) {
            currentSum += sumArray[i];
        }
        
        markedMessage.textContent = currentSum;
    }
}

gridWrapper.addEventListener("click", function (event) {
    sumMarkedCells(event); 
});

markedResetBtn.addEventListener("click", function () {
    location.reload(true);
})
