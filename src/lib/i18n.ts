import * as runtime from '$lib/paraglide/runtime';

import { createI18n } from '@inlang/paraglide-sveltekit';

export const i18n = createI18n(runtime, {
	pathnames: {
		'/resume': {
			fr: '/cv',
			en: '/resume'
		},
		'/projects': {
			fr: '/projets',
			en: '/projects'
		}
	},
	prefixDefaultLanguage: 'always',
	defaultLanguageTag: 'fr'
});
