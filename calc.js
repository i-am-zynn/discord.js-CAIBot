const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = (cient, message, args) => {
    if (!args.join(' ')) {
        return message.channel.send('Vous devez entrer des facteurs à calculer.');
    }

    let calcul;

    try {
        calcul = math.evaluate(args.join(' '))
    } catch (e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.uername}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());
    }

    try {
    const embed = new Discord.RichEmbed()
        .setColor('ORANGE')
        .setTitle('Calcul effectué !')
        .addField('Calcul :', args.join(' '))
        .addField('Résultat :', calcul)
        .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp(new Date());

    message.channel.send(embed);
    } catch(e) {
        const errorembed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Une erreur s\'est produite')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', e)
            .setFooter(`Tentative de ${message.author.uername}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(errorembed);
        console.error(e)
    }
}

module.exports.help = {
    name: 'calc'
}