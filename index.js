'use strict';
const Assimilator = require('assimilator');

Assimilator
	.start(require('./config/config.js'))
	.then((server) => {
		server.connections.forEach((connection) => {
			console.log(`\nServer started at: ${connection.info.uri}`);
		});
	})
	.catch((error) => {
		console.error(error.stack);
	});