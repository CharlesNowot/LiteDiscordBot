module.exports = {
    getRandom,
    isInPercentageRange
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInPercentageRange(range) {
    let randomPercentage = getRandom(0, 100);

    return randomPercentage <= range;
}