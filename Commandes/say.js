const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Fraude de permission')
        .setDescription('Vous ne pouvez pas m\'utiliser pour mentionner tout les membres du serveur.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@everyone')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(message.author).hasPermission('MENTION_EVERYONE') && message.content.includes('@here')) {
        return message.channel.send(embed);
    }
    
    let say = args.join(' ').slice(0);

    try {
        message.delete();
        message.channel.send(say);
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        console.error(e);
    }
}

module.exports.help = {
    name: 'say'
}