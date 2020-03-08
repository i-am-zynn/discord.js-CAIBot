const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send('Vous n\'avez pas la permisssion d\'utiliser cette commande.');
    }

    if (!args.join(' ')) {
        return message.channel.send('Veuillez spécifier une question pour le sondage.');
    }

    if (args.join(' ').length > 256) {
        return message.channel.send('La question du sondage ne doit pas dépasser les 256 caractères.');
    }

    const embed = new Discord.RichEmbed()
        .setColor('0xE342E3')
        .setTitle(args.join(' '))
        .setDescription('Interagissez avec les réactions ci-dessous.')
        .setFooter(`Sondage proposé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    try {   
        message.delete();
        message.channel.send(embed)
            .then((m) => {
                m.react('✅');
                m.react('❌');
            })
            .catch((error) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor('0xff0000')
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                    .addField('Erreur', error)
                    .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
                    .setTimestamp(new Date());
                if (error) {
                    console.error(error);

                    message.channel.send(errorembed);
                }
            })
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'poll'
}