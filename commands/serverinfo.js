const Client = require("../structure/Client");
const { MessageEmbed, ClientApplication, Guild } = require('discord.js');
const { Message } = require('discord.js')
const level = require("discord-xp");
level.setURL("mongodb+srv://scram:scram@cluster0.tinss.mongodb.net/data")
module.exports = {
    name: "serverinfo",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        message.channel.send(new MessageEmbed()
            .setTitle(`${message.guild.name} | Server Stats`)
            .setDescription("This Will Give accurate information about your server.")
            .setThumbnail(message.guild.iconURL({ dynamic : true , format : "png" }))
            .addField("Server name and Acroniym", `\`${message.guild.name}\` and \`${message.guild.nameAcronym}\``)
            .addField("When Server was Created", `${message.guild.createdAt}`)
            .addField("Who Is the owner of the guild", `<@${message.guild.ownerID}>`)
            .addField("How many roles in the server", `${message.guild.roles.cache.size}`)
            .setColor("RANDOM")
        )
    }
}