const Client = require("../structure/Client");
const { MessageEmbed, ClientApplication } = require('discord.js');
const { Message } = require('discord.js')
const level = require("discord-xp");
module.exports = {
    name: "sl",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_MESSAGES"))
        {
            return;
        }
        const target = message.mentions.members.first() || message.author
        const xp = parseInt(args[1])
        if (!xp || xp < -1000 || xp > 10000000000000000000000000000000000000000000000000000000000000000)
        {
            message.channel.send(new MessageEmbed()
                .setDescription('Please enter a number that is `0` or `100` or `any thing in between`!')
                .setColor('RED')
            );
            return;
        }
        const user = level.setLevel(target.id, message.guild.id, xp)

        message.channel.send(new MessageEmbed()
            .setDescription(`${target}, has now got ${xp} levels from ${message.author}`)
            .setColor("GREEN")
        )
    }
}