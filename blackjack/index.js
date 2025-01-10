
const deckArray = [];
const cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let userCardsArray = [];
let dealerCardsArray = [];
let userPoints = 0;
let dealerPoints = 0;
let gameOver = false;

let userBalance = 1000;
let currentBet = 0;

const dealerCardsElem = document.querySelector(".dealerCards");
const dealerScoreElem = document.querySelector(".dealerScore");
const userCardsElem = document.querySelector(".userCards");
const userScoreElem = document.querySelector(".userScore");

const betInput = document.querySelector(".betAmount");
const balanceElem = document.querySelector(".balanceElem");
const betBtn = document.querySelector(".betBtn");

const hitBtn = document.querySelector(".hitBtn");
const standBtn = document.querySelector(".standBtn");
const restartBtn = document.querySelector(".restartBtn");

const messageElem = document.querySelector(".messageElem");

// ------------- functions ------------------

// För varje kort skapas ett objekt med egenskap suit och value
function gameButtonsFunc(trueOrFalse) {
    hitBtn.disabled = trueOrFalse;
    standBtn.disabled = trueOrFalse;
    restartBtn.disabled = trueOrFalse;
}

function gameStart() {
    userCardsArray = [dealOneCard(), dealOneCard()];
    dealerCardsArray = [dealOneCard(), dealOneCard()];

    userPoints = scoreOfCards(userCardsArray);
    dealerPoints = scoreOfCards(dealerCardsArray);

    createCardsDOM(userCardsArray, userCardsElem);
    createCardsDOM(dealerCardsArray, dealerCardsElem, true); // *** Dölj dealerns andra kort

    userScoreElem.textContent = "Score: " + userPoints;
    dealerScoreElem.textContent = "Score: " + scoreOfVisibleCard(dealerCardsArray); // *** Visa endast poängen för det synliga kortet

    if (isBlackjack(userCardsArray)) {
        messageElem.textContent = "User has blackjack! User won!";
        updateBalance(currentBet * 2.5);
        endGameRound();
        return;
    } else if (isBlackjack(dealerCardsArray)) {
        messageElem.textContent = "Dealer has blackjack! Dealer won!";
        endGameRound();

        return;
    }

    messageElem.textContent = "";
    gameOver = false;
}

function placeBet() {
    const betAmount = parseInt(betInput.value);

    if (betAmount > userBalance) {
        messageElem.textContent = "You don't have enough balance to place this bet."
        return false;
    }

    updateBalance(-betAmount);
    currentBet = betAmount;

    return true;
}

function updateBalance(amount) {
    userBalance += amount;
    balanceElem.textContent = "Balance: €" + userBalance;
}

function createCardsDOM(cards, cardElem, hideSecondCard = false) {
    cardElem.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const newCard = document.createElement("div");
        newCard.classList.add("eachCard");
        if (hideSecondCard && i === 1) {
            newCard.textContent = "Hidden";
        } else {
            newCard.textContent = card.value + " of " + card.suit;
        }
        cardElem.appendChild(newCard);
    }
}

function createCardDeck() {
    for (let suit of cardSuits) {
        for (let value of cardValues) {
            deckArray.push({ suit, value });
        }
    }
}

function deckShuffle() {
    for (let i = deckArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

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
            score += parseInt(card.value);
        }
    }

    // Värdet av A bestäms till 11 eller 1 beroende på score
    if (includesAce && score > 21) {
        score -= 10;
    }

    return score;
}

function scoreOfVisibleCard(cards) {
    let score = 0;
    if (cards.length > 0) {
        const card = cards[0]; // Endast det första kortet
        if (["J", "Q", "K"].includes(card.value)) {
            score += 10;
        } else if (card.value === "A") {
            score += 11;
        } else {
            score += parseInt(card.value);
        }
    }
    return score;
}

function compareScoresFunc() {
    if (userPoints > 21) {
        messageElem.textContent = "User lost, scored over 21. Dealer won!";
        endGameRound();

    } else if (dealerPoints > 21) {
        messageElem.textContent = "Dealer lost, scored over 21. User won!";
        updateBalance(currentBet * 2);
        endGameRound();

    } else if (dealerPoints >= 17 && userPoints <= 21) {
        if (dealerPoints > userPoints) {
            messageElem.textContent = "Dealer won!";

        } else if (dealerPoints < userPoints) {
            messageElem.textContent = "User won!";
            updateBalance(currentBet * 2);

        } else if (dealerPoints === userPoints && (dealerPoints === 17 || dealerPoints === 18 || dealerPoints === 19)) {
            messageElem.textContent = "Dealer won!";

        } else {
            messageElem.textContent = "The scores are the same. It's a tie!";
            updateBalance(currentBet);
        }

        endGameRound();
    }
    runOutOfMoneyChecker();
}

function isBlackjack(cards) {
    if (cards.length == 2) {
        let aceInHand = false;
        let tenInHand = false;

        for (let card of cards) {
            if (card.value === "A") {
                aceInHand = true;
            } else if (
                card.value === "10" || card.value === "J" ||
                card.value === "Q" || card.value === "K") {
                tenInHand = true;
            }
        }

        if (aceInHand && tenInHand) {
            return aceInHand && tenInHand;
        } else {
            return false;
        }
    }


}

function runOutOfMoneyChecker() {
    if (userBalance <= 0) {
        messageElem.textContent = "Game over. User has run out of money."
        endGameRound();
    }
}

function endGameRound(){
    gameOver = true;
    gameButtonsFunc(true);

    createCardsDOM(dealerCardsArray, dealerCardsElem);
    dealerScoreElem.textContent = "Score: " + dealerPoints;
}
// ------------ /functions ------------------


// ------------ interactions ------------------
betBtn.addEventListener("click", function () {
    if (placeBet()) {
        gameButtonsFunc(false);
        gameStart();
    }
})

hitBtn.addEventListener("click", function () {
    if (gameOver) {
        return;
    }
    userCardsArray.push(dealOneCard());
    userPoints = scoreOfCards(userCardsArray);

    createCardsDOM(userCardsArray, userCardsElem);
    userScoreElem.textContent = "Score: " + userPoints;

    if (userPoints > 21) {
        messageElem.textContent = "User lost, scored over 21. Dealer won!";

        endGameRound();
    }

    runOutOfMoneyChecker();

})

standBtn.addEventListener("click", function () {
    if (gameOver) {
        return;
    }

    createCardsDOM(dealerCardsArray, dealerCardsElem);

    while (dealerPoints < 17) {
        dealerCardsArray.push(dealOneCard());
        dealerPoints = scoreOfCards(dealerCardsArray);
    }

    createCardsDOM(dealerCardsArray, dealerCardsElem);
    dealerScoreElem.textContent = "Score: " + dealerPoints;

    compareScoresFunc();
})

restartBtn.addEventListener("click", function () {
    createCardDeck();
    deckShuffle();
    gameStart();
})
// ------------ /interactions ------------------


createCardDeck();
deckShuffle();
gameButtonsFunc(true);
