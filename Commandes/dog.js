const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    const dog = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => json.message);

    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Wouaf 🐶')
        .setImage(dog);

    message.channel.send(embed);
}

module.exports.help = {
    name: 'dog'
}