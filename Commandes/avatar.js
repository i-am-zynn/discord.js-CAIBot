module.exports = class Avatar {
    static match(message) {
        return message.content.startsWith('Quel est mon avatar ?');
    }
    static action(message) {
        message.channel.send('Avatar de' + ' ' + message.author.username + ' ' + ':' + ' ' + message.author.avatarURL);

        console.log('Commande avatar exécutée par' + ' ' + message.author.username);
    }
}