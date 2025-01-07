
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
// ------------ /interaction ------------------

// ------------ grid ------------------
const gridWrapper = document.createElement("article");
gridWrapper.classList.add("gridWrapper", "wrapper");
bodyElem.appendChild(gridWrapper);
// ------------ /grid ------------------