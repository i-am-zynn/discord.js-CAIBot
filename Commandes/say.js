const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    let say = args.join(' ').slice(0);

    message.delete();
    message.channel.send(say);
}

module.exports.help = {
    name: 'say'
}