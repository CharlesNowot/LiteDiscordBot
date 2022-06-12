module.exports = {
    executeCommand
}

function executeCommand(args, channel) {
    if(args[0] != "google") return;

    channel.send("Google don't bite: " + "https://www.letmegooglethat.com/?q=" + args.slice(1).join("+"));
}