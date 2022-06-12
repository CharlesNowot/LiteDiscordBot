module.exports = {
    name: "ready",
    async execute(client) {
        console.log(`logged as ${client.user.tag}`);

        client.user.setStatus("idle");

        client.user.setActivity(  
            "Made by Charles#0383",
            {type: "PLAYING"}
        );
    }
}