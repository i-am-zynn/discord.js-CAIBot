const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');
const config = require('../config');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor('0x39afe4')
        .setTitle('Mes information')
        .setThumbnail(client.user.displayAvatarURL)
        .addField('Mon nom :', client.user.username)
        .addField('Mon tag :', '#' + client.user.discriminator)
        .addField('Mon ID :', client.user.id)
        .addField('Date et heure de ma création :', moment(client.user.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
        .addField('Version :', config.version)
        .addField('Présent sur :', client.guilds.size + ' serveur(s)');

    message.channel.send(embed)
        .catch((error) => {
            const errorembed = new Discord.RichEmbed()
                .setColor('0xff0000')
                .setTitle('Erreur')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                .addField('Erreur :', error);

            console.error(error);

            message.channel.send(errorembed);
        })
}

module.exports.help = {
    name: 'bot-info'
}