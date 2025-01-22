const fs = require('fs'); // Importing the fs library
const path = require('path'); // Importing the path library

module.exports = (client) => {
    const eventsPath = path.join(__dirname, '../events'); /// Setting the path to the events folder

    const readEvents = (dir) => {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                readEvents(filePath);
            } else if (file.endsWith('.js')) {
                const event = require(filePath);
                const eventName = file.split('.')[0];
                if (event.once) {
                    client.once(eventName, (...args) => event.execute(...args, client));
                } else {
                    client.on(eventName, (...args) => event.execute(...args, client));
                }
                console.log(`Loaded event: ${eventName}`); // Log the loaded event
            }
        }
    };

    readEvents(eventsPath); // Reading the events
};