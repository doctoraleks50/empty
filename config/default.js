'use strict';
module.exports = {
    port: 3000,
    db: {
        dialect: 'postgresql',
        username: 'user',
        password: 'pass',
        database: 'db',
        host: '127.0.0.1',
        port: 5432,
        logging: false,
        dialectOptions: {
            charset: 'utf8'
        }
    },
};
