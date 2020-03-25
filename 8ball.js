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

    const ambed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Aucune question posée')
        .setDescription('Vous devez poser une question au bot.')
        .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    if (!args[0]) {
        return message.channel.send(ambed);
    }

    let question = args.join(' ');
    let reponses = ['Oui', 'Non', 'Peut-être', 'Absolument', 'Haha la blague 🤣 ! Pas du tout', 'Je ne sais pas, peut-être que oui, peut-être que non'];
    let res = Math.floor(Math.random() * reponses.length);

    try {
    message.delete()
        .then((m) => {
        const bmbed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.username)
            .addField('Question', question)
            .addField('Réponse', reponses[res])
            .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

    message.channel.send(bmbed);

        })
        .catch((error) => {
            const errorembed = new Discord.RichEmbed()
                .setColor('0xff0000')
                .setTitle('Erreur')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                .addField('Erreur :', error)
                .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
                .setTimestamp(new Date());

            message.channel.send(errorembed);
            console.error(error);
        })

    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Erreur')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        console.error(e)
    }
}
module.exports.help = {
    name: '8ball'
}