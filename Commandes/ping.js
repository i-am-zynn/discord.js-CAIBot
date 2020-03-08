const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const start = Date.now();
    message.channel.send("Ping 🏓")
        .then(sendedMessage => {
            const stop = Date.now();
            const diff = (stop - start);

            const embed = new Discord.RichEmbed()
                .setTitle('🏓 Pong 🏓')
                .addField('Temps du retour du message :', `**${diff}**ms`)
                .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
                .setTimestamp(new Date());

                if (diff >= 300) {

                    embed.setColor('RED');
                    embed.setDescription('❌ Le ping est mauvais ❌');
                
                } else if (diff >= 150) {
                
                    embed.setColor('ORANGE');
                    embed.setDescription('⚠ Le ping est médiocre ⚠');
                
                } else if (diff < 150) {
                
                    embed.setColor('GREEN');
                    embed.setDescription('✅ Le ping est correcte ✅');
                }

            sendedMessage.edit(embed);
    });

    // let debut = Date.now();
    
    // message.channel.send('Ping 🏓...')
    //     .then((m) => {
            
    //         const embed = new Discord.RichEmbed()
    //             .setTitle('🏓 Pong 🏓')
    //             .addField('Temps du retour du message :', `**${Date.now() - debut}**ms`)
    //             .setFooter(`Demandé par ${message.author.username}`, message.author.displayAvatarURL)
    //             .setTimestamp(new Date());
                
    //         if (Date.now() - debut >= 300) {

    //             embed.setColor('RED');
    //             embed.setDescription('❌ Le ping est mauvais ❌');

    //         } else if (Date.now() - debut >= 150) {

    //             embed.setColor('ORANGE');
    //             embed.setDescription('⚠ Le ping est médiocre ⚠');

    //         } else if (Date.now() - debut < 150) {

    //             embed.setColor('GREEN');
    //             embed.setDescription('✅ Le ping est correcte ✅');
    //         }
    
    //         m.edit(embed)
            
    //     });
}

module.exports.help = {
    name: 'ping'
}