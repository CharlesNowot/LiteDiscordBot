const general = require("../../api/general_api.js");
const Discord = require("discord.js");

module.exports = {
    executeCommand
}

const choices = {
    heads: parseInt(1),
    tails: parseInt(2)
}

function executeCommand(args, channel, msg) {
    if(args[0] != "coinflip") return;
    if(args.length != 2) {
        channel.send("You need to use `heads/tails` in the second argument");
        return;
    }
    if(args[1] != "heads" && args[1] != "tails") {
        return channel.send("You need to use `heads/tails` in the second argument");
    }

    const random = general.getRandom(1, 2);
    const userChoice = choices[args[1]];

    const embed = new Discord.MessageEmbed()
    .setDescription("🪙 Coinflip minigame 🪙")
    .setColor("PURPLE")
    .addField(msg.author.username + " fliped coin and it landed on ", (random == 1 ? "Heads" : "Tails"))
    .addField(args[1] + " was your choice, and you", (userChoice == random ? "Win🥳" : "Lost😭"));

    channel.send({embeds: [embed]});
}