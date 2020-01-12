module.exports = class Google {
    static match(message) {
        return message.content.startsWith('!google');
    }
    static action(message) {
        let args = message.content.split(' ');
        args.shift();
        message.channel.send('https://www.google.fr/#q=' + args.join('%20'));

        console.log('Commande google exécutée par' + ' ' + message.author.username + ' ' + 'pour' + ' ' + '"' + args.join(' ') + '"');
    }
}
