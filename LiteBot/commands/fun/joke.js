const jokeApi = require("random-jokes-api");
const { MessageEmbed } = require("discord.js");

module.exports = {
    executeCommand
}

function executeCommand(args, channel) {
    if(args[0] != "joke") return;

    const jokeEmbed = new MessageEmbed()
    .setTitle("😂 Jokes 😂")
    .setDescription(jokeApi.joke())
    .setColor("BLUE");

    channel.send({embeds: [jokeEmbed]});
}