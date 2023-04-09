require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;

///


const { token } = process.env;
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});



app.get('/', function(request, response) { response.send(`ready:${port}`);});
app.listen(port, () => console.log());





client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/function`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/function/${folder}`)
    .filter((file) => file.endsWith(".js"));

  for (const file of functionFiles)
    require(`./function/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleComponents();
client.handleCommands();

client.login(token);

