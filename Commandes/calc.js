const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = (cient, message, args) => {
    if (!args[0]) {
        return message.channel.send('Vous devez entrer des facteurs à calculer.');
    }

    let calcul;

    try {
        calcul = math.evaluate(args.join(' '))
    } catch (e) {
        return message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.');
    }

    const embed = new Discord.RichEmbed()
        .setColor('ORANGE')
        .setTitle('Calcul effectué !')
        .addField('Calcul :', args.join(' '))
        .addField('Résultat :', calcul);

    message.channel.send(embed);
}

module.exports.help = {
    name: 'calc'
}