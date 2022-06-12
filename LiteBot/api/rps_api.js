module.exports = {
    getWinner,
    getRpsChoices,
    translateToFullChoice,
    getBotChoice,
    translateWinnerStatus,
    translateWinnerEmbedColor,
    getWinnerStatus
}

const generalApi = require("./general_api.js");

const rpsChoices = ["r", "p", "s", "rock", "paper", "scissors"];
const rpsFullNameChoices = [":rock: - rock", ":roll_of_paper: - paper", ":scissors: - scissors"];
const rpsShortWinnerStates = ["draw", "won", "lose"];
const rpsFullWinnerStates = {
    draw: "It's draw",
    won: "You won!",
    lose: "You lose"
};
const rpsColors = {
    draw: "#ffffff",
    won: "GREEN",
    lose: "RED"
}

const schematic = {
    r: rpsChoices[2],
    p: rpsChoices[0],
    s: rpsChoices[1]
};

function getWinnerStatus(userChoice, winner) {
    switch(winner) {
        case rpsChoices[0]: case rpsChoices[1]: case rpsChoices[2]:
            return (userChoice == winner ? rpsShortWinnerStates[1] : rpsShortWinnerStates[2]);
        case "d": default:
            return rpsShortWinnerStates[0];
    }
}

function compareChoices(firstChoice, secondChoice) {
    if(schematic[firstChoice] == secondChoice) {
        return firstChoice;
    }

    if(schematic[secondChoice] == firstChoice) {
        return secondChoice;
    }

    if(secondChoice == firstChoice) {
        return "d"; // draw
    }
}

function getRpsChoices() { return rpsChoices; }
function getBotChoice() { return rpsChoices[generalApi.getRandom(0, 2)]; }
function translateWinnerEmbedColor(winnerStatus) { return rpsColors[winnerStatus]; }
function translateToFullChoice(shortNameChoice) { return rpsFullNameChoices[rpsChoices.indexOf(shortNameChoice)]; }
function translateWinnerStatus(winnerStatus) { return rpsFullWinnerStates[winnerStatus]; }
function getWinner(userChoice, botChoice) { return compareChoices(userChoice, botChoice); }
