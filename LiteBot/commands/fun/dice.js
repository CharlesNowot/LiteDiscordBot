const { MessageEmbed } = require("discord.js");
const { getRandom } = require("../../api/general_api.js");

module.exports = { executeCommand }

function executeCommand(args, channel, msg) {
    if(args[0] != "dice") return;

    const embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription('**' + msg.author.username + '** rolled a dice!')
    .addField("You got: ", getRandom(1, 6) + " :game_die:", true)
    .setFooter({text: msg.author.username, iconURL: msg.author.displayAvatarURL({dynamic: true})});

    channel.send({embeds: [embed]})
}
