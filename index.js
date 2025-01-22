// index.js
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});
client.commands = new Collection();

// Handlers
const handlersPath = path.join(__dirname, 'src', 'handlers');
fs.readdirSync(handlersPath).forEach(handler => {
    require(`./src/handlers/${handler}`)(client);
});

// Slash Register
const slashRegister = require('./src/events/slashRegister');
slashRegister.execute();

client.on('messageCreate', message => {
    if (message.mentions.has(client.user) && !message.author.bot) {
        message.reply('Hello! Please use "/help" to see the commands!');
    }
});

client.login(process.env.TOKEN);