const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor('0x39afe4')
        .setTitle(`Information sur le serveur _${message.guild.name}_`)
        .setThumbnail(message.guild.iconURL)
        .addField('Nom du serveur :', message.guild.name)
        .addField('Date de création du serveur :', message.guild.createdAt)
        .addField('Nombre de membres :', message.guild.members.size + ' ' + 'membres')


    message.channel.send(embed)
        .catch((error) => {

            const errorembed = new Discord.RichEmbed()
                .setColor('0xff0000')
                .setTitle('Erreur')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                .addField('Erreur :', error);

            console.error(error);

            message.channel.send(errorembed);
        })
}

module.exports.help = {
    name: 'server-info'
}