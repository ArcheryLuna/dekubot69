const Client = require("../structure/Client");
const { MessageEmbed, ClientApplication } = require('discord.js');
const { Message } = require('discord.js')
const level = require("discord-xp");
level.setURL("mongodb+srv://scram:scram@cluster0.tinss.mongodb.net/data")
module.exports = {
    name: "serversetname",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_GUILD" || "ADMINISTRATOR"))
        {
            return    
        }
        const name = args.join(" ")
        if(!name)
        {
            return
        }
        message.guild.setName(name)
    }
}