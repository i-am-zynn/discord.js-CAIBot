const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let debut = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - debut}**ms`))
};

module.exports.help = {
    name: 'ping'
};
