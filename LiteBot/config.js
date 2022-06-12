const {Client, Intents} = require('discord.js');
const allIntents = new Intents(32767);

module.exports = {
    getPrefix,
    getClient,
    getToken
}

const color = "#9d6292";
const prefix = ".";
const token = "OTU4NzM5ODMzOTkwMjgzMjk1.YkRuDA.sWxVqNxx_gpPeioWUonLa7eqpx8"; //Bot token
const client = new Client({intents: allIntents});

function getPrefix() { return prefix; }

function getClient() { return client; }

function getToken() { return token; }