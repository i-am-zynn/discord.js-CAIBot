module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "la version 1.0.0",
            type: "WATCHING"
        }
    });
};