const Client = require("../structure/Client");
const { MessageEmbed, ClientApplication, MessageAttachment } = require('discord.js');
const { Message } = require('discord.js')
const level = require("discord-xp")
const canvacord = require("canvacord")
module.exports = {
    name: "lb",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const rawLeaderboard = await level.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
 
        if (rawLeaderboard.length < 1) return message.channel.send(new MessageEmbed()
            .setDescription('Nobody is in the leaderboard yet')
            .setColor("RANDOM")
        );
 
        const leaderboard = await level.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
 
        const lb = await leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.


        message.channel.send(new MessageEmbed()
            .setDescription(`**Leaderboard**:\n\n${lb.join("\n\n")}`)
            .setColor("GREEN")
        )
    }
}