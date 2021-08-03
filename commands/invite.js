const Client = require("../structure/Client");
const { Message, MessageEmbed } = require('discord.js');
const { red, green } = require('../color.json')
const emotes = require('../emojis.json')
module.exports = {
    name: "invite",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send(new MessageEmbed()
            .setDescription('💬 | Check your DMs')
            .setColor('GREEN')
        )
        setTimeout(() => {
            message.delete().catch(O_o => {})
        }, 20000)
        msg.delete({timeout: 20000})
        message.author.send(new MessageEmbed()
            .setTitle('`Invite your Deku Bot!`' + `${message.author.username}`)
            .addField('`Deku Bot invite Link`', 'https://discord.com/api/oauth2/authorize?client_id=745977605626527752&permissions=8&scope=bot')
            .addField('`Join The Support Server:`', 'https://discord.gg/ZEaFmbC')
            .setColor('RANDOM')
        )
    }
}