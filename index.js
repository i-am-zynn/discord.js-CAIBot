const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
client.commands = new Discord.Collection();
const fs = require('fs');
const config = require('./config');

client.on('message', function (message) {
    if (message.content.startsWith('Recherche')) {
        let args = message.content.split(' ');
        args.shift();

        message.channel.send('Voici le lien de redirection vers les résultats concernant votre recherche : https://www.google.fr/#q=' + args.join('+') + '\n \nVotre recherche :' + ' ' + args.join(' '))
            .then(console.log(message.author.username + '  ' + 'a utilisé la commande Google pour rechercher :' + ' ' + '"' + args.join(' ') + '"'))
            .catch((error) => {
                console.error(error);

                return message.channel.send('Une erreur s\'est produite lors de l\'exécution de la commande. Veuillez réessayer ultérieurement. Si le problème persiste, veuillez contacter Nεξυς#9063.')
            })
            
    }
})

fs.readdir('./Commandes/', (error, f) => {
    if (error) {
        return console.error(error);
    }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
    if (commandes.length <= 0) {
        return console.warn('Aucune commande trouvée !');
    }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) {
        return console.error(error);
    }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(config.token);