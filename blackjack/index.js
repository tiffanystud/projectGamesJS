
const deckArray = [];
const cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let userCardsArray = [];
let dealerCardsArray = [];
let userPoints = 0;
let dealerPoints = 0;
let gameOver = false;

const dealerCardsElem = document.querySelector(".dealerCards");
const dealerScore =  document.querySelector(".dealerScore");
const userCardsElem = document.querySelector(".userCards");
const userScore = document.querySelector(".userScore");

const hitBtn = document.querySelector(".hitBtn");
const standBtn = document.querySelector(".standBtn");
const restartBtn = document.querySelector(".restartBtn");

const messageElem = document.querySelector(".messageElem");