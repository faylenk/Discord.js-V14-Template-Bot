const { ActivityType } = require('discord.js')
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      client.user.setPresence({ 
        activities: [{ 
            name: 'use "/help" to see the commands!', 
            type: ActivityType.Streaming, 
            url: 'https://twitch.tv/yourchannel' 
        }], 
        status: 'online' 
    });
      console.log(`Logged in ${client.user.tag}`);
      console.log(`Straming activity set for ${client.user.tag}`);
    },
  };
  