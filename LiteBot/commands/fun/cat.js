const randomApi = require("random-jokes-api");
const { MessageEmbed } = require("discord.js");

module.exports = {
    executeCommand
}

function executeCommand(args, channel) {
    if(args[0] != "cat") return;
    
    const kittyEmbed = new MessageEmbed()
    .setTitle("💜 Cat photo 💜")
    .setImage(randomApi.cat())
    .setColor("PURPLE");

    channel.send({embeds: [kittyEmbed]});
}
