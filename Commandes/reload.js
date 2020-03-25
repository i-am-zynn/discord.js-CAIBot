const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle('✅ Fichier rechargé ✅')
        .setDescription(`Le fichier **${args[0]}.js** a été rechargé avec succès.`)
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (message.author.id != '581748249166217232' && message.author.id != '360010766876672000') {
        return message.channel.send('Seuls Nεξυς#9063 et Woomy4680_exe#6538 peuvent utiliser cette commande.');
    }

    if (!args[0]) {
        return message.channel.send('Veuillez spécifier un fichier à recharger.');
    }

    try {
        delete require.cache[require.resolve(`./${args.join(' ')}.js`)];
        client.commands.delete(args.join(' '));
        let pull = require(`./${args.join(' ')}`);
        client.commands.set(args.join(' '), pull);
    } catch (e) {
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

    message.channel.send(embed);
}

module.exports.help = {
    name: 'reload'
}