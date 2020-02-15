const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Voici la liste des commandes disponibles :')
        .setDescription('Mon préfix est `cai!`')
        .addField('avatar', 'Afficher votre avatar ou celui d\'un utilisateur')
        .addField('bench', 'Envoi le lien de UserBenchmark pour tester ses compsants')
        .addField('bot-info', 'Voir les informations sur le bot')
        .addField('google', 'Faire une recherche sur Google')
        .addField('help', 'Voici les commandes disponibles')
        .addField('ping', 'Voir le ping du bot')
        .addField('say', 'Envoyer un message via le bot')
        .addField('server-info', 'Avoir des informations sur le serveur')
        .addField('stats', 'Voir vos statistiques ou ceux d\'un utilisateur')
        .addField('version', 'Voir la version du bot');

    const aembed = new Discord.RichEmbed()
        .setColor('red')
        .setTitle('Vos commandes de modération disponibles')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('poll', 'Faire un sondage')
        .addField('tempmute', 'Réduire temporairement un membre au silence');

    const bembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes de modération disponibles')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('kick', 'Expulser un membre')
        .addField('poll', 'Faire un sondage')
        .addField('tempmute', 'Réduire temporairement un membre au silence');

    const cembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes de modération disponibles')
        .addField('ban', 'Bannir un membre')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('poll', 'Faire un sondage')
        .addField('tempmute', 'Réduire temporairement un membre au silence');

    const dembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes de modération disponibles')
        .addField('kick', 'Expulser un membre');

    const eembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes de modération disponibles')
        .addField('ban', 'Bannir un membre');

    const fembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes de modération disponibles')
        .addField('ban', 'Bannir un membre')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('kick', 'Expulser un membre')
        .addField('poll', 'Faire un sondage')
        .addField('tempmute', 'Réduire temporairement un membre au silence');


    if (message.guild.member(message.author).hasPermission('MANAGE_MESSAGES') && !message.guild.member(message.author).hasPermission('KICK_MEMBERS') && !message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
        message.channel.send(embed);
        return message.channel.send(aembed)
    }

    if (message.guild.member(message.author).hasPermission('MANAGE_MESSAGES') && message.guild.member(message.author).hasPermission('KICK_MEMBERS') && !message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
        message.channel.send(embed);
        return message.channel.send(bembed);
    }

    if (message.guild.member(message.author).hasPermission('MANAGE_MESSAGES') && message.guild.member(message.author).hasPermission('BAN_MEMBERS') && !message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
        message.channel.send(embed);
        return message.channel.send(cembed);
    }

    if (message.guild.member(message.author).hasPermission('KICK_MEMBERS') && !message.guild.member(message.author).hasPermission('BAN_MEMBERS') && !message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        message.channel.send(embed);
        return message.channel.send(dembed);
    }

    if (message.guild.member(message.author).hasPermission('BAN_MEMBERS') && !message.guild.member(message.author).hasPermission('KICK_MEMBERS') && !message.guild.member(message.author).hasPermission('MANAGE_MESSAGE')) {
        message.channel.send(embed);
        return message.channel.send(eembed)
    }

    if (message.guild.member(message.author).hasPermission('MANAGE_MESSAGES') && message.guild.member(message.author).hasPermission('KICK_MEMBERS') && message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
        message.channel.send(embed);
        return message.channel.send(fembed);
    }

    message.channel.send(embed);
}

module.exports.help = {
    name: 'help'
}