const Client = require("../structure/Client");
const { MessageEmbed, ClientApplication, MessageAttachment } = require('discord.js');
const { Message } = require('discord.js')
const level = require("discord-xp")
const canvacord = require("canvacord")
module.exports = {
    name: "rank",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const target = message.mentions.users.first() || message.author
        
        const user = await level.fetch(target.id, message.guild.id)
        const neededXp = level.xpFor(parseInt(user.level) + 1)
        if (!user)
        {
            message.channel.send(new MessageEmbed()
                .setDescription(`${target} does not have xp Try send some messages`)
                .setColor("RED")
            )
            return;
        }
        const useravatar = target.avatarURL({format : "png" , dynamic : false})
        const rank = new canvacord.Rank()
            .setAvatar(useravatar)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setProgressBar('#FFA500', "COLOR")
            .setUsername(target.username)
            .setStatus(target.presence.status)
            .setDiscriminator(target.discriminator)
            .setLevel(user.level)
            .setBackground("IMAGE", "gal.png")
        rank.build()
            .then(data => {
                const attachment = new MessageAttachment(data, 'rank.png')
                message.channel.send(attachment)
            })
    }
}