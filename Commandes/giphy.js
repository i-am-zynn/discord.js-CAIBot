const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send(`Voici un lien redirigeant vers des GIFs qui correspondent à votre recherche : https://giphy.com/explore/${args.join('-')} \n \nVotre recherche : ${args.join(' ')}`)
        .then((m) => {
            console.log(`${message.author.username} a utilisé la commande Giphy pour rechercher : ${args.join(' ')}`);
        })
        .catch((m) => {
            console.error(error);

            message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.');
        })
}

module.exports.help = {
    name: 'giphy'
}