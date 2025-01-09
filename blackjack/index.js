
const deckArray = [];
const cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let userCardsArray = [];
let dealerCardsArray = [];
let userPoints = 0;
let dealerPoints = 0;
let gameOver = false;

const dealerCardsElem = document.querySelector(".dealerCards");
const dealerScore = document.querySelector(".dealerScore");
const userCardsElem = document.querySelector(".userCards");
const userScore = document.querySelector(".userScore");

const hitBtn = document.querySelector(".hitBtn");
const standBtn = document.querySelector(".standBtn");
const restartBtn = document.querySelector(".restartBtn");

const messageElem = document.querySelector(".messageElem");

// ------------- functions ------------------

// För varje suit tilldelas ett av varje värde från values
function createCardDeck() {
    for (let suit of cardSuits) {
        for (let value of cardValues) {
            deckArray.push({ suit, value });
        }
    }
}

function deckShuffle() {
    for (let i = deckArray.length - 1; i > 0; i--) {
        const j = createRandomNumber(1, i + 1);
        // *** onödigt anrop?
        const temporaryStoredValue = deckArray[i];
        deckArray[i] = deckArray[j];
        deckArray[j] = temporaryStoredValue;
    }
}

function dealOneCard() {
    const drawnCard = deckArray.pop();
    return drawnCard;
}

function scoreOfCards(cards) {
    let score = 0;
    let includesAce = false;
    for (let card of cards) {
        if (["J", "Q", "K"].includes(card.value)) {
            score += 10;
        } else if (card.value === "A") {
            includesAce = true;
            score += 11;
        } else {
            score += card.value;
        }
    }
    // Värdet av A bestäms till 11 eller 1 beroende på score
    if (includesAce && score > 21) {
        score -= 10;
    }
    return score;
}

function compareScoresFunc() {
    if (userPoints > 21) {
        messageElem.textContent = "User lost, scored over 21. Dealer won!";
        gameOver = true;
    } else if (dealerPoints > 21) {
        messageElem.textContent = "Dealer lost, scored over 21. User won!";
        gameOver = true;
    } else if (dealerPoints >= 17 && userPoints <= 21) {
        if (dealerPoints > userPoints) {
            messageElem.textContent = "Dealer won!"
        } else if (dealerPoints < userPoints) {
            messageElem.textContent = "User won!"
        } else {
            messageElem.textContent = "The scores are the same. It's a tie!"
        }
        gameOver = true;
    } else {
        messageElem.textContent = "ERROR";
    }
}


// ------------ /functions ------------------




// ------------ interactions ------------------

// ------------ /interactions ------------------
