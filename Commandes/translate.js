const Discord = require('discord.js');
const translate = require('@vitalets/google-translate-api');

module.exports.run = (client, message, args) => {
    let langage = args[0];
    let Text = args.slice(1).join(' ');

    if (!langage) {
        return message.channel.send('Vous devez choisir un langage dans lequel traduire votre texte.');
    }

    if (!Text) {
        return message.channel.send('Vous devez entrer du texte à traduire.');
    }
 
    translate(Text, {to: langage}).then(res => {
        message.channel.send(res.text);
        // message.channel.send(res.from.language.iso);
    }).catch(err => {
        console.error(err);
    });
}

module.exports.help = {
    name: 'traduc' && 't'
}