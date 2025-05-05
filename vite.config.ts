import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			disableAsyncLocalStorage: true,
			urlPatterns: [
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/en/:path(.*)?'],
						['fr', '/fr/:path(.*)?']
					]
				}
			]
		}),
		imagetools(),
		mkcert()
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
