const Discord = require('discord.js');
const Attachment = require('discord.js')
const client = new Discord.Client();
const Google = require('./Commandes/google');
const Avatar = require('./Commandes/avatar');
const Ping = require('./Commandes/ping');
const Bench = require('./Commandes/bench');
const Mail = require('./Commandes/mail');

client.on('message', function (message) {
    if (Ping.match(message)) {
        return Ping.action(message);
    }
    if (Google.match(message)) {
        return Google.action(message);
    }
    if (Avatar.match(message)) {
        return Avatar.action(message);
    }
    if (Bench.match(message)) {
        return Bench.action(message);
    }
    if (Mail.match(message)) {
        return Mail.action(message);
    }
    if (message == 'Salut' || message == 'salut' || message == 'Hi' || message == 'hi' || message == 'Bonjour' || message == 'bonjour' || message == 'Hello' || message == 'hello' || message == 'Hey' || message == 'hey' || message == 'Coucou' || message == 'coucou') {
        return message.react('👋');
    }
})

client.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Salut' + ' ' + member.displayName + ' ' + '!' + ' ' + 'Bienvenue sur le serveur' + ' ' + member.guild.name + ' ' + '!');
    }).catch(console.error);
})

client.login('token');
