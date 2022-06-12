const Discord = require("discord.js");
const config = require("../../config.js");
const client = config.getClient();

module.exports = {
    executeCommand
}

const status = {
    online: "🟢",
    idle: "🟠",
    dnd: "🔴",
    offline: "⚪"
}

function executeCommand(args, channel, msg) {
    if(args[0] != "userinfo") return;
    if(!args.length > 2 ) return;

    let mentions = msg.mentions.users.size;
    let user;
    if(mentions == 1) {
        user = msg.mentions.users.first();
    } else if(mentions == 0) {
        user = msg.author;
    }
    
    const member = msg.guild.members.cache.get(user.id);

    const presence = (member.presence == null ? "offline" : member.presence.status);

    let userInfoEmbed = new Discord.MessageEmbed()
    .setDescription("Userinfo of <@" + user.id + ">")
    .addField("UserID: ", user.id)
    .addField("Joined time: ", `<t:${Math.floor(member.joinedTimestamp / 1000)}>`)
    .addField("Account created time: ", `<t:${Math.floor(user.createdTimestamp / 1000)}>`)
    .addField("User status: ", status[presence] + ` (${presence})`)
    .addField("Roles number: ", member.roles.cache.size - 1 + ` (Highest: ${member.roles.highest})`)
    .setColor(member.displayHexColor)
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setFooter({text: user.username, iconURL: user.displayAvatarURL({dynamic: true})});
    // online, idle, dnd, offline
  
    channel.send({embeds: [userInfoEmbed]});
}