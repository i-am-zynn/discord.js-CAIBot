const Discord = require('discord.js');
const config = require('../config');

module.exports.run = (client, message, args) => {
    if (message.author.id != config.ownerID) {
        return message.channel.send('Seul le créateur de ce bot peut utiliser cette commande.');
    }
    
    try {
        eval(args.join(' '));
        message.react('✅');
      } catch (err) {
        message.react('❌');
        
        const embed = new Discord.RichEmbed()
            .setColor('0xff0000')
            .setTitle('Erreur')
            .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            .addField('Erreur :', err)
            .setFooter(`Tentative de ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp(new Date());

        message.channel.send(embed);
        console.error(err);
      }
}

module.exports.help = {
    name: 'eval'
}
