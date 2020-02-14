const config = require('../config');

module.exports = (client) => {

    client.user.setPresence({
        game: {
            name: `la version ${config.version}`,
            type: "WATCHING"
        }
    });
};
