module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "la version 1.4.1",
            type: "WATCHING"
        }
    });
};