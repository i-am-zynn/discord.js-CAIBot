const Discord = require('discord.js');
const config = require('../config');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Voici la liste des commandes disponibles :')
        .setDescription('Mon préfix est `cai!`')
        .addField('8ball', 'Poser une question au bot')
        .addField('avatar', 'Afficher votre avatar ou celui d\'un utilisateur')
        .addField('bench', 'Envoi le lien de UserBenchmark pour tester ses composants')
        .addField('bot-info', 'Voir les informations sur le bot')
        .addField('calc', 'Faire un calcul')
        .addField('candid', 'Faire une candidature pour faire parti du staff du serveur')
        .addField('color', 'Afficher une couleur')
        .addField('dog', 'Afficher une image de chien')
        .addField('giphy', 'Rechercher et afficher un GIF')
        .addField('google', 'Faire une recherche sur Google')
        .addField('help', 'Voir les commandes disponibles')
        .addField('nick', 'Changer son pseudo ou celui d\'un utilisateur')
        .addField('ping', 'Voir le ping du bot')
        .addField('report', 'Signaler un membre au staff du serveur')
        .addField('say', 'Envoyer un message via le bot')
        .addField('server-info', 'Avoir des informations sur le serveur')
        .addField('stats', 'Voir vos statistiques ou ceux d\'un utilisateur')
        .addField('t', 'Traduire du texte')
        .addField('version', 'Voir la version du bot')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const aembed = new Discord.RichEmbed()
        .setColor('red')
        .setTitle('Vos commandes disponibles en tant que modérateur')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('poll', 'Faire un sondage')
        .addField('tempmute', 'Réduire temporairement un membre au silence')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const bembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes disponibles en tant que modérateur')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('kick', 'Expulser un membre')
        .addField('poll', 'Faire un sondage')
        .addField('tempmute', 'Réduire temporairement un membre au silence')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const cembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes disponibles en tant que modérateur')
        .addField('ban', 'Bannir un membre')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('poll', 'Faire un sondage')
        .addField('tempban', 'Bannir temporairement un utilisateur')
        .addField('tempmute', 'Réduire temporairement un membre au silence')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const dembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes disponibles en tant que modérateur')
        .addField('kick', 'Expulser un membre')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const eembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes disponibles en tant que modérateur')
        .addField('ban', 'Bannir un membre')
        .addField('tempban', 'Bannir temporairement un utilisateur')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const fembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vos commandes disponibles en tant que modérateur')
        .addField('ban', 'Bannir un membre')
        .addField('clear', 'Supprimer un certain nombre de messages')
        .addField('kick', 'Expulser un membre')
        .addField('poll', 'Faire un sondage')
        .addField('tempban', 'Bannir temporairement un utilisateur')
        .addField('tempmute', 'Réduire temporairement un membre au silence')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const gembed = new Discord.RichEmbed()
        .setColor('0x7000AB')
        .setTitle('Vos commandes disponibles en tant qu\'administrateur')
        .addField('prune', 'Congédier les membres ne s\'étant pas connectés depuis 30 jours')
        .setFooter(`Demandé par ${message.author.username}`)
        .setTimestamp(new Date());

    const hembed = new Discord.RichEmbed()
        .setColor('0x7000AB')
        .setTitle('Vos commandes disponibles en tant qu\'administrateur')
        .addField('prune', 'Congédier les membres ne s\'étant pas connectés depuis 30 jours')
        .addField('reload', 'Recharger le fichier d\'une commande')
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (message.guild.member(message.author).hasPermission('ADMINISTRATOR') && message.author.id == config.ownerID) {
        message.channel.send(embed);
        message.channel.send(fembed);
        return message.channel.send(hembed);
    }

    if (message.guild.member(message.author).hasPermission('ADMINISTRATOR') && message.author.id != config.ownerID) {
        message.channel.send(embed);
        message.channel.send(fembed);
        return message.channel.send(gembed);
    }

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

    try {
    message.channel.send(embed);
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e);

        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'help'
}
