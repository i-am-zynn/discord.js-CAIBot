module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "la version 2.0",
            type: "WATCHING"
        }
    });
};
