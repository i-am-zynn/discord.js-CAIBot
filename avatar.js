const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.guild.member(message.mentions.members.first() || message.member);

    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Avatar de _${membre.user.username}_`)
        .setDescription(`[Ouvrir dans le navigateur](${membre.user.displayAvatarURL})`)
        .setImage(membre.user.displayAvatarURL)
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    message.channel.send(embed);
}

module.exports.help = {
    name: 'avatar'
}