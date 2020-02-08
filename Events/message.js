const Discord = require('discord.js');
const prefix = 'cai!';

module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') {
        return;
    }

    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) {
        return;
    }

    if (!message.content.startsWith(prefix)) {
        return;
    }

    if (message.author.id != '581748249166217232' && message.author.id != '360010766876672000' && message.author.id != '541319683945791534' && message.author.id != '439333004247302145' && message.author.id != '479311894721724445' && message.author.id != '499608622003781632' && message.author.id != '504230013994926080' && message.author.id != '279205522970902528' && message.author.id != '83928726282174464' && message.author.id != '183602738435719168' && message.author.id != '529015301979897879') {
        return message.channel.send('Vous n\'avez pas la permission de m\'utiliser');
    }
    
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = client.commands.get(commande);

        if (!cmd) {
            return;
        }

            cmd.run(client, message, args);
};