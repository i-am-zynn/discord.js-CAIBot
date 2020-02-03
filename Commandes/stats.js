const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x1b940a,
            title: `Statistiques du l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: 'ID de l\'utilisateur :',
                    value: membre.id 
                },
                {
                    name: 'A créé son compte Discord le :',
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: 'Activité de jeu :',
                    value: membre.user.presence.game ? membre.user.presence.game.name : 'Cet utilisateur ne joue pas'
                },
                {
                    name: 'A rejoint le serveur le :',
                    value: moment.utc(membre.joinedAt).format('LL')
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    });
};

module.exports.help = {
    name: 'stats'
};
