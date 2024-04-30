import NewLogo from './extensions/logo.svg';
import FavIcon from './extensions/favicon.ico';

export default {
	config: {
		locales: ['es'],
		auth: {
			logo: NewLogo
		},
		menu: {
			logo: NewLogo
		},
		head: {
			favicon: FavIcon
		},
		tutorials: false
	},

	bootstrap(app: any) {
		console.log(app);
	}
};
