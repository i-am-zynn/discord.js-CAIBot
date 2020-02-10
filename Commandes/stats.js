const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;

    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Statistiques de ${message.author.username}`)
        .setThumbnail(membre.user.displayAvatarURL)
        .addField('Pseudo :', membre.user.username)
        .addField('Tag :', ` #${membre.user.discriminator}`)
        .addField('Activité :', membre.user.presence.game ? membre.user.presence.game.name: 'Cet utilisateur ne joue pas')
        .addField('A créé son compte le :', membre.user.createdAt)
        .addField('A rejoint le serveur le :', membre.joinedAt);

        message.channel.send(embed);
}

module.exports.help = {
    name: 'stats'
}