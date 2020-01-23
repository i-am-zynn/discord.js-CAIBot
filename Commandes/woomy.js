module.exports = class Woomy {
    static match(message) {
        return message.content.startsWith('Ping Woomy');
    }
    static action(message) {
        message.channel.send('Mentionnez <@360010766876672000>, il aime bien les notifs 😀')

        .then(console.log(message.author.username + ' ' + 'a ping Woomy'))
        .catch(console.error(error) && console.error(message.author.username + ' ' + 'a tenté de ping Wommy mais cela n\'a pas fonctionné'))
    }
}