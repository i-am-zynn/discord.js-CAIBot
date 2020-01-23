module.exports = class Bench {
    static match(message) {
        return message.content.startsWith('Test des composants');
    }
    static action(message) {
        message.channel.send('Voici un lien pour faire un test des composants : https://www.userbenchmark.com. Il suffit d\'installer l\'application, la lancer, puis suivre les étapes.')

        .then(console.log('Commande bench exécutée par' + ' ' + message.author.username))
        .catch(console.error(error) && console.error(message.author.username + ' ' + 'a tenté d\'exécuter la commande bench mais cela n\'a pas fonctionné'))
    }
}