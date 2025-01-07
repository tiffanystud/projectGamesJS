
const bodyElem = document.body;
const interactionWrapper = document.createElement("section");

interactionWrapper.classList.add("interactionWrapper");
interactionWrapper.style.display = "flex";
interactionWrapper.style.flexDirection = "column";
interactionWrapper.style.gap = "10px";
bodyElem.appendChild(interactionWrapper);

// ------------ interaction ------------------
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

const markedWrapper = document.createElement("div");
markedWrapper.classList.add("markedWrapper", "wrapper");

const fillBtn = document.createElement("button");
fillBtn.textContent = "Fill Cleared";

interactionWrapper.appendChild(markedWrapper);
markedWrapper.appendChild(fillBtn);

const gridWrapper = document.createElement("article");
gridWrapper.classList.add("gridWrapper", "wrapper");
bodyElem.appendChild(gridWrapper);
// ------------ /interaction ------------------


// ------------ functions -----------------

inputBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    createrNumberGrid(1, maxValue);
})

gridWrapper.addEventListener("click", function (event) {
    classListToggler(event);
})

function classListToggler(event) {
    if (event.target.classList.contains("gridCell")) {
        event.target.classList.toggle("markedClearCell");
    }
}

fillBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    const gridCellArray = document.querySelectorAll(".gridCell");
    for (let cell of gridCellArray) {
        if (cell.classList.contains("markedClearCell")) {
               const newNumber = createRandomNumber(1, maxValue);
               cell.textContent = newNumber;
               cell.classList.toggle("markedClearCell");
            }
        }
})


// ------------ /functions ------------------
