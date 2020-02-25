const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    let logChannel = message.guild.channels.find(`name`, 'logs');

    message.channel.send('Avatar de _' + membre.user.username + '_ \n \n' + membre.user.displayAvatarURL)
        .then((m) => {
            const logEmbed = new Discord.RichEmbed()
                .setTitle('Un membre vient d\'afficher son avatar ou celui d\'un autre membre')
                .addField('Membre :', `${message.author.username}#${message.author.discriminator}`)
                .addField('A affiché l\'avatar de :', `${membre.user.username}#${membre.user.discriminator}`)
                .setTimestamp(new Date());

            logChannel.send(logEmbed);
        })
}

module.exports.help = {
    name: 'avatar'
}