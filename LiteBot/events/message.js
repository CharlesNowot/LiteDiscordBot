const config = require("../config.js")
const prefix = config.getPrefix();

function getCmd(path) {
    return require("../commands/" + path + ".js")
}

/* Commands */
const help = getCmd("help");
const clear = getCmd("clear");
const userinfo = getCmd("fun/userinfo");
const rps = getCmd("fun/rps");
const skin = getCmd("fun/skin");
const coinflip = getCmd("fun/coinflip");
const joke = getCmd("fun/joke");
const cat = getCmd("fun/cat");
const google = getCmd("fun/google");
const dice = getCmd("fun/dice");

module.exports = {
    name: "message",
    async execute(client, msg) {
        if(msg.author.id == client.user.id) return;

        let content = msg.content;
        let author = msg.author;
        let channel = msg.channel;

        if(!content.startsWith(prefix)) return;

        content = content.substring(prefix.length);

        let args = content.split(" ");
        let member = msg.member;
        let guild = msg.guild;

        if(args[0] == "") { channel.send("Please use command `.help`"); }

        help.executeCommand(args, channel);
        clear.executeCommand(args, channel, msg);
        rps.executeCommand(args, channel, msg);
        skin.executeCommand(args, channel, client);
        userinfo.executeCommand(args, channel, msg);
        coinflip.executeCommand(args, channel, msg);
        joke.executeCommand(args, channel);
        cat.executeCommand(args, channel);
        google.executeCommand(args, channel);
        dice.executeCommand(args, channel, msg)
    }
}
