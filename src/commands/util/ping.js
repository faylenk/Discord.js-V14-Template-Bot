const { SlashCommandBuilder, MessageFlags } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong and shows the bot latency.'),
        flags: MessageFlags.Ephemeral, // This will make the response only visible to the user who used the command (new way of making responses ephemeral)
    async execute(interaction) {
        await interaction.reply('**Pong!** My latency is: ' + `*${Math.round(interaction.client.ws.ping)}*` + 'ms');
    },
};