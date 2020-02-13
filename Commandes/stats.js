const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;

    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Statistiques de ${membre.user.username}`)
        .setThumbnail(membre.user.displayAvatarURL)
        .addField('Pseudo :', membre.user.username)
        .addField('Tag :', ` #${membre.user.discriminator}`)
        .addField('Activité :', membre.user.presence.game ? membre.user.presence.game.name: 'Cet utilisateur ne joue pas')
        .addField('A créé son compte le :', membre.user.createdAt)
        .addField('A rejoint le serveur le :', membre.joinedAt);

        message.channel.send(embed)
            .catch((error) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor('0xff0000')
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                    .addField('Erreur :', err);
                if (error) {
                    console.error(error);

                    message.channel.send(errorembed);
                }
            })
}

module.exports.help = {
    name: 'stats'
}