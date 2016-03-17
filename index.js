'use strict'
const Assimilator = require('assimilator')
const Forger = require('forger')

const fullstackConfig = require('./config/fullstackforger.config')
const indieConfig = require('./config/indieforger.config')

function startServer(config, next) {
	new Assimilator
		.Server(config)
		.start().then(() => next())
		.catch((err) => next(err))
}

Forger
	.sequence(
		(next) => startServer(fullstackConfig, next),
		(next) => startServer(indieConfig, next)
	)
	.then(() => console.log('All servers started'))
	.catch((error) => console.error(error))
