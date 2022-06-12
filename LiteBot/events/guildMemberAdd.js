const Discord = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    async execute(client, member) {
        const memberEmbed = new Discord.MessageEmbed()
        .addField("Glad to see you", member.user.username, true)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setColor("#9d6292");
    
        let channel = client.channels.cache.get("958740558740877336"); //Welcome channel
        
        channel.send({embeds: [memberEmbed]});

        member.roles.add("968906966300770334");
    }
}