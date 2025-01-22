const fs = require('fs'); // Importing the fs library
const path = require('path'); // Importing the path library

module.exports = (client) => {
    const commandsPath = path.join(__dirname, '../commands'); // Setting the path to the commands folder

    const loadCommands = (dir) => {
        const files = fs.readdirSync(dir); // Reading the directory
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                loadCommands(filePath);
            } else if (file.endsWith('.js')) {
                const command = require(filePath);
                if (command && command.data && command.data.name) {
                    client.commands.set(command.data.name, command);
                    console.log(`Loaded command: ${command.data.name}`);
                } else {
                    console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "data.name" property.`); // Warning if the command is missing a required property
                }
            }
        }
    };

    loadCommands(commandsPath); // Loading the commands
};