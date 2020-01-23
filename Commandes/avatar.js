module.exports = class Avatar {
    static match(message) {
        return message.content.startsWith('Quel est mon avatar ?');
    }
    static action(message) {
        message.channel.send('Avatar de' + ' ' + message.author.username + ' ' + ':' + ' ' + message.author.avatarURL)

        .then(console.log('Commande avatar exécutée par' + ' ' + message.author.username))
        .catch(console.error(error) && console.error(message.author.username + ' ' + 'a tenté de voir son avatar mais cela n\'a pas fonctionné'))
    }
}