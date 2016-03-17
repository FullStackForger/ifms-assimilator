'use strict'
const Assimilator = require('assimilator')
const fullstackConfig = require('./config/fullstackforger.config')
const indieConfig = require('./config/indieforger.config')

// start Indieforger Forger site
new Assimilator
	.Server(indieConfig)
	.start().then(() => {
		//console.log('successful')
	}).catch((err) => {
		console.log(err)
	})


// start Full Stack Forger site
new Assimilator
	.Server(fullstackConfig)
	.start().then(() => {
		//console.log('successful')
	}).catch((err) => {
		console.log(err)
	})


