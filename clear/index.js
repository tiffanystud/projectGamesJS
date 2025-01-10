
const markedWrapper = document.createElement("div");
markedWrapper.classList.add("markedWrapper", "wrapper");

const fillBtn = document.createElement("button");
fillBtn.textContent = "Fill Cleared";

interactionWrapper.appendChild(markedWrapper);
markedWrapper.appendChild(fillBtn);

inputBtn.addEventListener("click", function () {
    const maxValue = inputUser.value;
    gridWrapper.innerHTML = "";
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