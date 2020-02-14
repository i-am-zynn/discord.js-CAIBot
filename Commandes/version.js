const Discord = require('discord.js');
const config = require('../config');

module.exports.run = (client, message, args) => {
    message.channel.send('Version du bot : `' + config.version + '`');
}

module.exports.help = {
    name: 'version'
}