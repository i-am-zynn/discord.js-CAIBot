module.exports = class Ping {
    static match(message) {
        return message.content.startsWith('ping');
    }
    static action(message) {
        let début = Date.now();
        message.channel.send('Ping')
            .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));

        console.log('Commande ping exécutée par' + ' ' + message.author.username);
    }
}