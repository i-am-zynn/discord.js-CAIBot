const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
        return message.channel.send('Vous n\'avez pas la permission !');
    }
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
        return message.channel.send('Le bot n\'a pas la permission !');
    }
    if (message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    let kickMember = message.guild.member(message.mentions.users.first());

    if (!kickMember) {
        return message.channel.send('Je n\'ai pas trouvé l\'utilisateur !');
    }

    let reason = args.join(' ').slice(22);

    message.mentions.users.first().send(`Vous êtes expulsé du serveur **${message.guild.name}** par ${message.author.username}. \n \n Raison :` + ' ' + reason)
            .then(() => {
                kickMember.kick(reason)
                    .then((member) => {
                        message.channel.send(`${member.user.username} a été expulsé par ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) {
                                console.error(err);
                                return message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.');
                            }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        kickMember.kick(reason)
                            .then((member) => {
                                message.channel.send(`${member.user.username} a été expulsé par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) {
                                        console.error(err);
                                        return message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.');
                                    }
                                });
                });
};

module.exports.help = {
    name: 'kick'
};
