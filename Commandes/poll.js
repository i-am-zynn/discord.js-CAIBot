const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send('Vous n\'avez pas la permisssion d\'utiliser cette commande.');
    }

    const embed = new Discord.RichEmbed()
        .setColor('0xE342E3')
        .setTitle(args.join(' '))
        .setDescription('Interagissez avec les réactions ci-dessous.')
        .setFooter(`Sondage proposé par ${message.author.username}`);

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
                .addField('Erreur', error);
            if (error) {
                console.error(error);

                message.channel.send(errorembed);
            }
        })
}

module.exports.help = {
    name: 'poll'
}