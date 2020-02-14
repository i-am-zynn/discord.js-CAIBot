const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send(`Voici le lien de redirection vers les résultats concernant votre recherche : https://www.google.fr/#q=${args.join('+')} \n \n__Votre recherche__ : ${args.join(' ')}`)
        .then(console.log(`${message.author.username} a utilisé la commande Google pour rechercher : "${args.join(' ')}`))
        .catch((error) => {
            const errorembed = new Discord.RichEmbed()
                .setColor('0xff0000')
                .setTitle('Erreur')
                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                .addField('Erreur', error);
            if (error) {
                console.error(error);

                message.channel.send(errorembed);
            }
        })
}

module.exports.help = {
    name: 'google'
}