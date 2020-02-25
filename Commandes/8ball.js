const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[0]) {
        return message.channel.send('Vous devez me poser une question.');
    }

    let question = args.join(' ');
    let reponses = ['Oui', 'Non', 'Peut-être', 'Absolument', 'Haha la blague 🤣 ! Pas du tout', 'Je ne sais pas, peut-être que oui, peut-être que non'];
    let res = Math.floor(Math.random() * reponses.length);

    message.delete()
        .then((m) => {
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.username)
        .addField('Question', question)
        .addField('Réponse', reponses[res])
        .setTimestamp(new Date());

    message.channel.send(embed);

        })
}

module.exports.help = {
    name: '8ball'
}