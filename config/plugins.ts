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
	},
	'strapi-neon-tech-db-branches': {
		enabled: true,
		config: {
			neonApiKey: 'vujp696e3odqvcvn3fflqv65rn9v9sl3j5z2vbt6016pgt33sl1cltfbpv9auqkj',
			neonProjectName: 'talleres',
			neonRole: 'neondb_owner'
			//(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
		}
	}
});
