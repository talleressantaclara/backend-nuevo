module.exports = ({ env }) => ({
	// ...
	upload: {
		config: {
			provider: 'cloudinary',
			providerOptions: {
				cloud_name: env('CLOUDINARY_NAME'),
				api_key: env('CLOUDINARY_KEY'),
				api_secret: env('CLOUDINARY_SECRET')
			},
			actionOptions: {
				upload: {},
				delete: {}
			}
		}
	},
	graphql: {
		endpoint: '/graphql',
		shadowCRUD: true,
		enabled: true,
		config: {
			playgroundAlways: true
		}
	}
	// ...
});
