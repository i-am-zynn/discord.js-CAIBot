module.exports = class Google {
    static match(message) {
        return message.content.startsWith('Recherche');
    }
    static action(message) {
        let args = message.content.split(' ');
        args.shift();
        message.channel.send('https://www.google.fr/#q=' + args.join('%20'))

        .then(console.log('Commande google exécutée par' + ' ' + message.author.username + ' ' + 'pour' + ' ' + '"' + args.join(' ') + '"'))
        .catch(console.error(error) && console.error(message.author.username + ' ' + 'a tenté de faire une recherche sur google mais cela n\'a pas fonctionné'))

    }
}
