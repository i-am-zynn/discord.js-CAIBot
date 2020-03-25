const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send('Voici un lien pour faire un test de vos composants : https://www.userbenchmark.com. \nIl suffit d\'installer l\'application sur votre ordinateur, la lancer, puis suivre les étapes. \nUne fois que l\'analyse est terminée, veuillez nous envoyer le lien de la page qui va s\'ouvrir dans votre navigateur.');
}

module.exports.help = {
    name: 'bench'
}
