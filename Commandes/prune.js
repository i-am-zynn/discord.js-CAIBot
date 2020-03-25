const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Permission manquante')
        .setDescription('Vous n\'avez pas la permission de congédier.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const aembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Permission manquante')
        .setDescription('Je n\'ai pas les permission de congédier.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) {
        return message.channel.send(aembed);
    }
     
        await message.guild.pruneMembers(30)
            .then((pruned) => {
                if (pruned == 0) {
                    return message.channel.send('Aucun membres n\'a été expulsé.');
                } if (pruned == 1) {
                    return message.channel.send('1 membre a été expulsé du serveur.');
                } else {
                    return message.channel.send(`${pruned} membres ont été expulsés du serveur.`);
                }
            })
            .catch((e) => {
                const errorembed = new Discord.RichEmbed()
                    .setColor('0xff0000')
                    .setTitle('Erreur')
                    .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                    .addField('Erreur :', e)
                    .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
                    .setTimestamp(new Date());

                message.channel.send(errorembed);
                console.error(e);
            })
}

module.exports.help = {
    name: 'prune'
}