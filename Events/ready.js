module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "la version 1.2.0",
            type: "WATCHING"
        }
    });
};
