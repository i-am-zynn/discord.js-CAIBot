const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let reportedUser = message.guild.member(message.mentions.users.first());

    if (message.mentions.users.size === 0) {
        return message.channel.send('Veuillez mentionner un utilisateur.');
    }

    if (!reportedUser) {
        return message.channel.send('Je n\'ai pas trouvé l\'utilisateur.');
    }

    let reason = args.slice(1).join(' ');

    const reportembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Un utilisateur a été signalé')
        .addField('Utilisateur signalé :', reportedUser.user.username)
        .addField('Tag de l\'utilisateur signalé :', `#${reportedUser.user.discriminator}`)
        .addField('ID de la personne signalée :', reportedUser.id)
        .addField('Utilisateur ayant fait ce signalement :', message.author.username)
        .addField('ID de la personne ayant fait ce signalement :', message.author.id)
        .addField('Canal du signalement :', message.channel)
        .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_');

    let channelreport = message.guild.channels.find(`name`, 'signalements');

    if (!channelreport) {
        return message.channel.send('Un canal nommé `signalements` doit être créé pour pouvoir utiliser la fonction de signalements.');
    }

    message.delete();
    channelreport.send(reportembed);

    message.reply('votre signalement a été envoyé. Un membre du staff l\'analysera et prendra les mesures nécessaires pour éviter que votre problème se reprodise à l\'avenir.')
        .then((m) => {
            m.delete(5000);
        })
}

module.exports.help = {
    name: 'report'
}