const Discord = require("discord.js");
const config = require("../../config.js");
const client = config.getClient();

module.exports = {
    executeCommand
}

async function executeCommand(args, channel) {
    if(args[0] != "skin") return;
    if(args.length != 2) { channel.send("Wrong arguments length"); return; }

    const skinEmbed = new Discord.MessageEmbed()
    .setColor("#9d6292")
    .setTitle(`${args[1]}'s skin:`)
    .setImage(`https://minotar.net/body/${args[1]}/100`)
    .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})});

    channel.send({embeds: [skinEmbed]});
}