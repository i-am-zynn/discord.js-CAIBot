const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send('Vous n\'avez pas les permissions !');
    }
    if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send('Je n\'ai pas la permission.');
    } 
    if (!args[0]) {
        return message.channel.send('Vous devez spécifier un nombre de messages à supprimer !');
    }
    else if (isNaN(args[0])) {
        return message.channel.send('Veuillez spécifier un nombre !');
    }
                                                                     
    message.delete()
        .then((m) => {  
            message.channel.bulkDelete(args[0])
                .then((messages) => {
                    message.channel.send(`**${messages.size}** messages ont été supprimés !`)
                        .then((m) => {
                            m.delete(5000)
                        })
                })
                .catch((error) => {
                        console.error(error);
                        return message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                    })
        })
        .catch((error) => {
            console.error(error);
        })
}

module.exports.help = {
    name: 'clear'
}