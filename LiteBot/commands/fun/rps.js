const Discord = require("discord.js");

module.exports = {
    executeCommand
}

const rpsApi = require("../../api/rps_api.js");

function executeCommand(args, channel, msg) {
    if(args[0] != "rps") return;
    if(args[1] == null) {
        channel.send("Please use `[r - rock/p - paper/s - scisoors]`")
        return;
    }

    if(!rpsApi.getRpsChoices().includes(args[1])) return channel.send("Choose the rigth option `.rps [r - rock/p - paper/s - scisoors]`");

    let choice = args[1].substring(0, 1);
    let botChoice = rpsApi.getBotChoice(); // losowy wybor bota
    let translatedBotChoice = rpsApi.translateToFullChoice(botChoice);
    let translatedUserChoice = rpsApi.translateToFullChoice(choice);
    let winner = rpsApi.getWinner(choice, botChoice); // porownuje wybor uzytkownika i losowy wybor bota
    let winnerStatus = rpsApi.getWinnerStatus(choice, winner);
    let translatedEmbedColors = rpsApi.translateWinnerEmbedColor(winnerStatus);
    let winnerFullStatus = rpsApi.translateWinnerStatus(winnerStatus);

    const rpsEmbed = new Discord.MessageEmbed()
    .setColor(translatedEmbedColors)
    .addField(`Your choice:`, translatedUserChoice, true)
    .addField(`Bot choose:`, translatedBotChoice, true)
    .setFooter(winnerFullStatus);

    channel.send({embeds: [rpsEmbed]});
}
