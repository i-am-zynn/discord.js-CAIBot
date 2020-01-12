module.exports = class Mail {
    static match(message) {
        return message.content.startsWith('Mail du serveur');
    }
    static action(message) {
        message.channel.send('Voici l\'adresse e-mail du serveur : caiaide@francemel.fr. \n \nPour les personnes de moins de 16 ans, nous vous demandons d\'avoir l\'accord d\'une personne majeure. \nPour les personnes de moins de 13 ans, nous vous demandons de ne pas nous contacter par e-mail.');

        console.log('Commande mail exécutée par' + ' ' + message.author.username);
    }
}