const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');

module.exports.run = (client, message, args) => {
    const membre = message.guild.member(message.mentions.members.first() || message.member);

    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`Statistiques de ${membre.user.username}`)
        .setThumbnail(membre.user.displayAvatarURL)
        .addField('Pseudo :', membre.user.username)
        .addField('Tag :', ` #${membre.user.discriminator}`)
        .addField('ID', membre.id)
        .addField('Activité :', membre.user.presence.game ? membre.user.presence.game.name: 'Cet utilisateur ne joue pas')
        .addField('A créé son compte le :', moment(membre.user.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
        .addField('A rejoint le serveur le :', moment(membre.joinedAt).tz("Europe/Paris").format('[Le] L [à] LTS'));

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