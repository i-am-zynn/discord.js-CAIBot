const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor('0x39afe4')
        .setTitle(`Information sur le serveur _${message.guild.name}_`)
        .setThumbnail(message.guild.iconURL)
        .addField('Nom du serveur :', message.guild.name)
        .addField('ID du serveur :', message.guild.id)
        .addField('Date de création du serveur :', moment(message.guild.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
        .addField('Nombre de membres :', message.guild.members.size + ' ' + 'membres')


    message.channel.send(embed)
        .catch((error) => {

            const errorembed = new Discord.RichEmbed()
                .setColor('0xff0000')
                .setTitle('Erreur')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                .addField('Erreur :', error)
                .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
                .setTimestamp(new Date());

            console.error(error);

            message.channel.send(errorembed);
        })
}

module.exports.help = {
    name: 'server-info'
}