const Discord = require('discord.js');
const Attachment = require('discord.js')
const client = new Discord.Client();
const Google = require('./Commandes/google');
const Avatar = require('./Commandes/avatar');
const Ping = require('./Commandes/ping');
const Bench = require('./Commandes/bench');
const Mail = require('./Commandes/mail');
const HSL = require('./Commandes/hsl');
const Woomy = require('./Commandes/woomy');

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
    if (message.content.startsWith('Salut') || message.content.startsWith('salut') || message.content.startsWith('Hi') || message.content.startsWith('hi') || message.content.startsWith('Bonjour') || message.content.startsWith('bonjour') || message.content.startsWith('Hello') || message.content.startsWith('hello') || message.content.startsWith('Hey') || message.content.startsWith('hey') || message.content.startsWith('Coucou') || message.content.startsWith('coucou')) {
        return message.react('👋');
    }
    if (HSL.match(message)) {
        return HSL.action(message);
    }
    if (Woomy.match(message)) {
        return Woomy.action(message);
    }
})

client.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Salut' + ' ' + member.displayName + ' ' + '!' + ' ' + 'Bienvenue sur le serveur' + ' ' + member.guild.name + ' ' + '!');
    }).catch(console.error);
})

client.login('NjYyMjM3NjAzMjkwMTUyOTYy.XiMh_Q.LBjsaH1xOEO56sZ1B0GOXE4E08g');