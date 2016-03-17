module.exports = {
	server: {
		env: "production",
		host: "localhost",
		port: 8003
	},
	settings: {
		globals: {
			path: __dirname + '/..'
		},
		theme: {
			path: './themes/assimilator',
			layout: 'default'
		},
		blog: {
			path: '../blog.fullstackforger.com'
		},
		pages: {
			path: './pages/'
		},
		files: {
			index: ['index.html', 'index.htm'],
			path: './projects/'
		}
	},
	context: {
		title: 'My personal site',
		menu: {
			main: [
				//{ label: 'about', url: '/about' },
				//{ label: 'contact', url: '/contact' },
				//{ label: 'project-demo', url: '/project-demo' },
				{ label: 'IndieForger', url: 'https://indieforger.com' }
			]
		},
		// font awesome based icons
		social: [
			{ channel: 'twitter', url: 'https://twitter.com/fullstackforger' },
			{ channel: 'gamepad', url: 'https://indieforger.com' }
		]
	}
}