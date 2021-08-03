const Client = require("../structure/Client");
const emotes = require('../emojis.json');
const { red, green } = require('../color.json')
const ms = require(`ms`);
const {
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: "mute",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        const {
            member,
            mentions
        } = message
        if (!member.hasPermission('MANAGE_GUILD')) {
            return;
        }
        if (!message.guild.roles.cache.find(x => x.name === 'mute')) {
            return message.channel.send(new MessageEmbed()
                .setDescription(`${emotes.error} There is no ` + '`mute`' + ` role reminder must be in lowercaps`)
                .setColor('FF0000')
            )
        }
        const time = args[1]
        if (!time)
        {
            message.channel.send(new MessageEmbed()
                .setDescription("How long do you want the mute to last \n ?mute <ping member> <amount of time> <hours or min> <reason>")
                .setColor("RED")
            )
            return
        }
        const timeComplexity = args[2]
        if (!timeComplexity)
        {
                        message.channel.send(new MessageEmbed()
                .setDescription("How long do you want the mute to last \n ?mute <ping member> <amount of time> <hours or min> <reason>")
                .setColor("RED")
            )
            return
        }
        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            if (targetMember.hasPermission('ADMINISTRATOR')) {
                return message.channel.send(new MessageEmbed()
                    .setDescription(`:x: You Can't mute an admin`)
                    .setColor('F60909')
                )
            }
            if (targetMember.roles.cache.has(x => x.name === 'mute'))
            {
                message.channel.send(`${target} has been muted`)
                return;
            }
            message.channel.send(new MessageEmbed()
                .setDescription(`✅ You have muted ${target} for ${time} ${timeComplexity}`)
                .setFooter('Reminder if the bot turns off the mute will become perminant')
                .setColor('09F62D')
            )
            targetMember.roles.add(x => x.name === "mute")
            var channel = message.guild.channels.cache.find(ch => ch.name === "log");
            channel.send(new MessageEmbed()
                .setTitle('Muted member')
                .addField('Member muted', `${target}`, true)
                .addField('From', `${message.author}`, true)
                .setColor('GREEN')
            )

            setTimeout(() => {
                targetMember.roles.remove(message.guild.roles.cache.find(x => x.name === "mute"))
                message.channel.send(new MessageEmbed()
                    .setDescription(`✅ unmuted ${target}`)
                    .setColor('09F62D')
                )
                channel.send(new MessageEmbed()
                    .setDescription(`${target}'s mute period over`)
                    .setColor('GREEN')
                )
            }, ms(`${time} ${timeComplexity}`))
        } else {
            return message.channel.send(new MessageEmbed()
                .setDescription(`:x: please mention someone to mute`)
                .setColor('FF0000')
            )
        }
    }
}