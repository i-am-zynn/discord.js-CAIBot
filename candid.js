const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    
    let candidChannel = message.guild.channels.find(`name`, 'candidatures');

    if (!candidChannel) {
        return message.channel.send('Vous devez créer un canal nommé `candidatures` pour utiliser cette fonction.');
    }

    if (!args[0]) {
        return message.reply('vous devez écrire pourquoi voulez-vous être dans le staff ? Quels sont vos horaires ? etc...');
    }

    try {
        message.delete();
        message.reply('votre candidature a bien été envoyée au staff du serveur. Vous recevrez un réponse quand le staff aura étudié votre candidature.')
            .then((m) => {
                m.delete(5000);
            })
            .catch((error) => {
                console.error(error);
                message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.');
            });

            const embed = new Discord.RichEmbed()
                .setColor('0xc1c717')
                .setTitle('Nouvelle candidature')
                .addField('Utilisateur ayant postulé :', `${message.author.username}#${message.author.discriminator}`)
                .addField('ID de l\'utilisateur ayant postulé :', message.author.id)
                .addField('Candidature :', args.join(' '))
                .setTimestamp(new Date());

        candidChannel.send(embed);
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Erreur')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        console.error(e);
    }
}

module.exports.help = {
    name: 'candid'
}