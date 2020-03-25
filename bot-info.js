const Discord = require('discord.js');
const moment = require('moment-timezone');
moment.locale('fr');
const os = require('os');
const config = require('../config');

module.exports.run = (client, message, args) =>{
    let cpuusage = process.cpuUsage();
    let memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

    const embed = new Discord.RichEmbed()
        .setColor('0x39afe4')
        .setTitle('Mes informations')
        .setThumbnail(client.user.displayAvatarURL)
        .addField('Mon nom :', client.user.username)
        .addField('Mon tag :', '#' + client.user.discriminator)
        .addField('Mon ID :', client.user.id)
        .addField('Date et heure de ma création :', moment(client.user.createdAt).tz("Europe/Paris").format('[Le] L [à] LTS'))
        .addField('Version :', config.version)
        .addBlankField()
        .addField('Système d\'explotation :', os.type(), true)
        .addField('Version du système d\'exploitation :', os.release() , true)
        .addField('Architecture :', os.arch(), true)
        .addField('Mémoire allouée :', Math.round(process.memoryUsage().rss / 1024 / 1024) + " MB", true)
        .addField('Mémoire utilisée :', memory + " MB", true)
        .addField('Processeur :', os.cpus()[0].model, true)
        .addField('Utilisation du processeur :', Math.floor(cpuusage.user / cpuusage.system) + "%", true)
        .addField('Version Node JS :', process.version, true)
        .addField('Version Discord.js :', Discord.version, true);

    try {
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
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Erreur')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e);

        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'bot-info'
}