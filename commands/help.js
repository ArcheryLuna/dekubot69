const Client = require("../structure/Client");
const discord = require("discord.js")
const { Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",
    
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send(new MessageEmbed()
            .setDescription("💬|Check your DMS")
            .setColor("RANDOM")
        )
        const command = args[0]
        if(!command)
        {
            message.author.send(new discord.MessageEmbed()
                .setTitle(`${message.author.username} Help command`)
                .setURL("https://dekubot.tk")
                .setThumbnail(message.author.avatarURL({ dynamic : false, format : "png"}))
                .setDescription(`Deku Bot originaly was created as a bot called U w U bot and now it is called deku bot. Deku bot was created because I hated Mee6 because it dident allow me to add two youtube channels uploads at once without paying £7.99 a month and I dident like that so I built this bot. <@518754382075133953> \n \n **Visit the new Website dashboard!!!** To click on the title\n __**🖥|Statistics**__ \n **Ping :** \`${client.ws.ping} MS\` **Version :** \`3\` **Servers :** \`${client.guilds.cache.size} Servers\` **Prefix :** \`${client.prefix}\` \n **__Commands__**`)
                .addField("Fun Commands", "`ping`, `meme`, `say`, `serverinfo`")
                .addField("Leveling Commands", "`rank`, `setlevel`, `leaderboard`, `addlevel`")
                .addField("Moderation Commands", "`mute`, `modmail`, `purge`, `slowmode`, `mute`, `unmute`, `warn`, `kick`, `ban`, `serversetname`")
                .addField("Server Infomation", `Server Owner : <@${message.guild.ownerID}>, When was the server created : ${message.guild.createdAt}, Server Name : ${message.guild.name}, How Many Members : ${message.guild.memberCount} Members`)
                .setColor("RANDOM")
            )
        }
        if(command === "ping")
        {
            message.channel.send(new MessageEmbed()
                .setTitle(`${message.author.username} Help command`)
                .setURL("https://paypal.me/ArcheryLuna")
                .setThumbnail(message.author.avatarURL({ dynamic : false, format : "png"}))
                .setDescription("This command is used to show to average time it takes for the message to get resieved and then sent to your server.")
                .setColor("RANDOM")
            )
        }
        msg.delete({timeout: 20000})
    }
}