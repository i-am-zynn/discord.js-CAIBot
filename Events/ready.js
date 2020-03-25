const config = require('../config');

module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: config.presence,
            type: config.presenceType
        }
    });
};