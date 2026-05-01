export const environment: {
	apiUrl: string;
	onApiFall: 'spinner' | 'app reload' | 'app';
	appVersion: string;
	production: boolean;
	defaultLanguage: string;
} = {
	apiUrl: 'https://api.webart.work',
	onApiFall: 'app',
	appVersion: '1.0.0',
	production: true,
	defaultLanguage: 'ua',
};
