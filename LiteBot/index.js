const Discord = require("discord.js");

/* Config */
const config = require("./config.js");

/* General variables */
const client = config.getClient();
const token = config.getToken();

const handler = require("./handler.js");

handler.loadFunctions(client, handler.functionTypes.EVENTS);

client.login(token);

console.log("Hello World");
