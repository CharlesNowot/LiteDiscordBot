module.exports = {
    executeCommand
}

function executeCommand(args, channel, msg) {
    if(args[0] != "clear") return;

    if(isNaN(args[1])) {
        channel.send("You have to use number");
        return;
    }

    let clearCount = parseInt(args[1]);

    if(clearCount > 100 || clearCount < 2) {
        channel.send("You can delete messages from 2 to 100 (count)");
        return;
    }

    channel.bulkDelete(clearCount);     /*.then(msgs => {
        console.log(`Deleted ${msgs.size}`)
    });*/

}