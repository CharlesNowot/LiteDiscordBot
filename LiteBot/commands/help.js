const Discord = require("discord.js");

const config = require("../config.js");

const client = config.getClient();
const prefix = config.getPrefix();

module.exports = { 
    executeCommand
}

function executeCommand(args, channel) {
    if(args[0] != "help") return;

    let helpEmbed = new Discord.MessageEmbed();

    let helpMessages = [
        `help - shows all commands`,
        `rps - rock paper scissors minigame`,
        `clear - delete messages`,
        `skin - check minecraft skin`,
        `userinfo - check userinfo of any user on this community`,
        `coinflip - coinflip minigame`,
        `level - check your currently level`,
        `leaderboard - check level leaderboard`,
        `cat - shows cute cats`,
        `joke - jokes`
    ];

    for(let i = 0; i < helpMessages.length; i = i + 2) {
        helpEmbed.addField("`" + prefix + helpMessages[i] + "`", "`" + prefix + helpMessages[i + 1] + "`");
    }

    helpEmbed.setTitle("Help center");
    helpEmbed.setColor("#7852FF");
    helpEmbed.setFooter({text: client.user.username, iconURL: client.user.avatarURL({dynamic: true})});

    channel.send({embeds : [helpEmbed]})
}