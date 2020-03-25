const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (message.author.id != '581748249166217232' && message.author.id != '360010766876672000') {
        return message.channel.send('Seuls Nεξυς#9063 et Woomy4680_exe#6538 peuvent utiliser cette commande. Cette commande sera disponible pour tout le monde lorsqu\'elle sera bien fixée.');
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