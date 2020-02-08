const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let debut = Date.now();
    message.channel.send(`Ping 🏓 !`)
        .then((m) => m.edit(`Pong 🏓 ! Le retour du message a pris **${Date.now() - debut}**ms.`));
}

module.exports.help = {
    name: 'ping'
}