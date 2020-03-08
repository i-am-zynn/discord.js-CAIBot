const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[0]) {
        return message.channel.send('Veuillez spécifier une couleur à générer.');
    }
    if (args[0].length > 7) {
        return message.channel.send('Couleur invalide.');
    }

    const embed = new Discord.RichEmbed()
        .setColor(`${args.join(' ')}`)
        .setTitle('Couleur générée !')
        .setDescription('La couleur que vous avez souhaité généré est la couleur de cet embed. Si la couleur le l\'embed est noire et que vous n\'avez pas souhaité générer cette couleur, c\'est que la couleur que vous avez tenté de générer n\'existe pas.')
        .addField('Couleur demandée :', args.join(' '));

    message.channel.send(embed);
}

module.exports.help = {
    name: 'color'
}