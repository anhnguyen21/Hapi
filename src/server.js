'use strict';

const Hapi = require('@hapi/hapi');
const Bcrypt = require('bcrypt');
const setupDb = require('./database/setup');
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('../package.json');
const User = require('./database/models/accounts');

const validate = async (request, username, password) => {
    var users = await User.query().findById(34);
    console.log(users);
    const user = users.username;
    console.log(user);
    if (!user) {
        console.log("No user")
        return { credentials: null, isValid: false };
    }
    console.log("pass"+ users.password);
    const isValid = await Bcrypt.compare(password, users.password);
    const credentials = { id: users.id, name: users.name };
    return { isValid, credentials };
};

const init = async () => {

    const server = Hapi.server({
        host: process.env.APP_HOST || 'localhost',
        port: process.env.PORT || 3000,
    });

    await server.register(require('@hapi/basic'));
    const swaggerOptions = {
        info: {
                title: 'Test Hapi',
                version: Pack.version,
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    server.auth.strategy('simple', 'basic', { validate });

    setupDb();

    server.route(require('./routes/account'));

    await server.start();
    console.log('Server running on', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();