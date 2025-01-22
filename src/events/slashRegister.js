const { REST, Routes } = require('discord.js'); // Importing the discord.js library
const dotenv = require('dotenv'); // Importing the dotenv library
const fs = require('fs'); // Importing the fs library
const path = require('path'); // Importing the path library

dotenv.config();

const commands = [];
// Correct the path to the commands directory
const foldersPath = path.resolve(__dirname, '../commands');
const commandFolders = fs.readdirSync(foldersPath);

console.log(`Found command folders: ${commandFolders.join(', ')}`);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); // Filter out non-JS files

    console.log(`Processing folder: ${folder}, found command files: ${commandFiles.join(', ')}`);

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`); // Warning if the command is missing a required property
        }
    }
}
// Refresh the global application (/) commands
const rest = new REST().setToken(process.env.TOKEN); 

async function execute() {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );
        console.log(`Successfully reloaded ${commands.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { execute };