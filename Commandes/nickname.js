const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Permission manquante')
        .setDescription('Vous n\'avez pas la permission de changer votre pseudo.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    const aembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Permission manquante')
        .setDescription('Je n\'ai pas la permission de changer le pseudo d\'un utilisateur.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (!message.guild.member(message.author).hasPermission('CHANGE_NICKNAME')) {
        return message.channel.send(embed);
    }
    if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) {
        return message.channel.send(aembed);
    }

    const membre = message.guild.member(message.mentions.users.first());

    let newNickname = args.slice(1).join(' ');

    if (!newNickname) {
        newNickname = membre.user.username;
    }

    try {
        await membre.setNickname(newNickname);
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        return console.error(e);
    }

    message.channel.send(`✅ Pseudo de ${membre} modifié en _${newNickname}_.`);
}

module.exports.help = {
    name: 'nick'
}