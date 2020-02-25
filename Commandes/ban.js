const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Permission manquante')
        .setDescription('Vous n\'avez pas la permission de bannir un membre');

    const aembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Permission manquante')
        .setDescription('Je n\'ai pas la permission de bannir un membre.');

    const bembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Aucun utilisateur mentionné')
        .setDescription('Veuillez mentionner un utilisateur à bannir.');

    const cembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Utilisateur introuvable')
        .setDescription('L\'utilisateur que vous souhaitez bannir est introuvable. Veuillez vérifier la présence de l\'utilisateur que vous souhaitez bannir.');

    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
        return message.channel.send(aembed);
    }

    if (message.mentions.users.size === 0) {
        return message.channel.send(bembed);
    }

    let banMember = message.guild.member(message.mentions.users.first());
    let logChannel = banMember.guild.channels.find(`name`, 'logs');

    if (!banMember) {
        return message.channel.send(cembed);
    }

    let reason = args.slice(1).join(" ");

    const dembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Vous avez été sanctionné(e)')
        .addField('Type de sanction :', 'Bannissement')
        .addField('Bannissement temporaire :', 'Non')
        .addField('Serveur :', message.guild.name)
        .addField('Banni par :', `${message.author.username}#${message.author.discriminator}`)
        .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_');

    const eembed = new Discord.RichEmbed()
        .setColor('0xff0000')
        .setTitle('Un utilisateur a été sanctionné')
        .addField('Type de sanction :', 'Bannissement')
        .addField('Bannissement temporaire :', 'Non')
        .addField('Utilisateur banni :', banMember.user.username)
        .addField('Tag de l\'utilisateur banni :', `#${banMember.user.discriminator}`)
        .addField('ID de l\'utilisateur banni :', banMember.id)
        .addField('Banni par :', message.author.username)
        .addField('Tag du modérateur :', `#${message.author.discriminator}`)
        .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_');

    message.mentions.users.first().send(dembed)
            .then(() => {
                banMember.ban(reason)
                    .then((member) => {
                        message.channel.send(eembed)

                        const logembed = new Discord.RichEmbed()
                            .setColor('0xff0000')
                            .setTitle('Un utilisateur a été sanctionné')
                            .addField('Type de sanction :', 'Bannissement')
                            .addField('Bannissement temporaire :', 'Non')
                            .addField('Utilisateur banni :', banMember.user.username)
                            .addField('Tag de l\'utilisateur banni :', `#${banMember.user.discriminator}`)
                            .addField('ID de l\'utilisateur banni :', banMember.id)
                            .addField('Banni par :', message.author.username)
                            .addField('Tag du modérateur :', `#${message.author.discriminator}`)
                            .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_')
                            .setTimestamp(new Date());

                        logChannel.send(logembed);
                    })
                        .catch((err) => {

                            const errorembed = new Discord.RichEmbed()
                                .setColor('0xff0000')
                                .setTitle('Erreur')
                                .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                                .addField('Erreur :', err);

                            if (err) {
                                console.error(err);
                                return message.channel.send(errorembed);
                            }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                    banMember.ban(reason)
                            .then((member) => {
                                message.channel.send(eembed);

                                const logembed2 = new Discord.RichEmbed()
                                    .setColor('0xff0000')
                                    .setTitle('Un utilisateur a été sanctionné')
                                    .addField('Type de sanction :', 'Bannissement')
                                    .addField('Bannissement temporaire :', 'Non')
                                    .addField('Utilisateur banni :', banMember.user.username)
                                    .addField('Tag de l\'utilisateur banni :', `#${banMember.user.discriminator}`)
                                    .addField('ID de l\'utilisateur banni :', banMember.id)
                                    .addField('Banni par :', message.author.username)
                                    .addField('Tag du modérateur :', message.author.discriminator)
                                    .addField('Raison :', reason ? reason: '_Aucune raison spécifiée_')
                                    .setTimestamp(new Date());

                                logChannel.send(logembed2);
                                    
                            })
                                .catch((err) => {

                                    const errorembed = new Discord.RichEmbed()
                                        .setColor('0xff0000')
                                        .setTitle('Erreur')
                                        .setDescription('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
                                        .addField('Erreur :', err);

                                    if (err) {

                                        console.error(err);

                                        return message.channel.send(errorembed);
                                    }
                                });
                });
};

module.exports.help = {
    name: 'ban'
};
