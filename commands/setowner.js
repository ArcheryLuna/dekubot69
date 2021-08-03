const Client = require("../structure/Client");
const { Message } = require('discord.js');
const { red, green } = require('../color.json')
const emotes = require('../emojis.json')
module.exports = {
    name: "setowner",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            if(!args[0])
            {
                return
            }
            message.guild.setOwner(args[0], "Because")
        }
    }
}